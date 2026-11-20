/**
 * Shopping cart, stored in Medusa (Store API → /store/carts).
 * Prices and totals come from Medusa in rupees for the India region.
 */
import {
  MEDUSA_BACKEND_URL,
  MEDUSA_PUBLISHABLE_KEY,
  MEDUSA_REGION_ID,
} from "@/lib/medusa-config";

export interface CartItem {
  id: string;
  variant_id: string;
  product_id: string;
  product_handle: string | null;
  product_title: string | null;
  title: string;
  variant_title: string | null;
  thumbnail: string | null;
  quantity: number;
  unit_price: number;
}

export interface Cart {
  id: string;
  items: CartItem[];
  item_subtotal: number;
  total: number;
  currency_code: string;
  completed_at: string | null;
}

async function store<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${MEDUSA_BACKEND_URL}${path}`, {
    ...init,
    headers: {
      "x-publishable-api-key": MEDUSA_PUBLISHABLE_KEY,
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || `Cart request failed (${res.status})`);
  }
  return res.json();
}

/** Newest items first */
function normalise(cart: Cart): Cart {
  return { ...cart, items: [...(cart.items || [])].reverse() };
}

export async function createCart(): Promise<Cart> {
  const { cart } = await store<{ cart: Cart }>("/store/carts", {
    method: "POST",
    body: JSON.stringify({ region_id: MEDUSA_REGION_ID }),
  });
  return normalise(cart);
}

/** Returns null if the cart no longer exists or was already checked out */
export async function getCart(id: string): Promise<Cart | null> {
  try {
    const { cart } = await store<{ cart: Cart }>(`/store/carts/${id}`);
    return cart.completed_at ? null : normalise(cart);
  } catch {
    return null;
  }
}

export async function addLineItem(cartId: string, variantId: string, quantity: number): Promise<Cart> {
  const { cart } = await store<{ cart: Cart }>(`/store/carts/${cartId}/line-items`, {
    method: "POST",
    body: JSON.stringify({ variant_id: variantId, quantity }),
  });
  return normalise(cart);
}

export async function updateLineItem(cartId: string, lineId: string, quantity: number): Promise<Cart> {
  const { cart } = await store<{ cart: Cart }>(`/store/carts/${cartId}/line-items/${lineId}`, {
    method: "POST",
    body: JSON.stringify({ quantity }),
  });
  return normalise(cart);
}

export async function removeLineItem(cartId: string, lineId: string): Promise<Cart> {
  const { parent } = await store<{ parent: Cart }>(`/store/carts/${cartId}/line-items/${lineId}`, {
    method: "DELETE",
  });
  return normalise(parent);
}

import type { Cart, CartItem } from "@/lib/cart-api";
import { formatPrice } from "@/lib/format";
import { SITE } from "@/lib/site-info";

/** "Size M", or null for products without sizes */
export function sizeLabel(item: CartItem) {
  const v = item.variant_title;
  return v && v !== "Default variant" ? `Size ${v}` : null;
}

/**
 * Online payment isn't set up yet, so checkout continues on WhatsApp with
 * the order already written out (items, sizes, total, cart ID, note).
 */
export function whatsappCheckoutUrl(cart: Cart, note?: string) {
  const lines = cart.items.map((item) => {
    const size = sizeLabel(item);
    return `• ${item.product_title ?? item.title}${size ? ` (${size})` : ""} × ${item.quantity} — ${formatPrice(
      item.unit_price * item.quantity
    )}`;
  });
  const text = [
    `Hi ${SITE.name}, I'd like to place this order:`,
    "",
    ...lines,
    "",
    `Total: ${formatPrice(cart.item_subtotal)}`,
    ...(note?.trim() ? ["", `Order note: ${note.trim()}`] : []),
    `Cart ID: ${cart.id}`,
  ].join("\n");
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

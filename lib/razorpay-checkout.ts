/**
 * Online payment with Razorpay.
 *
 * 1. The Medusa backend saves the customer's details on the cart and creates
 *    a Razorpay order for the cart total (/store/razorpay/order).
 * 2. Razorpay's own checkout popup takes the payment (UPI, cards, netbanking…).
 * 3. The backend checks the payment with Razorpay and places the order
 *    (/store/razorpay/verify). The key secret never reaches the browser.
 */
import { MEDUSA_BACKEND_URL, MEDUSA_PUBLISHABLE_KEY } from "@/lib/medusa-config";
import { SITE } from "@/lib/site-info";

/** Colour of the Razorpay popup: the site's brown, as on the Checkout button */
const THEME_COLOR = "#2B2118";
const SCRIPT_URL = "https://checkout.razorpay.com/v1/checkout.js";

export interface CheckoutCustomer {
  name: string;
  email: string;
  phone: string;
  address_1: string;
  address_2: string;
  city: string;
  province: string;
  postal_code: string;
}

export interface PlacedOrder {
  id: string;
  display_id: number;
}

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface RazorpayInstance {
  open: () => void;
  on: (event: "payment.failed", handler: (r: { error?: { description?: string } }) => void) => void;
}

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => RazorpayInstance;
  }
}

async function post<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${MEDUSA_BACKEND_URL}${path}`, {
    method: "POST",
    headers: { "x-publishable-api-key": MEDUSA_PUBLISHABLE_KEY, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || "Something went wrong. Please try again.");
  return data as T;
}

let scriptPromise: Promise<void> | null = null;
function loadRazorpay(): Promise<void> {
  if (window.Razorpay) return Promise.resolve();
  scriptPromise ??= new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      scriptPromise = null;
      reject(new Error("Couldn't load the payment window. Check your connection and try again."));
    };
    document.body.appendChild(script);
  });
  return scriptPromise;
}

/**
 * Opens Razorpay for this cart. Resolves with the placed order once paid,
 * or null if the customer closed the payment window.
 */
export async function payWithRazorpay(cartId: string, customer: CheckoutCustomer): Promise<PlacedOrder | null> {
  const [order] = await Promise.all([
    post<{
      key_id: string;
      razorpay_order_id: string;
      amount: number;
      currency: string;
      prefill: { name: string; email: string; contact: string };
    }>("/store/razorpay/order", { cart_id: cartId, customer }),
    loadRazorpay(),
  ]);

  return new Promise<PlacedOrder | null>((resolve, reject) => {
    const razorpay = new window.Razorpay!({
      key: order.key_id,
      order_id: order.razorpay_order_id,
      amount: order.amount,
      currency: order.currency,
      name: SITE.name,
      description: "Order payment",
      image: `${window.location.origin}/brand/br-mark.png`,
      prefill: order.prefill,
      notes: { cart_id: cartId },
      theme: { color: THEME_COLOR },
      modal: { ondismiss: () => resolve(null), confirm_close: true },
      handler: (response: RazorpayResponse) => {
        post<{ order: PlacedOrder }>("/store/razorpay/verify", { cart_id: cartId, ...response })
          .then(({ order }) => resolve(order))
          .catch(() =>
            reject(
              new Error(
                `Your payment went through, but we couldn't confirm the order automatically. ` +
                  `Please contact us with payment ID ${response.razorpay_payment_id} and we'll sort it out.`
              )
            )
          );
      },
    });
    // Razorpay shows the failure itself and lets the customer retry, so
    // nothing to do here beyond keeping the page usable.
    razorpay.on("payment.failed", () => {});
    razorpay.open();
  });
}

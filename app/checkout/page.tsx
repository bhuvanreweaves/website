"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { pill } from "@/components/cart/CartDrawer";
import { formatPrice } from "@/lib/format";
import { sizeLabel, whatsappCheckoutUrl } from "@/lib/checkout";
import { payWithRazorpay, type CheckoutCustomer } from "@/lib/razorpay-checkout";

const STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh",
  "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry",
  "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
  "West Bengal",
];

const EMPTY: CheckoutCustomer = {
  name: "",
  email: "",
  phone: "",
  address_1: "",
  address_2: "",
  city: "",
  province: "Tamil Nadu",
  postal_code: "",
};

const inputClass =
  "w-full rounded-md border border-warm-beige bg-cream px-3 py-3 text-sm text-brown placeholder:text-brown/35 focus:border-brown focus:outline-none disabled:opacity-60";

function Field({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-[11px] uppercase tracking-[0.15em] text-brown/60">{label}</span>
      {children}
    </label>
  );
}

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, ready, clearCart } = useCart();
  const [form, setForm] = useState<CheckoutCustomer>(EMPTY);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const items = cart?.items ?? [];

  const set = (key: keyof CheckoutCustomer) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const pay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cart) return;
    setPaying(true);
    setError(null);
    try {
      const order = await payWithRazorpay(cart.id, form);
      if (order) {
        clearCart();
        router.replace(`/order-confirmed?order=${order.display_id}`);
        return;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
    setPaying(false);
  };

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream pt-20">
        <p className="text-sm uppercase tracking-widest text-brown/30">Loading…</p>
      </div>
    );
  }

  if (!items.length || !cart) {
    return (
      <div className="min-h-screen bg-cream pt-20">
        <div className="mx-auto max-w-xl px-6 py-24 text-center">
          <p className="font-serif text-4xl text-brown">Your cart is empty</p>
          <Link
            href="/shop"
            className={`${pill} mt-8 border border-brown text-brown hover:bg-brown hover:text-cream`}
          >
            Start shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-12">
        <nav aria-label="Breadcrumb" className="text-center text-[11px] uppercase tracking-[0.2em]">
          <Link href="/cart" className="border-b border-brown/40 text-brown/50 hover:text-brown">
            Cart
          </Link>
          <span className="mx-3 text-brown/40">/</span>
          <span className="text-brown">Checkout</span>
        </nav>

        <form onSubmit={pay} className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Details */}
          <div className="lg:col-span-7">
            <h1 className="font-serif text-4xl text-brown sm:text-5xl">Checkout</h1>

            <fieldset disabled={paying} className="mt-10">
              <legend className="mb-5 font-serif text-2xl text-brown">Contact</legend>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Full name" className="sm:col-span-2">
                  <input required autoComplete="name" value={form.name} onChange={set("name")} className={inputClass} />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={set("email")}
                    className={inputClass}
                  />
                </Field>
                <Field label="Mobile number">
                  <input
                    required
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    placeholder="10-digit number"
                    minLength={10}
                    value={form.phone}
                    onChange={set("phone")}
                    className={inputClass}
                  />
                </Field>
              </div>
            </fieldset>

            <fieldset disabled={paying} className="mt-10">
              <legend className="mb-5 font-serif text-2xl text-brown">Delivery address</legend>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="House / flat, street" className="sm:col-span-2">
                  <input
                    required
                    autoComplete="address-line1"
                    value={form.address_1}
                    onChange={set("address_1")}
                    className={inputClass}
                  />
                </Field>
                <Field label="Area, landmark (if any)" className="sm:col-span-2">
                  <input
                    autoComplete="address-line2"
                    value={form.address_2}
                    onChange={set("address_2")}
                    className={inputClass}
                  />
                </Field>
                <Field label="City / town">
                  <input
                    required
                    autoComplete="address-level2"
                    value={form.city}
                    onChange={set("city")}
                    className={inputClass}
                  />
                </Field>
                <Field label="PIN code">
                  <input
                    required
                    inputMode="numeric"
                    autoComplete="postal-code"
                    pattern="\d{6}"
                    maxLength={6}
                    title="6-digit PIN code"
                    value={form.postal_code}
                    onChange={set("postal_code")}
                    className={inputClass}
                  />
                </Field>
                <Field label="State" className="sm:col-span-2">
                  <select
                    required
                    autoComplete="address-level1"
                    value={form.province}
                    onChange={set("province")}
                    className={inputClass}
                  >
                    {STATES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Field>
              </div>
            </fieldset>
          </div>

          {/* Summary */}
          <aside className="lg:col-span-5">
            <div className="rounded-lg bg-beige/50 p-6 sm:p-8 lg:sticky lg:top-32">
              <h2 className="font-serif text-2xl text-brown">Your order</h2>
              <ul className="mt-6 divide-y divide-warm-beige/60">
                {items.map((item) => {
                  const size = sizeLabel(item);
                  const name = item.product_title ?? item.title;
                  return (
                    <li key={item.id} className="flex items-center gap-4 py-4">
                      <div className="relative h-20 w-16 flex-shrink-0 overflow-hidden rounded bg-beige">
                        {item.thumbnail && (
                          <Image src={item.thumbnail} alt={name} fill sizes="64px" className="object-cover" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm uppercase tracking-wide text-brown">{name}</p>
                        <p className="mt-1 text-xs text-brown/50">
                          {[size, `Qty ${item.quantity}`].filter(Boolean).join(" · ")}
                        </p>
                      </div>
                      <span className="text-sm text-brown">{formatPrice(item.unit_price * item.quantity)}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-4 space-y-2 border-t border-warm-beige/70 pt-4 text-sm text-brown/70">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(cart.item_subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between border-t border-warm-beige/70 pt-4">
                <span className="font-serif text-2xl text-brown">Total</span>
                <span className="font-serif text-2xl text-brown">{formatPrice(cart.item_subtotal)}</span>
              </div>

              {error && (
                <p role="alert" className="mt-4 text-xs leading-relaxed text-red-700">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={paying}
                className={`${pill} mt-6 w-full gap-2 bg-brown text-cream hover:bg-brown-light disabled:opacity-60`}
              >
                <Lock size={13} strokeWidth={1.5} />
                {paying ? "Opening payment…" : `Pay ${formatPrice(cart.item_subtotal)}`}
              </button>
              <p className="mt-3 text-center text-[11px] text-brown/50">
                Secure payment by Razorpay: UPI, cards, netbanking and wallets.
              </p>
              <p className="mt-4 text-center text-[11px] text-brown/50">
                Prefer to order by chat?{" "}
                <a
                  href={whatsappCheckoutUrl(cart)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-brown"
                >
                  Order on WhatsApp
                </a>
              </p>
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
}

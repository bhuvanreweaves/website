"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { pill } from "@/components/cart/CartDrawer";
import YouMayAlsoLike from "@/components/cart/YouMayAlsoLike";
import { formatPrice } from "@/lib/format";
import { sizeLabel, whatsappCheckoutUrl } from "@/lib/checkout";

export default function CartPage() {
  const { cart, ready, itemCount, updateItem, removeItem, busy, error } = useCart();
  const [noteOpen, setNoteOpen] = useState(false);
  const [note, setNote] = useState("");
  const items = cart?.items ?? [];

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-center text-[11px] uppercase tracking-[0.2em]">
          <Link href="/" className="border-b border-brown/40 text-brown/50 hover:text-brown">
            Home
          </Link>
          <span className="mx-3 text-brown/40">/</span>
          <span className="text-brown">Your shopping cart</span>
        </nav>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Items */}
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-3">
              <h1 className="whitespace-nowrap font-serif text-4xl text-brown sm:text-5xl">
                Your cart
                <sup className="ml-1 font-sans text-sm text-brown/50">{itemCount}</sup>
              </h1>
              <Link
                href="/shop"
                className="whitespace-nowrap border-b border-brown pb-0.5 text-[11px] uppercase tracking-[0.2em] text-brown hover:opacity-70"
              >
                Continue shopping
              </Link>
            </div>

            {!ready ? (
              <p className="mt-16 text-sm uppercase tracking-widest text-brown/30">Loading…</p>
            ) : items.length === 0 ? (
              <div className="mt-16 border-t border-beige pt-16 text-center">
                <p className="font-serif text-4xl text-brown">
                  It&rsquo;s a little <em>empty</em> here
                </p>
                <p className="mt-4 text-sm text-brown/50">Your cart is currently empty</p>
                <Link
                  href="/shop"
                  className={`${pill} mt-8 border border-brown text-brown hover:bg-brown hover:text-cream`}
                >
                  Start shopping
                </Link>
              </div>
            ) : (
              <>
                {/* Column headings (larger screens) */}
                <div className="mt-10 hidden grid-cols-12 border-b border-beige pb-3 text-[11px] uppercase tracking-[0.2em] text-brown/50 md:grid">
                  <span className="col-span-6">Product</span>
                  <span className="col-span-2">Price</span>
                  <span className="col-span-2">Quantity</span>
                  <span className="col-span-2 text-right">Total</span>
                </div>

                <ul className="border-t border-beige md:border-t-0">
                  {items.map((item) => {
                    const size = sizeLabel(item);
                    const name = item.product_title ?? item.title;
                    const href = item.product_handle ? `/product/${item.product_handle}` : "/shop";
                    return (
                      <li
                        key={item.id}
                        className="grid grid-cols-12 items-center gap-y-4 border-b border-beige py-6"
                      >
                        <div className="col-span-12 flex items-center gap-5 md:col-span-6">
                          <Link
                            href={href}
                            className="relative h-32 w-24 flex-shrink-0 overflow-hidden rounded-md bg-beige"
                          >
                            {item.thumbnail && (
                              <Image src={item.thumbnail} alt={name} fill sizes="96px" className="object-cover" />
                            )}
                          </Link>
                          <div>
                            <Link
                              href={href}
                              className="text-sm font-medium uppercase tracking-wide text-brown hover:opacity-70"
                            >
                              {name}
                            </Link>
                            {size && <p className="mt-2 text-sm text-brown/50">{size}</p>}
                            <p className="mt-1 text-sm text-brown/50 md:hidden">
                              {formatPrice(item.unit_price)}
                            </p>
                          </div>
                        </div>

                        <span className="col-span-2 hidden text-sm text-brown/70 md:block">
                          {formatPrice(item.unit_price)}
                        </span>

                        <div className="col-span-8 flex items-center gap-4 md:col-span-2">
                          <div className="flex items-center rounded-md border border-warm-beige">
                            <button
                              onClick={() => updateItem(item.id, item.quantity - 1)}
                              disabled={busy}
                              aria-label={`Decrease quantity of ${name}`}
                              className="flex h-9 w-8 items-center justify-center text-brown/60 hover:text-brown disabled:opacity-40"
                            >
                              <Minus size={13} strokeWidth={1.5} />
                            </button>
                            <span className="w-6 text-center text-sm text-brown" aria-live="polite">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateItem(item.id, item.quantity + 1)}
                              disabled={busy}
                              aria-label={`Increase quantity of ${name}`}
                              className="flex h-9 w-8 items-center justify-center text-brown/60 hover:text-brown disabled:opacity-40"
                            >
                              <Plus size={13} strokeWidth={1.5} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            disabled={busy}
                            aria-label={`Remove ${name} from cart`}
                            className="text-brown/50 hover:text-brown disabled:opacity-40"
                          >
                            <Trash2 size={17} strokeWidth={1.5} />
                          </button>
                        </div>

                        <span className="col-span-4 text-right text-sm text-brown md:col-span-2">
                          {formatPrice(item.unit_price * item.quantity)}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>

          {/* Summary */}
          {ready && items.length > 0 && cart && (
            <aside className="lg:col-span-4">
              <div className="rounded-lg bg-beige/50 p-8 lg:sticky lg:top-32">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-2xl text-brown">Subtotal</span>
                  <span className="font-serif text-2xl text-brown">{formatPrice(cart.item_subtotal)}</span>
                </div>
                <p className="mt-2 text-xs text-brown/60">
                  Free{" "}
                  <Link href="/shipping-policy" className="underline underline-offset-2">
                    shipping
                  </Link>{" "}
                  across India.
                </p>

                {/* Order note */}
                <div className="mt-6 border-y border-warm-beige/70">
                  <button
                    onClick={() => setNoteOpen((o) => !o)}
                    aria-expanded={noteOpen}
                    aria-controls="order-note"
                    className="flex w-full items-center justify-between py-4 text-sm text-brown"
                  >
                    Order note
                    {noteOpen ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
                  </button>
                  {noteOpen && (
                    <div className="pb-4">
                      <label htmlFor="order-note" className="sr-only">
                        Order note
                      </label>
                      <textarea
                        id="order-note"
                        rows={3}
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Anything we should know? e.g. a gift message or delivery instructions"
                        className="w-full resize-none rounded-md border border-warm-beige bg-cream p-3 text-sm text-brown placeholder:text-brown/40 focus:border-brown focus:outline-none"
                      />
                    </div>
                  )}
                </div>

                {error && (
                  <p role="alert" className="mt-4 text-xs text-red-700">
                    {error}
                  </p>
                )}

                <a
                  href={whatsappCheckoutUrl(cart, note)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${pill} mt-6 w-full bg-brown text-cream hover:bg-brown-light`}
                >
                  Checkout
                </a>
                <p className="mt-3 text-center text-[11px] text-brown/50">
                  Checkout continues on WhatsApp, where we confirm your order and payment.
                </p>
              </div>
            </aside>
          )}
        </div>

        <YouMayAlsoLike excludeIds={items.map((i) => i.product_id)} />
      </div>
    </div>
  );
}

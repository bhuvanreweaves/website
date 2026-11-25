"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { useCart } from "./CartProvider";
import { formatPrice } from "@/lib/format";
import { sizeLabel, whatsappCheckoutUrl } from "@/lib/checkout";

export const pill =
  "inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[11px] tracking-[0.2em] uppercase transition-colors";

export default function CartDrawer() {
  const { cart, itemCount, isOpen, closeCart, updateItem, removeItem, busy, error } = useCart();
  const items = cart?.items ?? [];

  // Close with Esc, and stop the page behind from scrolling
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCart();
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [isOpen, closeCart]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-charcoal/50"
            onClick={closeCart}
            aria-hidden
          />
          <motion.aside
            key="cart-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Your cart"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 flex w-full max-w-md flex-col bg-cream shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between px-6 pt-7 pb-4 sm:px-8">
              <h2 className="font-serif text-3xl text-brown">
                Your cart
                <sup className="ml-1 font-sans text-xs text-brown/50">{itemCount}</sup>
              </h2>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                className="mt-1 text-brown/60 transition-colors hover:text-brown"
              >
                <X size={22} strokeWidth={1.25} />
              </button>
            </div>

            {items.length === 0 ? (
              /* Empty state */
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <p className="font-serif text-4xl leading-tight text-brown sm:text-5xl">
                  It&rsquo;s a little <em>empty</em> here
                </p>
                <p className="mt-4 text-sm text-brown/50">Your cart is currently empty</p>
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className={`${pill} mt-8 border border-brown text-brown hover:bg-brown hover:text-cream`}
                >
                  Start shopping
                </Link>
              </div>
            ) : (
              <>
                {/* Items */}
                <ul className="flex-1 overflow-y-auto px-6 sm:px-8">
                  {items.map((item) => {
                    const size = sizeLabel(item);
                    const href = item.product_handle ? `/product/${item.product_handle}` : "/shop";
                    return (
                      <li key={item.id} className="flex gap-4 border-b border-beige py-6">
                        <Link
                          href={href}
                          onClick={closeCart}
                          className="relative h-28 w-20 flex-shrink-0 overflow-hidden rounded-md bg-beige"
                        >
                          {item.thumbnail && (
                            <Image
                              src={item.thumbnail}
                              alt={item.product_title ?? item.title}
                              fill
                              sizes="80px"
                              className="object-cover"
                            />
                          )}
                        </Link>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <Link
                              href={href}
                              onClick={closeCart}
                              className="text-xs font-medium uppercase tracking-widest text-brown hover:opacity-70"
                            >
                              {item.product_title ?? item.title}
                            </Link>
                            <span className="whitespace-nowrap text-sm text-brown">
                              {formatPrice(item.unit_price * item.quantity)}
                            </span>
                          </div>
                          <p className="mt-1.5 text-xs text-brown/50">
                            {formatPrice(item.unit_price)}
                            {size && ` · ${size}`}
                          </p>
                          <div className="mt-4 flex items-center gap-4">
                            <div className="flex items-center rounded-md border border-warm-beige">
                              <button
                                onClick={() => updateItem(item.id, item.quantity - 1)}
                                disabled={busy}
                                aria-label={`Decrease quantity of ${item.title}`}
                                className="flex h-8 w-8 items-center justify-center text-brown/60 hover:text-brown disabled:opacity-40"
                              >
                                <Minus size={13} strokeWidth={1.5} />
                              </button>
                              <span className="w-6 text-center text-sm text-brown" aria-live="polite">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateItem(item.id, item.quantity + 1)}
                                disabled={busy}
                                aria-label={`Increase quantity of ${item.title}`}
                                className="flex h-8 w-8 items-center justify-center text-brown/60 hover:text-brown disabled:opacity-40"
                              >
                                <Plus size={13} strokeWidth={1.5} />
                              </button>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              disabled={busy}
                              aria-label={`Remove ${item.title} from cart`}
                              className="text-brown/50 hover:text-brown disabled:opacity-40"
                            >
                              <Trash2 size={16} strokeWidth={1.5} />
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                {/* Summary */}
                <div className="border-t border-beige px-6 py-6 sm:px-8">
                  {error && (
                    <p role="alert" className="mb-4 text-xs text-red-700">
                      {error}
                    </p>
                  )}
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif text-2xl text-brown">Subtotal</span>
                    <span className="font-serif text-2xl text-brown">
                      {formatPrice(cart!.item_subtotal)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-brown/50">
                    Free{" "}
                    <Link href="/shipping-policy" onClick={closeCart} className="underline underline-offset-2">
                      shipping
                    </Link>{" "}
                    across India.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Link
                      href="/cart"
                      onClick={closeCart}
                      className={`${pill} border border-brown text-brown hover:bg-brown hover:text-cream`}
                    >
                      View cart
                    </Link>
                    <Link
                      href="/checkout"
                      onClick={closeCart}
                      className={`${pill} bg-brown text-cream hover:bg-brown-light`}
                    >
                      Checkout
                    </Link>
                  </div>
                  <p className="mt-3 text-center text-[11px] text-brown/40">
                    Pay securely with UPI, cards or netbanking.{" "}
                    <a
                      href={whatsappCheckoutUrl(cart!)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-brown"
                    >
                      Or order on WhatsApp
                    </a>
                  </p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

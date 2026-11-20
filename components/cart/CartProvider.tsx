"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  addLineItem,
  createCart,
  getCart,
  removeLineItem,
  updateLineItem,
  type Cart,
} from "@/lib/cart-api";

/** The visitor's cart ID is remembered in their browser between visits. */
const CART_ID_KEY = "bhuvan_cart_id";

interface CartContextValue {
  cart: Cart | null;
  /** false until the cart from the last visit has been looked up */
  ready: boolean;
  itemCount: number;
  isOpen: boolean;
  /** true while a cart change is being saved */
  busy: boolean;
  error: string | null;
  openCart: () => void;
  closeCart: () => void;
  addItem: (variantId: string, quantity: number) => Promise<boolean>;
  updateItem: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
}

const CartContext = createContext<CartContextValue | null>(null);

function readCartId(): string | null {
  try {
    return localStorage.getItem(CART_ID_KEY);
  } catch {
    return null;
  }
}

function saveCartId(id: string | null) {
  try {
    if (id) localStorage.setItem(CART_ID_KEY, id);
    else localStorage.removeItem(CART_ID_KEY);
  } catch {
    // Private mode or blocked storage: the cart still works for this visit
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [ready, setReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Restore the cart from the last visit
  useEffect(() => {
    const id = readCartId();
    if (!id) {
      setReady(true);
      return;
    }
    getCart(id)
      .then((found) => {
        if (found) setCart(found);
        else saveCartId(null);
      })
      .finally(() => setReady(true));
  }, []);

  const run = useCallback(async (change: () => Promise<Cart>) => {
    setBusy(true);
    setError(null);
    try {
      const updated = await change();
      setCart(updated);
      saveCartId(updated.id);
      return true;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
      return false;
    } finally {
      setBusy(false);
    }
  }, []);

  const addItem = useCallback(
    async (variantId: string, quantity: number) => {
      const ok = await run(async () => {
        // Use the existing cart, or start a new one
        const current = (cart && (await getCart(cart.id))) || (await createCart());
        return addLineItem(current.id, variantId, quantity);
      });
      if (ok) setIsOpen(true);
      return ok;
    },
    [cart, run]
  );

  const removeItem = useCallback(
    async (lineId: string) => {
      if (cart) await run(() => removeLineItem(cart.id, lineId));
    },
    [cart, run]
  );

  const updateItem = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cart) return;
      if (quantity < 1) return removeItem(lineId);
      await run(() => updateLineItem(cart.id, lineId, quantity));
    },
    [cart, run, removeItem]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      cart,
      ready,
      itemCount: cart?.items.reduce((sum, item) => sum + item.quantity, 0) ?? 0,
      isOpen,
      busy,
      error,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      updateItem,
      removeItem,
    }),
    [cart, ready, isOpen, busy, error, addItem, updateItem, removeItem]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used inside <CartProvider>");
  return value;
}

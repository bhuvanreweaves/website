import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop — Shirts, Kurtas, Couple Sets & Dhotis",
  description:
    "Browse shirts, kurtas, Thalaivan x Thalaivi couple sets and dhotis, handcrafted from silk, cotton, Kanjivaram and Banarasi sarees. Every piece is one of a kind.",
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return children;
}

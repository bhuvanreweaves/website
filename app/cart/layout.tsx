import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Cart",
  // Personal page: keep it out of search results
  robots: { index: false, follow: true },
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}

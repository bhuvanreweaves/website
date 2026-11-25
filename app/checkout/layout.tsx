import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
  // Personal page: keep it out of search results
  robots: { index: false, follow: false },
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

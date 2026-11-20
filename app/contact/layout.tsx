import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Questions about a shirt, sizing or sending your saree? Get in touch with Bhuvan Reweaves.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bhuvan Reweaves — Saree to Shirt",
  description:
    "We transform your cherished sarees into handcrafted shirts. Silk, cotton, Kanjivaram, Banarasi — every shirt is one-of-a-kind.",
  keywords: "saree to shirt, saree upcycle, handcrafted shirts, Indian fashion, Kanjivaram shirt, Banarasi shirt",
  openGraph: {
    title: "Bhuvan Reweaves — Saree to Shirt",
    description: "Your Saree. Reborn as a Shirt.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/components/cart/CartProvider";
import CartDrawer from "@/components/cart/CartDrawer";

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

// Browser tab icons come from app/favicon.ico, app/icon.png and app/apple-icon.png
export const metadata: Metadata = {
  metadataBase: new URL("https://www.bhuvanreweaves.com"),
  applicationName: "Bhuvan Reweaves",
  title: {
    default: "Bhuvan Reweaves — Handcrafted from Sarees",
    // Pages set their own title, e.g. "About Us | Bhuvan Reweaves"
    template: "%s | Bhuvan Reweaves",
  },
  description:
    "Shirts, kurtas, Thalaivan x Thalaivi couple sets and dhotis, handcrafted from Indian sarees — silk, cotton, Kanjivaram and Banarasi. Shop one-of-a-kind pieces, or send us your own saree.",
  keywords:
    "saree to shirt, shirts from sarees, saree kurta, couple set, Thalaivan Thalaivi, saree dhoti, saree upcycling, handcrafted shirts, Kanjivaram shirt, Banarasi shirt",
  openGraph: {
    title: "Bhuvan Reweaves — Handcrafted from Sarees",
    description: "Your saree, given a new life. Handcrafted, one of a kind.",
    siteName: "Bhuvan Reweaves",
    locale: "en_IN",
    url: "/",
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
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}

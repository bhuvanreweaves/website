import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { pill } from "@/components/cart/CartDrawer";
import { POLICY, SITE } from "@/lib/site-info";

export const metadata: Metadata = {
  title: "Order Confirmed",
  robots: { index: false, follow: false },
};

export default async function OrderConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>;
}) {
  const { order } = await searchParams;
  const orderNumber = order && /^\d+$/.test(order) ? order : null;

  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="mx-auto max-w-xl px-6 py-24 text-center">
        <CheckCircle2 size={44} strokeWidth={1.2} className="mx-auto text-brown" />
        <h1 className="mt-6 font-serif text-4xl text-brown sm:text-5xl">Thank you!</h1>
        <p className="mt-4 text-sm leading-relaxed text-brown/60">
          {orderNumber ? (
            <>
              Your payment was successful and order <strong className="text-brown">#{orderNumber}</strong> is
              placed.
            </>
          ) : (
            <>Your payment was successful and your order is placed.</>
          )}{" "}
          We&rsquo;ll start preparing it right away. Delivery takes {POLICY.deliveryTime}.
        </p>
        <p className="mt-3 text-sm text-brown/60">
          Questions? WhatsApp us on {SITE.phoneDisplay}.
        </p>
        <Link
          href="/shop"
          className={`${pill} mt-10 border border-brown text-brown hover:bg-brown hover:text-cream`}
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
}

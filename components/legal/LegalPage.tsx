import React from "react";
import Link from "next/link";
import { SITE } from "@/lib/site-info";

/** Shared layout for the policy pages (privacy, terms, shipping, returns). */
export default function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-cream pt-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        <p className="section-subtitle">Policies</p>
        <h1 className="font-serif text-4xl md:text-5xl text-brown font-light leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-xs tracking-widest uppercase text-brown/40">
          Last updated: {SITE.policiesLastUpdated}
        </p>
        {intro && <div className="legal-content mt-10">{intro}</div>}
        <div className="legal-content mt-6">{children}</div>

        <nav
          aria-label="Policies"
          className="mt-16 pt-8 border-t border-beige flex flex-wrap gap-x-6 gap-y-3 text-xs tracking-widest uppercase"
        >
          {POLICY_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-brown/50 hover:text-brown transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export const POLICY_LINKS = [
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Returns & Refunds", href: "/returns" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

/** "Contact us" block used at the end of each policy page. */
export function PolicyContact() {
  return (
    <ul>
      <li>
        Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </li>
      <li>
        WhatsApp / Phone:{" "}
        <a href={`https://wa.me/${SITE.whatsappNumber}`}>{SITE.phoneDisplay}</a>
      </li>
      <li>Address: {SITE.address}</li>
    </ul>
  );
}

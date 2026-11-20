import React from "react";
import Link from "next/link";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import BrandLogo from "./BrandLogo";
import NewsletterForm from "./NewsletterForm";
import BackToTop from "./BackToTop";
import { POLICY_LINKS } from "@/components/legal/LegalPage";
import { SITE } from "@/lib/site-info";
import { productCategories } from "@/data/products";

const columns = [
  {
    title: "The Brand",
    links: [
      { label: "About", href: "/about" },
      { label: "Send Your Saree", href: "/customization" },
      { label: "Contact", href: "/contact" },
    ],
  },
  { title: "Legal", links: POLICY_LINKS },
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/shop" },
      ...productCategories.map((c) => ({ label: c.name, href: `/shop?category=${c.id}` })),
    ],
  },
];

const socials = [
  { label: "Instagram", href: `https://instagram.com/${SITE.instagramHandle}`, icon: Instagram },
  { label: "WhatsApp", href: `https://wa.me/${SITE.whatsappNumber}`, icon: MessageCircle },
  { label: "Email", href: `mailto:${SITE.email}`, icon: Mail },
];

export default function Footer() {
  return (
    <footer className="bg-brown text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Newsletter + social */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <BrandLogo tone="cream" size="md" />
            </div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.25em] text-cream/80">
              Be the first to know about new collections and drops.
            </p>
            <NewsletterForm />
            <div className="mt-6 flex items-center gap-5">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-cream/80 transition-colors hover:text-cream"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <p className="mt-5 text-xs text-cream/50">
              <a href={`https://wa.me/${SITE.whatsappNumber}`} className="hover:text-cream">
                {SITE.phoneDisplay}
              </a>
              <span className="mx-2">·</span>
              <a href={`mailto:${SITE.email}`} className="hover:text-cream">
                {SITE.email}
              </a>
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h4 className="mb-5 text-[11px] uppercase tracking-[0.25em] text-cream/50">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm uppercase tracking-wide text-cream/85 transition-colors hover:text-cream"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 lg:px-12">
          <p className="text-xs text-cream/50">
            Copyright © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}

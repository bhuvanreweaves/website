import React from "react";
import Link from "next/link";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import NewsletterForm from "./NewsletterForm";
import BackToTop from "./BackToTop";
import { POLICY_LINKS } from "@/components/legal/LegalPage";
import { SITE } from "@/lib/site-info";

const socials = [
  { label: "Instagram", href: `https://instagram.com/${SITE.instagramHandle}`, icon: Instagram },
  { label: "WhatsApp", href: `https://wa.me/${SITE.whatsappNumber}`, icon: MessageCircle },
  { label: "Email", href: `mailto:${SITE.email}`, icon: Mail },
];

export default function Footer() {
  return (
    <footer className="bg-brown text-cream">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left: policies */}
          <div className="lg:col-span-6">
            <nav aria-label="Policies">
              <h4 className="mb-3 font-serif text-xl text-cream">Policies</h4>
              <ul className="flex flex-col gap-2">
                {POLICY_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/70 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right: email sign-up */}
          <div className="lg:col-span-6">
            <h4 className="font-serif text-xl text-cream">Join our email list</h4>
            <p className="mt-2 text-sm text-cream/70">
              Be the first to know about new collections and drops.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <p className="text-xs text-cream/50">
            Copyright © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-cream/70 transition-colors hover:text-cream"
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
            <span className="h-4 w-px bg-cream/20" aria-hidden />
            <BackToTop />
          </div>
        </div>
      </div>
    </footer>
  );
}

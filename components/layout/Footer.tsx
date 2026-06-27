import React from "react";
import Link from "next/link";
import { Instagram, Mail, MessageCircle } from "lucide-react";

const shopLinks = [
  { label: "All Shirts", href: "/shop" },
  { label: "Silk Saree Shirts", href: "/shop?category=silk-saree-shirts" },
  { label: "Cotton Saree Shirts", href: "/shop?category=cotton-saree-shirts" },
  { label: "Kanjivaram Shirts", href: "/shop?category=kanjivaram-shirts" },
  { label: "Banarasi Shirts", href: "/shop?category=banarasi-shirts" },
  { label: "New Arrivals", href: "/shop?filter=new" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Customization", href: "/customization" },
  { label: "Contact", href: "/contact" },
  { label: "Return & Exchange", href: "/returns" },
];

export default function Footer() {
  return (
    <footer className="bg-brown text-cream">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="font-serif text-2xl tracking-wide">Bhuvan</div>
              <div className="font-sans text-[9px] tracking-[0.3em] uppercase text-cream/50">
                Reweaves
              </div>
            </div>
            <p className="text-sm text-cream/60 leading-relaxed mb-8 max-w-xs">
              We transform cherished sarees into handcrafted shirts. Every shirt is one-of-a-kind — your saree, rewoven.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-brown transition-all"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-brown transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={14} />
              </a>
              <a
                href="mailto:hello@bhuvanreweaves.com"
                className="w-8 h-8 border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-brown transition-all"
                aria-label="Email"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-cream/40 mb-6">
              Shop
            </h4>
            <ul className="flex flex-col gap-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-cream/40 mb-6">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-cream/40 mb-6">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs text-cream/40 uppercase tracking-wider mb-1">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/919876543210"
                  className="text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              <div>
                <p className="text-xs text-cream/40 uppercase tracking-wider mb-1">
                  Email
                </p>
                <a
                  href="mailto:hello@bhuvanreweaves.com"
                  className="text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  hello@bhuvanreweaves.com
                </a>
              </div>
              <div>
                <p className="text-xs text-cream/40 uppercase tracking-wider mb-1">
                  Shipping
                </p>
                <p className="text-sm text-cream/60">Pan India · Free above ₹2000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/30">
            © 2025 Bhuvan Reweaves. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-cream/30 hover:text-cream/60 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

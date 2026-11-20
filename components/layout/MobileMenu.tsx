"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { productCategories } from "@/data/products";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Shop All", href: "/shop" },
  ...productCategories.map((c) => ({ label: c.name, href: `/shop?category=${c.id}` })),
  { label: "Customization", href: "/customization" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Returns & Refunds", href: "/returns" },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-brown/30 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-cream flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-beige">
              <Link href="/" onClick={onClose} aria-label="Bhuvan Reweaves home">
                <BrandLogo size="sm" />
              </Link>
              <button
                onClick={onClose}
                className="text-brown/50 hover:text-brown transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 px-8 py-8">
              <div className="flex flex-col gap-1">
                {menuLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center justify-between py-4 border-b border-beige/50 group"
                    >
                      <span className="font-serif text-xl text-brown group-hover:opacity-70 transition-opacity">
                        {link.label}
                      </span>
                      <ArrowRight
                        size={14}
                        className="text-brown/30 group-hover:text-brown group-hover:translate-x-1 transition-all"
                        strokeWidth={1.5}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Footer */}
            <div className="px-8 py-6 border-t border-beige">
              <p className="text-xs tracking-widest uppercase text-brown/40 mb-4">
                Follow Us
              </p>
              <div className="flex gap-4">
                {["Instagram", "WhatsApp"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-xs tracking-widest uppercase text-brown/60 hover:text-brown transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

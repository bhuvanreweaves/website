"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, Search, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Shop Shirts", href: "/shop" },
  { label: "Send Your Saree", href: "/customization" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md border-b border-beige"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span className="font-serif text-xl text-brown tracking-wide group-hover:opacity-80 transition-opacity">
                Bhuvan
              </span>
              <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-brown-medium">
                Reweaves
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-widest uppercase text-brown/70 hover:text-brown transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brown transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className="hidden md:flex text-brown/60 hover:text-brown transition-colors"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <Link
                href="/shop"
                aria-label="Cart"
                className="relative text-brown/60 hover:text-brown transition-colors"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
              </Link>
              <button
                aria-label="Open menu"
                className="md:hidden text-brown"
                onClick={() => setMobileOpen(true)}
              >
                <Menu size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

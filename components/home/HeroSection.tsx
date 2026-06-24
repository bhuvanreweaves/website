"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex overflow-hidden bg-charcoal">
      {/* Left Panel — Content */}
      <div className="relative z-10 w-full lg:w-[58%] flex flex-col justify-end pb-20 lg:pb-28 pt-36 px-6 lg:px-14">
        {/* Eyebrow */}
        <motion.p
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[10px] tracking-[0.35em] uppercase text-cream/40 mb-7 font-sans"
        >
          Handcrafted in India
        </motion.p>

        {/* Headline */}
        <motion.h1
          custom={0.4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif text-[clamp(3.5rem,7vw,6.5rem)] text-cream leading-[0.95] mb-8 font-light"
        >
          Crafted For You,
          <br />
          <span className="italic">Tailored To</span>
          <br />
          Perfection.
        </motion.h1>

        {/* Thin rule */}
        <motion.div
          custom={0.55}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-16 h-px bg-cream/25 mb-7"
        />

        {/* Subheadline */}
        <motion.p
          custom={0.65}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-sm md:text-base text-cream/55 leading-relaxed mb-10 max-w-md font-sans font-light"
        >
          Premium handcrafted sarees, shirts and kurtas made with precision.
          Every thread, a story of skilled artisans.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={0.8}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/shop"
            className="group inline-flex items-center gap-3 bg-cream text-brown px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-sans font-medium transition-all duration-300 hover:bg-beige"
          >
            Shop Collection
            <ArrowRight
              size={13}
              className="group-hover:translate-x-1 transition-transform"
              strokeWidth={1.5}
            />
          </Link>
          <Link
            href="/customization"
            className="inline-flex items-center gap-3 border border-cream/30 text-cream px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-sans font-medium transition-all duration-300 hover:bg-cream/10"
          >
            Customize Your Outfit
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-16 flex items-center gap-10 border-t border-cream/10 pt-8"
        >
          {[
            { value: "500+", label: "Garments Crafted" },
            { value: "100%", label: "Handmade" },
            { value: "Pan India", label: "Delivery" },
          ].map((stat, i) => (
            <div key={stat.label} className={i > 0 ? "border-l border-cream/10 pl-10" : ""}>
              <div className="font-serif text-2xl text-cream font-light">{stat.value}</div>
              <div className="text-[9px] tracking-[0.25em] uppercase text-cream/35 mt-1 font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Panel — Images */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:flex lg:w-[42%] flex-col relative"
      >
        {/* Top image — Saree */}
        <div className="relative flex-1 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900&q=85"
            alt="Handcrafted saree"
            fill
            priority
            className="object-cover object-center"
            sizes="42vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 to-transparent" />
          <div className="absolute bottom-4 left-5">
            <span className="text-[9px] tracking-[0.3em] uppercase text-cream/60 font-sans bg-charcoal/40 backdrop-blur-sm px-2 py-1">
              Sarees
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-charcoal" />

        {/* Bottom image — Shirt */}
        <div className="relative flex-1 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=900&q=85"
            alt="Handcrafted shirt"
            fill
            className="object-cover object-top"
            sizes="42vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
          <div className="absolute bottom-4 left-5">
            <span className="text-[9px] tracking-[0.3em] uppercase text-cream/60 font-sans bg-charcoal/40 backdrop-blur-sm px-2 py-1">
              Shirts & Kurtas
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute right-6 bottom-10 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-cream/20 animate-pulse" />
          <span className="text-[8px] tracking-[0.3em] uppercase text-cream/25 rotate-90 origin-center mt-3 font-sans">
            Scroll
          </span>
        </div>
      </motion.div>
    </section>
  );
}

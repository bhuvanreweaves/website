"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#1E1E1E]">
      {/* Text Side */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-24 lg:py-0 z-10 order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[#D4C4B0] font-sans text-xs tracking-[0.3em] uppercase mb-6">
            Handcrafted in India
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#F8F5F0] leading-tight mb-6"
        >
          Your Saree.
          <br />
          <em className="not-italic text-[#D4C4B0]">Reborn</em> as a Shirt.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-16 h-px bg-[#8B6352] mb-6 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="font-sans text-[#D4C4B0] text-base md:text-lg leading-relaxed max-w-md mb-10"
        >
          We transform cherished sarees — yours or ours — into handcrafted shirts that carry their story in every thread. Silk, cotton, Kanjivaram, Banarasi. Every shirt is one-of-a-kind.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 bg-[#F8F5F0] text-[#2B2118] font-sans text-sm tracking-widest uppercase px-8 py-4 hover:bg-[#E8DDCF] transition-colors duration-300"
          >
            Shop the Collection <ArrowRight size={14} />
          </Link>
          <Link
            href="/customization"
            className="inline-flex items-center justify-center gap-2 border border-[#8B6352] text-[#F8F5F0] font-sans text-sm tracking-widest uppercase px-8 py-4 hover:border-[#F8F5F0] transition-colors duration-300"
          >
            Send Your Saree
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex gap-10"
        >
          {[
            { value: "500+", label: "Sarees Rewoven" },
            { value: "100%", label: "Handcrafted" },
            { value: "Pan India", label: "Delivery" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-2xl text-[#F8F5F0]">{stat.value}</p>
              <p className="font-sans text-[#8B6352] text-xs tracking-widest uppercase mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Image Side */}
      <div className="relative w-full lg:w-[45%] h-[55vw] lg:h-auto order-1 lg:order-2 flex flex-col">
        <div className="relative flex-1 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900&q=85"
            alt="A vibrant silk saree"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-4 left-4 bg-[#2B2118]/80 backdrop-blur-sm px-3 py-1.5">
            <p className="font-sans text-[#D4C4B0] text-xs tracking-widest uppercase">The Saree</p>
          </div>
        </div>
        <div className="relative flex-1 overflow-hidden border-t border-[#2B2118]">
          <Image
            src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=900&q=85"
            alt="A handcrafted shirt made from a saree"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-4 left-4 bg-[#2B2118]/80 backdrop-blur-sm px-3 py-1.5">
            <p className="font-sans text-[#D4C4B0] text-xs tracking-widest uppercase">The Shirt</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-6 hidden lg:flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-[#8B6352] to-transparent"
          />
          <p className="font-sans text-[#8B6352] text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center mt-4">
            Scroll
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Package, Ruler, Scissors, Truck } from "lucide-react";

const steps = [
  {
    icon: Package,
    title: "Send Your Saree",
    desc: "Post or hand-deliver your saree to us. Any saree — silk, cotton, vintage, new.",
  },
  {
    icon: Ruler,
    title: "Share Your Measurements",
    desc: "Fill our simple measurement form or visit us for a fitting session.",
  },
  {
    icon: Scissors,
    title: "We Craft Your Shirt",
    desc: "We cut, sew and finish your shirt by hand — preserving the saree's patterns and borders.",
  },
  {
    icon: Truck,
    title: "Delivered to You",
    desc: "Your shirt — and the leftover fabric — shipped back to you within 14 days.",
  },
];

export default function CustomTailoring() {
  return (
    <section className="bg-[#2B2118] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full lg:w-[45%] shrink-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80"
                alt="A shirt being crafted from a saree"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#2B2118]/30" />
            </div>
            {/* Overlay card */}
            <div className="absolute -bottom-6 -right-6 bg-[#F8F5F0] p-6 max-w-[200px]">
              <p className="font-serif text-3xl text-[#2B2118]">5–7</p>
              <p className="font-sans text-xs tracking-widest uppercase text-[#8B6352] mt-1">
                Working Days
              </p>
              <div className="w-8 h-px bg-[#8B6352] mt-3" />
              <p className="font-sans text-[11px] text-[#5C4033] mt-2">
                From when your saree reaches us
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#8B6352] mb-4">
                Bespoke Reweave
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#F8F5F0] leading-tight mb-4">
                Have a Saree?
                <br />
                <em className="text-[#D4C4B0]">We'll Make It a Shirt.</em>
              </h2>
              <p className="font-sans text-[#D4C4B0] text-base leading-relaxed max-w-lg mb-12">
                Your grandmother's silk. Your mother's wedding saree. A piece you loved but never wore. Send it to us and we'll transform it into a shirt you'll wear for years — with every memory intact.
              </p>
            </motion.div>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-5 items-start"
                >
                  <div className="w-10 h-10 border border-[#8B6352] flex items-center justify-center shrink-0">
                    <step.icon size={18} className="text-[#D4C4B0]" />
                  </div>
                  <div>
                    <p className="font-serif text-lg text-[#F8F5F0] mb-1">{step.title}</p>
                    <p className="font-sans text-sm text-[#8B6352] leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12"
            >
              <Link
                href="/customization"
                className="inline-flex items-center justify-center bg-[#F8F5F0] text-[#2B2118] font-sans text-sm tracking-widest uppercase px-10 py-4 hover:bg-[#E8DDCF] transition-colors duration-300"
              >
                Start Your Reweave
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Premium Fabrics",
    subtitle: "Handloom Cotton · Belgian Linen · Chanderi Silk · Khadi",
    description:
      "We source only the finest Indian textiles from master weavers across the country. Each cloth is chosen for its hand, weight, and soul.",
  },
  {
    number: "02",
    title: "Handcrafted Quality",
    subtitle: "No Shortcuts. No Compromises.",
    description:
      "Every garment passes through artisans who have spent decades perfecting their craft. The stitching, the pressing, the finishing — all done by hand.",
  },
  {
    number: "03",
    title: "Tailor Made Fit",
    subtitle: "Standard Sizes · Fully Bespoke",
    description:
      "Standard sizes that actually fit, or fully bespoke tailoring to your exact measurements. The best garment is the one made for your body.",
  },
  {
    number: "04",
    title: "Pan India Shipping",
    subtitle: "Free Shipping Above ₹2000",
    description:
      "We deliver across all of India. Your handcrafted garment, wherever you are — handled with the same care that went into making it.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-charcoal">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 lg:px-14 pt-28 pb-20 border-b border-cream/10"
      >
        <p className="text-[10px] tracking-[0.35em] uppercase text-cream/35 font-sans mb-6">
          The Bhuvan Standard
        </p>
        <h2 className="font-serif font-light text-cream text-[clamp(3rem,6vw,5.5rem)] leading-[0.95]">
          The Difference Is
          <br />
          <span className="italic">In The Details</span>
        </h2>
      </motion.div>

      {/* Feature Bands */}
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        {features.map((f, i) => (
          <motion.div
            key={f.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="group grid grid-cols-12 gap-6 lg:gap-10 py-12 lg:py-14 border-b border-cream/10 hover:border-cream/25 transition-colors duration-500"
          >
            {/* Number */}
            <div className="col-span-2 lg:col-span-1 flex items-start pt-1">
              <span className="font-serif text-[11px] tracking-[0.2em] text-cream/25 font-light group-hover:text-cream/50 transition-colors duration-500">
                {f.number}
              </span>
            </div>

            {/* Title block */}
            <div className="col-span-10 lg:col-span-4 flex flex-col justify-center">
              <h3 className="font-serif text-cream text-3xl lg:text-4xl font-light leading-tight group-hover:text-cream transition-colors mb-2">
                {f.title}
              </h3>
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-cream/30">
                {f.subtitle}
              </p>
            </div>

            {/* Horizontal rule — desktop */}
            <div className="hidden lg:flex col-span-1 items-center">
              <div className="w-full h-px bg-cream/15 group-hover:bg-cream/35 transition-colors duration-500" />
            </div>

            {/* Description */}
            <div className="col-span-12 lg:col-span-6 flex items-center">
              <p className="font-sans text-sm text-cream/45 leading-relaxed font-light group-hover:text-cream/60 transition-colors duration-500">
                {f.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Editorial Quote */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 lg:px-14 py-28 lg:py-36"
      >
        <blockquote className="font-serif text-[clamp(1.6rem,3.5vw,3rem)] text-cream/70 leading-[1.25] font-light italic max-w-4xl">
          "Clothing is not just fabric and thread — it is an expression of
          identity, a mark of occasion, and a piece of art."
        </blockquote>
        <p className="mt-8 font-sans text-[10px] tracking-[0.3em] uppercase text-cream/30">
          — Bhuvan, Founder
        </p>
      </motion.div>
    </section>
  );
}

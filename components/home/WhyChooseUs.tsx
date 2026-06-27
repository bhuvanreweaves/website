"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Your Saree Lives On",
    subtitle: "Zero waste. All meaning.",
    description:
      "We use the full saree — borders become cuffs, pallu becomes the back panel. Nothing is wasted. Every centimetre of your saree finds its place in the shirt.",
  },
  {
    number: "02",
    title: "One-of-a-Kind, Always",
    subtitle: "No two shirts are the same.",
    description:
      "Because every saree is different, every shirt we make is unique. You will never see someone else in the same shirt. That is the whole point.",
  },
  {
    number: "03",
    title: "Master Tailors",
    subtitle: "Decades of craft.",
    description:
      "Our tailors have spent decades working with delicate Indian textiles. They know how silk behaves, how to cut without waste, how to preserve the weave direction.",
  },
  {
    number: "04",
    title: "Pan India Shipping",
    subtitle: "Free above ₹2,000.",
    description:
      "We pick up your saree and deliver your finished shirt anywhere in India. Carefully packed, insured, and tracked at every step.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#1E1E1E] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#8B6352] mb-4">
            Why Bhuvan Reweaves
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F8F5F0] max-w-2xl leading-tight">
            The Difference Is In
            <br />
            <em className="text-[#D4C4B0]">Every Detail.</em>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {features.map((f, i) => (
            <motion.div
              key={f.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border-t border-[#2B2118] py-8 grid grid-cols-1 md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-8 hover:border-[#8B6352] transition-colors duration-300"
            >
              <p className="font-serif text-[#5C4033] text-lg group-hover:text-[#8B6352] transition-colors duration-300">
                {f.number}
              </p>
              <div>
                <p className="font-serif text-xl text-[#F8F5F0]">{f.title}</p>
                <p className="font-sans text-xs tracking-widest uppercase text-[#8B6352] mt-1">
                  {f.subtitle}
                </p>
              </div>
              <p className="font-sans text-[#D4C4B0] text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
          <div className="border-t border-[#2B2118]" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-2xl"
        >
          <p className="font-serif text-xl md:text-2xl text-[#D4C4B0] leading-relaxed italic">
            "A saree carries the weight of memory — a wedding, a festival, a grandmother's touch.
            Our job is to keep that weight alive, in a form you wear every day."
          </p>
          <p className="font-sans text-xs tracking-widest uppercase text-[#8B6352] mt-4">
            — Bhuvan, Founder
          </p>
        </motion.div>
      </div>
    </section>
  );
}

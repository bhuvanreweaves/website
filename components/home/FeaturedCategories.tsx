"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FeaturedCategories() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-subtitle">Our Collections</p>
          <div className="flex items-end justify-between">
            <h2 className="section-title max-w-md">
              Crafted For Every Occasion
            </h2>
            <Link
              href="/shop"
              className="hidden md:flex items-center gap-2 text-xs tracking-widest uppercase text-brown/60 hover:text-brown transition-colors group"
            >
              View All
              <ArrowRight
                size={12}
                className="group-hover:translate-x-1 transition-transform"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {categories.map((cat, i) => (
            <motion.div key={cat.id} variants={itemVariants}>
              <Link
                href={`/shop?category=${cat.id}`}
                className="group block relative overflow-hidden aspect-[3/4]"
              >
                {/* Image */}
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-lg text-cream mb-1">
                    {cat.label}
                  </h3>
                  <p className="text-[10px] tracking-widest uppercase text-cream/50 mb-3">
                    {cat.count} Styles
                  </p>
                  <div className="flex items-center gap-2 text-cream/70 group-hover:text-cream transition-colors">
                    <span className="text-xs tracking-widest uppercase">
                      Explore
                    </span>
                    <ArrowRight
                      size={10}
                      className="group-hover:translate-x-1 transition-transform"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* Top label for large screens */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] tracking-[0.25em] uppercase text-cream/60 bg-brown/40 backdrop-blur-sm px-2 py-1">
                    {cat.description}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

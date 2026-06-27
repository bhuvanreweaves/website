"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/data/products";

export default function FeaturedCategories() {
  return (
    <section className="bg-[#F8F5F0] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#8B6352] mb-3">
              Shop by Saree Type
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2B2118]">
              Every Saree Has a Story.
              <br />
              <em>Now It Has a Shirt.</em>
            </h2>
          </div>
          <Link
            href="/shop"
            className="font-sans text-xs tracking-widest uppercase text-[#2B2118] flex items-center gap-2 hover:gap-3 transition-all duration-300 border-b border-[#2B2118] pb-0.5 self-start md:self-auto"
          >
            View All <ArrowRight size={13} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {productCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={`/shop?category=${cat.id}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2118]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#D4C4B0] mb-1">
                      {cat.count} {cat.count === 1 ? "style" : "styles"}
                    </p>
                    <p className="font-serif text-lg text-[#F8F5F0] leading-snug">{cat.name}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-[#F8F5F0] text-[#2B2118] font-sans text-xs tracking-widest uppercase px-5 py-2.5">
                      Explore
                    </span>
                  </div>
                </div>
                <p className="font-sans text-xs text-[#5C4033] leading-relaxed">{cat.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

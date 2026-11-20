"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { productCategories, type ProductCategory } from "@/data/products";

/** The three categories featured on the home page, in this order. */
const TILES: { id: ProductCategory; title: string; subtitle?: string }[] = [
  { id: "shirts", title: "Shirts" },
  { id: "kurtas", title: "Kurtas" },
  { id: "couple-set", title: "Couple Sets", subtitle: "Thalaivan x Thalaivi" },
];

export default function FeaturedCategories() {
  return (
    <section className="bg-cream px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center font-serif text-3xl uppercase tracking-[0.08em] text-brown md:mb-16 md:text-4xl"
        >
          Woven once. Worn again.
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {TILES.map((tile, i) => {
            const category = productCategories.find((c) => c.id === tile.id);
            if (!category) return null;
            return (
              <motion.div
                key={tile.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  href={`/shop?category=${tile.id}`}
                  className="group relative block aspect-square overflow-hidden bg-beige"
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/5 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-4 pb-8 text-center text-cream">
                    <span
                      aria-hidden
                      className="mb-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-cream text-brown opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <ChevronRight size={16} strokeWidth={1.75} />
                    </span>
                    <span className="font-sans text-xl font-medium uppercase tracking-[0.2em] md:text-2xl">
                      {tile.title}
                    </span>
                    {tile.subtitle && (
                      <span className="mt-2 font-serif text-base italic text-cream/85">
                        {tile.subtitle}
                      </span>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

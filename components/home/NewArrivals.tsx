"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import { products } from "@/data/products";
import { Badge } from "@/components/ui/badge";

const newArrivals = products.filter((p) => p.isNew).concat(
  products.filter((p) => p.isBestseller)
).slice(0, 4);

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function NewArrivals() {
  return (
    <section className="py-24 lg:py-32 bg-beige/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <p className="section-subtitle">Just Arrived</p>
            <h2 className="section-title">New Arrivals</h2>
          </div>
          <Link
            href="/shop?filter=new"
            className="hidden md:flex items-center gap-2 text-xs tracking-widest uppercase text-brown/60 hover:text-brown transition-colors group"
          >
            View All
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </Link>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {newArrivals.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="group">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[3/4] bg-warm-beige/40 mb-4">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    {product.isNew && (
                      <Badge variant="new" className="text-[8px]">New</Badge>
                    )}
                    {product.isBestseller && (
                      <Badge variant="bestseller" className="text-[8px]">Bestseller</Badge>
                    )}
                  </div>

                  {/* Quick View */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Link
                      href={`/product/${product.slug}`}
                      className="flex items-center justify-center gap-2 bg-brown text-cream py-3 text-xs tracking-widest uppercase w-full"
                    >
                      <Eye size={12} strokeWidth={1.5} />
                      Quick View
                    </Link>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <p className="text-[9px] tracking-widest uppercase text-brown/40 mb-1">
                    {product.fabric}
                  </p>
                  <h3 className="font-serif text-base text-brown mb-2 leading-snug">
                    <Link href={`/product/${product.slug}`} className="hover:opacity-70 transition-opacity">
                      {product.name}
                    </Link>
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-brown">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-brown/40 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/shop?filter=new"
            className="btn-outline"
          >
            View All New Arrivals
          </Link>
        </div>
      </div>
    </section>
  );
}

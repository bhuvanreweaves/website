"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  if (testimonials.length === 0) return null;

  const t = testimonials[current];
  const profileUrl = `https://instagram.com/${t.instagram}`;
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="overflow-hidden bg-beige/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="section-subtitle">What Clients Say</p>
          <h2 className="section-title max-w-md">Stories of Craftsmanship</h2>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,240px)_1fr] md:gap-16"
          >
            {/* Customer photo */}
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[4/5] w-full max-w-[240px] overflow-hidden rounded-lg bg-beige"
            >
              <Image
                src={t.photo}
                alt={`${t.name} wearing their ${t.product}`}
                fill
                sizes="240px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-cream/90 px-3 py-1.5 text-xs text-brown backdrop-blur-sm">
                <Instagram size={13} strokeWidth={1.75} />@{t.instagram}
              </span>
            </a>

            {/* Story */}
            <div className="max-w-2xl">
              <div className="mb-6 flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-brown text-brown" />
                ))}
              </div>

              <blockquote className="mb-8 font-serif text-2xl italic leading-relaxed text-brown md:text-3xl">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                {t.avatar ? (
                  <Image
                    src={t.avatar}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brown text-sm tracking-wide text-cream">
                    {initials(t.name)}
                  </span>
                )}
                <div>
                  <p className="text-sm font-medium text-brown">{t.name}</p>
                  <a
                    href={profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-brown/60 transition-colors hover:text-brown"
                  >
                    <Instagram size={12} strokeWidth={1.75} />@{t.instagram}
                  </a>
                  <p className="mt-0.5 text-xs text-brown/50">
                    {t.location} · {t.product}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-12 flex items-center gap-6">
                <div className="flex gap-2">
                  {testimonials.map((item, i) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrent(i)}
                      className={`h-px transition-all duration-300 ${
                        i === current ? "w-8 bg-brown" : "w-4 bg-brown/30"
                      }`}
                      aria-label={`Go to story ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="flex h-9 w-9 items-center justify-center border border-warm-beige text-brown transition-colors hover:bg-beige"
                    aria-label="Previous story"
                  >
                    <ChevronLeft size={14} strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={next}
                    className="flex h-9 w-9 items-center justify-center border border-warm-beige text-brown transition-colors hover:bg-beige"
                    aria-label="Next story"
                  >
                    <ChevronRight size={14} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

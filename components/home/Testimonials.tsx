"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/products";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 lg:py-32 bg-beige/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-subtitle">What Clients Say</p>
          <h2 className="section-title max-w-md">
            Stories of Craftsmanship
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brown text-brown" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-2xl md:text-3xl text-brown leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-brown/30" />
                <div>
                  <p className="text-sm font-medium text-brown">
                    {testimonials[current].name}
                  </p>
                  <p className="text-xs text-brown/50">
                    {testimonials[current].location} · {testimonials[current].product}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-12 flex items-center gap-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-px transition-all duration-300 ${
                    i === current ? "w-8 bg-brown" : "w-4 bg-brown/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 border border-warm-beige flex items-center justify-center text-brown hover:bg-beige transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={14} strokeWidth={1.5} />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 border border-warm-beige flex items-center justify-center text-brown hover:bg-beige transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

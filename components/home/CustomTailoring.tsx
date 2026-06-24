"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Upload, Ruler, CheckCircle, Package } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Reference Image",
    description:
      "Share your inspiration — a photo, screenshot, or sketch of the garment style you envision.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Submit Measurements",
    description:
      "Provide precise measurements for chest, shoulder, waist, sleeve length, and more.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Review & Confirm",
    description:
      "Our team reviews your request and confirms fabric availability, pricing, and timeline.",
  },
  {
    number: "04",
    icon: Package,
    title: "Production & Delivery",
    description:
      "Your garment is handcrafted with care and delivered to your door, pan India.",
  },
];

export default function CustomTailoring() {
  return (
    <section className="py-24 lg:py-32 bg-brown text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-cream/40 mb-4">
                Bespoke Experience
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight mb-6">
                Your Vision,
                <br />
                <span className="italic font-light">Our Craft</span>
              </h2>
              <p className="text-cream/60 leading-relaxed mb-10 max-w-md">
                Every great garment begins with a conversation. Share your
                vision and let our artisans bring it to life — precisely,
                beautifully, and made for you alone.
              </p>

              <Link
                href="/customization"
                className="inline-flex items-center gap-3 bg-cream text-brown px-8 py-4 text-xs tracking-widest uppercase font-medium transition-all duration-300 hover:bg-beige"
              >
                Start Customizing
              </Link>
            </motion.div>

            {/* Steps */}
            <div className="mt-14 flex flex-col gap-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex gap-6 py-6 border-b border-cream/10 last:border-0 group"
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <span className="font-serif text-2xl text-cream/20 group-hover:text-cream/40 transition-colors">
                      {step.number}
                    </span>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-cream/10 mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon
                        size={14}
                        className="text-cream/50"
                        strokeWidth={1.5}
                      />
                      <h3 className="text-sm font-medium tracking-wide text-cream">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-cream/50 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80"
                alt="Custom tailoring"
                fill
                className="object-cover"
                sizes="50vw"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-brown/90 backdrop-blur-sm p-6 border border-cream/10">
                <p className="text-xs tracking-widest uppercase text-cream/40 mb-2">
                  Current lead time
                </p>
                <p className="font-serif text-2xl text-cream mb-1">10–14 Days</p>
                <p className="text-xs text-cream/50">
                  For bespoke custom orders
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

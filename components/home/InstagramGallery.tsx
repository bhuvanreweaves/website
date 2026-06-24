"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500&q=80",
    alt: "Handcrafted kurta",
    size: "large",
  },
  {
    src: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=500&q=80",
    alt: "Formal shirt detail",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80",
    alt: "Block print shirt",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80",
    alt: "Long kurta",
    size: "large",
  },
  {
    src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&q=80",
    alt: "Fabric texture",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&q=80",
    alt: "Tailoring process",
    size: "small",
  },
];

export default function InstagramGallery() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="section-subtitle">Follow Our Journey</p>
          <h2 className="section-title mx-auto">
            @bhuvanreweaves
          </h2>
          <p className="mt-4 text-sm text-brown/50">
            Tag us in your looks for a chance to be featured
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`relative overflow-hidden group ${
                img.size === "large" ? "row-span-2" : ""
              }`}
              style={{
                aspectRatio: img.size === "large" ? "4/5" : "1/1",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/40 transition-all duration-300 flex items-center justify-center">
                <Instagram
                  size={24}
                  className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  strokeWidth={1.5}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://instagram.com/bhuvanreweaves"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-brown/60 hover:text-brown transition-colors border-b border-current pb-1"
          >
            <Instagram size={12} strokeWidth={1.5} />
            View on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}

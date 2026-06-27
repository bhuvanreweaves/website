"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80",
    alt: "Vibrant silk saree before transformation",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=500&q=80",
    alt: "Finished shirt made from Kanjivaram silk",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80",
    alt: "Banarasi brocade shirt detail",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80",
    alt: "Handcrafted saree shirt worn",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&q=80",
    alt: "Saree fabric detail and texture",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&q=80",
    alt: "Tailor working on a saree shirt",
    span: "",
  },
];

export default function InstagramGallery() {
  return (
    <section className="bg-[#F8F5F0] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#8B6352] mb-3">
            @bhuvanreweaves
          </p>
          <h2 className="font-serif text-4xl text-[#2B2118]">
            Sarees We've <em>Rewoven</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-3 h-[600px] md:h-[700px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden group ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#2B2118]/0 group-hover:bg-[#2B2118]/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram
                  size={28}
                  className="text-[#F8F5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com/bhuvanreweaves"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-widest uppercase text-[#2B2118] border-b border-[#2B2118] pb-0.5 hover:text-[#8B6352] hover:border-[#8B6352] transition-colors duration-300"
          >
            <Instagram size={14} /> Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}

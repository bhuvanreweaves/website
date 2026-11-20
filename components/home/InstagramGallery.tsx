"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { SITE } from "@/lib/site-info";

// Placeholder photos until real Instagram posts are added
const PHOTOS = {
  left: {
    src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    alt: "A vibrant silk saree before it is rewoven",
  },
  centre: {
    src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    alt: "A saree being crafted into a shirt",
  },
  right: {
    src: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=600&q=80",
    alt: "A finished shirt made from a Kanjivaram saree",
  },
};

const instagramUrl = `https://instagram.com/${SITE.instagramHandle}`;

function Photo({ src, alt, className, sizes }: { src: string; alt: string; className: string; sizes: string }) {
  return (
    <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </a>
  );
}

export default function InstagramGallery() {
  return (
    <section className="bg-brown-medium px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-2 items-start gap-4 md:grid-cols-[1fr_1.35fr_1fr] md:gap-10">
        {/* Centre: heading, button and photo (first on phones) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="col-span-2 flex flex-col items-center text-center md:order-2 md:col-span-1"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cream text-brown">
            <Instagram size={22} strokeWidth={1.75} />
          </span>
          <p className="mt-4 font-sans text-sm tracking-wide text-cream/85">@{SITE.instagramHandle}</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-cream md:text-5xl">
            Sarees, Rewoven.
            <br />
            Follow the Journey.
          </h2>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 rounded-md border border-cream/70 px-7 py-3 font-sans text-sm text-cream transition-colors hover:bg-cream hover:text-brown"
          >
            Follow on Instagram
          </a>
          <Photo
            {...PHOTOS.centre}
            sizes="(min-width: 768px) 30vw, 100vw"
            className="mt-10 aspect-[4/3] w-full"
          />
        </motion.div>

        {/* Side photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:order-1 md:mt-12"
        >
          <Photo {...PHOTOS.left} sizes="(min-width: 768px) 22vw, 50vw" className="aspect-[4/5] w-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:order-3 md:mt-12"
        >
          <Photo {...PHOTOS.right} sizes="(min-width: 768px) 22vw, 50vw" className="aspect-[4/5] w-full" />
        </motion.div>
      </div>
    </section>
  );
}

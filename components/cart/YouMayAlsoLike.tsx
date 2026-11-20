"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fetchProducts } from "@/lib/medusa-api";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/data/products";

/** A scrollable row of other products. Hidden when there are none. */
export default function YouMayAlsoLike({ excludeIds }: { excludeIds: string[] }) {
  const [products, setProducts] = useState<Product[]>([]);
  const row = useRef<HTMLDivElement>(null);
  const exclude = excludeIds.join(",");

  useEffect(() => {
    fetchProducts().then((all) =>
      setProducts(all.filter((p) => !exclude.split(",").includes(p.id)).slice(0, 12))
    );
  }, [exclude]);

  if (products.length === 0) return null;

  const scroll = (direction: 1 | -1) =>
    row.current?.scrollBy({ left: direction * row.current.clientWidth * 0.8, behavior: "smooth" });

  return (
    <section className="mt-24" aria-labelledby="also-like-heading">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 id="also-like-heading" className="font-serif text-4xl text-brown">
          You may <em>also</em> like
        </h2>
        <div className="flex items-center gap-6">
          <Link
            href="/shop"
            className="hidden border-b border-brown pb-0.5 text-[11px] uppercase tracking-[0.2em] text-brown sm:inline"
          >
            Shop the collection
          </Link>
          <button onClick={() => scroll(-1)} aria-label="Previous products" className="text-brown/60 hover:text-brown">
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>
          <button onClick={() => scroll(1)} aria-label="Next products" className="text-brown/60 hover:text-brown">
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
      <div ref={row} className="flex snap-x gap-4 overflow-x-auto pb-2 [scrollbar-width:none]">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/product/${p.slug}`}
            className="group w-[70%] flex-shrink-0 snap-start sm:w-[45%] lg:w-[calc(25%-12px)]"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-beige">
              {p.images[0] && (
                <Image
                  src={p.images[0]}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 70vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
            </div>
            <p className="mt-3 text-xs uppercase tracking-widest text-brown">{p.name}</p>
            {p.price > 0 && <p className="mt-1 text-sm text-brown/60">{formatPrice(p.price)}</p>}
          </Link>
        ))}
      </div>
    </section>
  );
}

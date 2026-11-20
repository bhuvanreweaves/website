"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, SlidersHorizontal, X } from "lucide-react";
import {
  isProductCategory,
  productCategories,
  type Product,
  type ProductCategory,
  type Fabric,
  type Size,
} from "@/data/products";
import { fetchProducts } from "@/lib/medusa-api";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

type SortOption = "latest" | "price-low" | "price-high";

const categoryOptions: { value: ProductCategory | "all"; label: string }[] = [
  { value: "all", label: "All Products" },
  ...productCategories.map((c) => ({ value: c.id, label: c.name })),
];

const categoryFromUrl = (value: string | null): ProductCategory | "all" =>
  isProductCategory(value) ? value : "all";

const fabricOptions: Fabric[] = [
  "Kanjivaram Silk",
  "Banarasi Silk",
  "Mysore Silk",
  "Chanderi Silk",
  "Patola Silk",
  "Cotton",
  "Handloom Cotton",
  "Ikat Cotton",
];

function ShopContent() {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<ProductCategory | "all">(
    categoryFromUrl(searchParams.get("category"))
  );
  const [selectedFabrics, setSelectedFabrics] = useState<Fabric[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("latest");
  const [filterOpen, setFilterOpen] = useState(false);
  // null = no price limit
  const [priceMax, setPriceMax] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Follow category links (menu, footer) while already on this page
  useEffect(() => {
    setCategory(categoryFromUrl(searchParams.get("category")));
  }, [searchParams]);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  // Price slider ends at the most expensive product, rounded up to ₹500
  const highestPrice = useMemo(
    () => Math.ceil(Math.max(5000, ...products.map((p) => p.price)) / 500) * 500,
    [products]
  );

  const filtered = useMemo(() => {
    let result = [...products];
    if (category !== "all") result = result.filter((p) => p.category === category);
    if (selectedFabrics.length > 0)
      result = result.filter((p) => selectedFabrics.includes(p.fabric));
    if (priceMax !== null) result = result.filter((p) => p.price <= priceMax);
    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    return result;
  }, [products, category, selectedFabrics, sortBy, priceMax]);

  const toggleFabric = (fabric: Fabric) => {
    setSelectedFabrics((prev) =>
      prev.includes(fabric) ? prev.filter((f) => f !== fabric) : [...prev, fabric]
    );
  };

  return (
    <div className="min-h-screen bg-cream pt-24">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 border-b border-beige">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Our Store</p>
          <h1 className="font-serif text-4xl md:text-5xl text-brown">
            Handcrafted from Sarees
          </h1>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 text-xs tracking-widest uppercase text-brown/60 hover:text-brown transition-colors"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} />
              Filters
              {(selectedFabrics.length > 0 || category !== "all") && (
                <span className="bg-brown text-cream text-[9px] px-1.5 py-0.5 font-medium">
                  {selectedFabrics.length + (category !== "all" ? 1 : 0)}
                </span>
              )}
            </button>
            <span className="text-xs text-brown/40">
              {filtered.length} {filtered.length === 1 ? "Product" : "Products"}
            </span>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-brown/40 hidden sm:block">Sort:</span>
            <div className="flex gap-1">
              {(
                [
                  { value: "latest", label: "Latest" },
                  { value: "price-low", label: "Price ↑" },
                  { value: "price-high", label: "Price ↓" },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSortBy(opt.value)}
                  className={`px-3 py-1.5 text-xs tracking-widest uppercase transition-colors ${
                    sortBy === opt.value
                      ? "bg-brown text-cream"
                      : "text-brown/50 hover:text-brown border border-transparent hover:border-beige"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar Filters */}
          {filterOpen && (
            <motion.aside
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              className="w-52 flex-shrink-0"
            >
              {/* Category */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs tracking-widest uppercase text-brown/50">Category</p>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={14} className="text-brown/30" />
                  </button>
                </div>
                <div className="flex flex-col gap-1">
                  {categoryOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setCategory(opt.value)}
                      className={`text-left text-sm py-1.5 transition-colors ${
                        category === opt.value
                          ? "text-brown font-medium"
                          : "text-brown/50 hover:text-brown"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fabric */}
              <div className="mb-8">
                <p className="text-xs tracking-widest uppercase text-brown/50 mb-4">Fabric</p>
                <div className="flex flex-col gap-2">
                  {fabricOptions.map((fabric) => (
                    <label key={fabric} className="flex items-center gap-2 cursor-pointer group">
                      <div
                        onClick={() => toggleFabric(fabric)}
                        className={`w-3.5 h-3.5 border transition-colors cursor-pointer ${
                          selectedFabrics.includes(fabric)
                            ? "bg-brown border-brown"
                            : "border-warm-beige group-hover:border-brown"
                        }`}
                      />
                      <span
                        onClick={() => toggleFabric(fabric)}
                        className="text-sm text-brown/60 group-hover:text-brown transition-colors"
                      >
                        {fabric}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <p className="text-xs tracking-widest uppercase text-brown/50 mb-4">
                  Max Price: {priceMax === null ? "Any" : formatPrice(priceMax)}
                </p>
                <input
                  type="range"
                  min={1000}
                  max={highestPrice}
                  step={500}
                  value={priceMax ?? highestPrice}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    setPriceMax(value >= highestPrice ? null : value);
                  }}
                  className="w-full accent-brown"
                />
                <div className="flex justify-between text-xs text-brown/40 mt-1">
                  <span>₹1,000</span>
                  <span>{formatPrice(highestPrice)}</span>
                </div>
              </div>
            </motion.aside>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[3/4] bg-warm-beige/50 mb-3" />
                    <div className="h-3 bg-warm-beige/50 w-1/2 mb-2" />
                    <div className="h-4 bg-warm-beige/50 w-3/4 mb-2" />
                    <div className="h-3 bg-warm-beige/50 w-1/4" />
                  </div>
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-brown/50 font-serif text-xl">No products found</p>
                <button
                  onClick={() => {
                    setCategory("all");
                    setSelectedFabrics([]);
                    setPriceMax(null);
                  }}
                  className="mt-4 text-xs tracking-widest uppercase text-brown/50 hover:text-brown transition-colors underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">
                {filtered.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    className="group"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-[3/4] bg-warm-beige/30 mb-3">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        {product.isNew && (
                          <Badge variant="new" className="text-[8px]">New</Badge>
                        )}
                        {product.isBestseller && (
                          <Badge variant="bestseller" className="text-[8px]">Bestseller</Badge>
                        )}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <Link
                          href={`/product/${product.slug}`}
                          className="flex items-center justify-center gap-2 bg-brown text-cream py-3 text-xs tracking-widest uppercase w-full"
                        >
                          <Eye size={12} strokeWidth={1.5} />
                          View Product
                        </Link>
                      </div>
                    </div>

                    <p className="text-[9px] tracking-widest uppercase text-brown/40 mb-1">
                      {product.category.replace(/-/g, " ")} · {product.fabric}
                    </p>
                    <h3 className="font-serif text-base text-brown mb-1.5 leading-snug">
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
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream pt-24 flex items-center justify-center"><p className="text-brown/40 text-sm tracking-widest uppercase">Loading...</p></div>}>
      <ShopContent />
    </Suspense>
  );
}

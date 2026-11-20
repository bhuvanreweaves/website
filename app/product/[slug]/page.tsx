"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Zap, ArrowLeft, Share2 } from "lucide-react";
import { use } from "react";
import { getCategoryName, type Product, type Size } from "@/data/products";
import { fetchProductBySlug } from "@/lib/medusa-api";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/cart/CartProvider";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [product, setProduct] = useState<Product | null | undefined>(undefined);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addItem, busy: cartBusy } = useCart();

  useEffect(() => {
    fetchProductBySlug(slug).then((medusaProduct) => {
      setProduct(medusaProduct ?? null);
    });
  }, [slug]);

  if (product === null) notFound();
  if (product === undefined) return (
    <div className="min-h-screen bg-cream pt-20 flex items-center justify-center">
      <div className="text-brown/30 text-sm tracking-widest uppercase animate-pulse">Loading...</div>
    </div>
  );

  // Products without sizes have a single variant and skip the size picker
  const needsSize = product.sizes.length > 0;
  const selectedVariant = product.variants?.find((v) =>
    needsSize ? v.size === selectedSize : true
  );
  const canAddToCart = !!selectedVariant && !cartBusy;
  const displayPrice = selectedVariant?.price || product.price;

  // Adds the chosen size to the cart and opens the cart drawer
  const handleAddToCart = async () => {
    if (selectedVariant) await addItem(selectedVariant.id, quantity);
  };

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 border-b border-beige">
        <div className="flex items-center gap-3 text-xs text-brown/40 tracking-widest uppercase">
          <Link href="/" className="hover:text-brown transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-brown transition-colors">Shop</Link>
          <span>/</span>
          <Link
            href={`/shop?category=${product.category}`}
            className="hover:text-brown transition-colors"
          >
            {getCategoryName(product.category)}
          </Link>
          <span>/</span>
          <span className="text-brown truncate max-w-40">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-warm-beige/30 mb-3">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                priority
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {product.isNew && (
                <div className="absolute top-4 left-4">
                  <Badge variant="new" className="text-[9px]">New Arrival</Badge>
                </div>
              )}
              {product.isBestseller && (
                <div className="absolute top-4 left-4">
                  <Badge variant="bestseller" className="text-[9px]">Bestseller</Badge>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative w-20 aspect-[4/5] overflow-hidden border-2 transition-colors ${
                    i === selectedImage ? "border-brown" : "border-transparent"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs tracking-widest uppercase text-brown/40">
                {getCategoryName(product.category)}
              </p>
              <button className="text-brown/30 hover:text-brown transition-colors">
                <Share2 size={14} strokeWidth={1.5} />
              </button>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl text-brown mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-serif text-2xl text-brown">
                {formatPrice(displayPrice)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-brown/40 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="text-sm text-brown/60 leading-relaxed mb-8 border-b border-beige pb-8">
              {product.description}
            </p>

            {/* Size Selection */}
            {needsSize && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs tracking-widest uppercase text-brown/60">Select Size</p>
                <button className="text-xs text-brown/40 hover:text-brown transition-colors underline">
                  Size Guide
                </button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-11 h-11 border text-xs transition-all ${
                      selectedSize === size
                        ? "border-brown bg-brown text-cream"
                        : "border-warm-beige text-brown hover:border-brown"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-xs text-brown/40 mt-2">Please select a size to continue</p>
              )}
            </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase text-brown/60 mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 border border-warm-beige flex items-center justify-center hover:border-brown transition-colors"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="font-serif text-lg text-brown w-6 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-9 h-9 border border-warm-beige flex items-center justify-center hover:border-brown transition-colors"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Fabric badge */}
            <div className="flex items-center gap-2 mb-8">
              <span className="text-xs tracking-widest uppercase text-brown/40">Fabric:</span>
              <span className="text-xs text-brown px-3 py-1 border border-beige">{product.fabric}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2"
                disabled={!canAddToCart}
              >
                <ShoppingBag size={14} strokeWidth={1.5} />
                {cartBusy ? "Adding…" : "Add to Cart"}
              </Button>
              <Button
                onClick={handleAddToCart}
                variant="outline"
                className="flex-1 flex items-center justify-center gap-2"
                disabled={!canAddToCart}
              >
                <Zap size={14} strokeWidth={1.5} />
                Buy Now
              </Button>
            </div>

            {/* Customize CTA */}
            <Link
              href="/customization"
              className="block text-center py-3 border border-dashed border-warm-beige text-xs tracking-widest uppercase text-brown/50 hover:border-brown hover:text-brown transition-colors"
            >
              Have a saree of your own? → Turn it into a shirt
            </Link>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="fabric">Fabric Details</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="care">Care Instructions</TabsTrigger>
            </TabsList>

            <TabsContent value="description">
              <p className="text-sm text-brown/60 leading-relaxed max-w-2xl">
                {product.description}
              </p>
            </TabsContent>

            <TabsContent value="fabric">
              <p className="text-sm text-brown/60 leading-relaxed max-w-2xl">
                {product.fabric} — {product.description}
              </p>
            </TabsContent>

            <TabsContent value="shipping">
              <p className="text-sm text-brown/60 leading-relaxed max-w-2xl">
                {product.shippingInfo}
              </p>
            </TabsContent>

            <TabsContent value="care">
              <p className="text-sm text-brown/60 leading-relaxed max-w-2xl">
                {product.careInstructions}
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

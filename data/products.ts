import { SHIPPING_SUMMARY } from "@/lib/site-info";

// Same handles as the product categories in the Medusa admin
// (Products → Categories). Add a new one here and in productCategories below.
export type ProductCategory = "shirts" | "kurtas" | "couple-set" | "dhoti";

export type Fabric =
  | "Kanjivaram Silk"
  | "Banarasi Silk"
  | "Cotton"
  | "Chanderi Silk"
  | "Patola Silk"
  | "Mysore Silk"
  | "Ikat Cotton"
  | "Handloom Cotton";

export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  fabric: Fabric;
  price: number;
  originalPrice?: number;
  images: string[];
  sizes: Size[];
  description: string;
  isNew?: boolean;
  isBestseller?: boolean;
  careInstructions?: string;
  shippingInfo?: string;
  /** Medusa variants (one per size). Only products from Medusa have these. */
  variants?: ProductVariant[];
}

export interface ProductVariant {
  /** Medusa variant ID, added to the cart */
  id: string;
  /** null for products without sizes (a single "default" variant) */
  size: Size | null;
  price: number;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "kanjivaram-silk-shirt",
    name: "Kanjivaram Silk Shirt",
    category: "shirts",
    fabric: "Kanjivaram Silk",
    price: 3990,
    images: [
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=85",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=85",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Handcrafted from a traditional Kanjivaram silk saree. Rich gold zari border patterns run across the chest and cuffs, making this shirt a wearable heirloom. Each piece is one-of-a-kind.",
    isNew: true,
    careInstructions: "Dry clean only. Store folded in muslin cloth.",
    shippingInfo: SHIPPING_SUMMARY,
  },
  {
    id: "2",
    slug: "banarasi-weave-shirt",
    name: "Banarasi Weave Shirt",
    category: "shirts",
    fabric: "Banarasi Silk",
    price: 4290,
    originalPrice: 4890,
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=85",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=85",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=85",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Born from a vintage Banarasi saree, this shirt carries the timeless brocade motifs of Varanasi's master weavers. The intricate floral patterns tell a story centuries in the making.",
    isBestseller: true,
    careInstructions: "Dry clean only. Do not wring or tumble dry.",
    shippingInfo: SHIPPING_SUMMARY,
  },
  {
    id: "3",
    slug: "cotton-saree-checkered-shirt",
    name: "Cotton Saree Checkered Shirt",
    category: "shirts",
    fabric: "Cotton",
    price: 2490,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4b4628?w=800&q=85",
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&q=85",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=85",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Crafted from a handloom cotton saree with traditional checked weave. Light, breathable and perfect for the Indian summer. The border detail is preserved along the placket.",
    isNew: true,
    careInstructions: "Machine wash cold, gentle cycle. Line dry in shade.",
    shippingInfo: SHIPPING_SUMMARY,
  },
  {
    id: "4",
    slug: "chanderi-silk-shirt",
    name: "Chanderi Silk Shirt",
    category: "shirts",
    fabric: "Chanderi Silk",
    price: 3690,
    images: [
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800&q=85",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=85",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=85",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Made from a delicate Chanderi silk saree, this shirt drapes effortlessly. The subtle sheen and feather-light weight make it ideal for festive occasions and evening wear.",
    isBestseller: true,
    careInstructions: "Dry clean recommended. Hand wash in cold water if needed.",
    shippingInfo: SHIPPING_SUMMARY,
  },
  {
    id: "5",
    slug: "patola-silk-shirt",
    name: "Patola Silk Shirt",
    category: "shirts",
    fabric: "Patola Silk",
    price: 4890,
    images: [
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&q=85",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=85",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=85",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Resurrected from a rare double-ikat Patola saree from Gujarat. The geometric patterns in ruby, ivory and gold make this one of our most striking pieces. A true collector's shirt.",
    isNew: true,
    careInstructions: "Dry clean only. Handle with care.",
    shippingInfo: SHIPPING_SUMMARY,
  },
  {
    id: "6",
    slug: "handloom-cotton-saree-shirt",
    name: "Handloom Cotton Saree Shirt",
    category: "shirts",
    fabric: "Handloom Cotton",
    price: 2290,
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=85",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=85",
      "https://images.unsplash.com/photo-1594938298603-c8148c4b4628?w=800&q=85",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Simple, honest and beautifully made. From a striped handloom cotton saree, this everyday shirt celebrates the craft of the loom. Soft from first wear and only gets better with time.",
    careInstructions: "Machine wash cold. Line dry. Iron on medium heat.",
    shippingInfo: SHIPPING_SUMMARY,
  },
  {
    id: "7",
    slug: "mysore-silk-shirt",
    name: "Mysore Silk Shirt",
    category: "shirts",
    fabric: "Mysore Silk",
    price: 3490,
    originalPrice: 3990,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=85",
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&q=85",
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800&q=85",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Mysore silk is royalty — smooth, lustrous and woven with pride. This shirt, born from a deep crimson Mysore saree, carries the regality of Karnataka's craft tradition in every thread.",
    isBestseller: true,
    careInstructions: "Dry clean only. Store in cool, dry place.",
    shippingInfo: SHIPPING_SUMMARY,
  },
  {
    id: "8",
    slug: "ikat-cotton-shirt",
    name: "Ikat Cotton Shirt",
    category: "shirts",
    fabric: "Ikat Cotton",
    price: 2990,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=85",
      "https://images.unsplash.com/photo-1594938298603-c8148c4b4628?w=800&q=85",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=85",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Woven using the ancient resist-dyeing technique of Ikat, this shirt has a beautifully blurred pattern that is never perfectly repeated. From Telangana's finest saree weavers.",
    isNew: true,
    careInstructions: "Hand wash in cold water. Do not bleach. Line dry.",
    shippingInfo: SHIPPING_SUMMARY,
  },
];

// Category images are placeholders until real product photos are added.
export const productCategories: {
  id: ProductCategory;
  name: string;
  description: string;
  image: string;
}[] = [
  {
    id: "shirts",
    name: "Shirts",
    description: "Silk, cotton, Kanjivaram and Banarasi sarees, reborn as shirts",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
  },
  {
    id: "kurtas",
    name: "Kurtas",
    description: "Easy, elegant kurtas cut from the sarees you love",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
  },
  {
    id: "couple-set",
    name: "Couple Set (Thalaivan x Thalaivi)",
    description: "Matching pieces for two, made from the same saree",
    image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=600&q=80",
  },
  {
    id: "dhoti",
    name: "Dhoti",
    description: "Traditional dhotis finished with saree borders",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
  },
];

export function getCategoryName(id: string): string {
  return productCategories.find((c) => c.id === id)?.name ?? id.replace(/-/g, " ");
}

export function isProductCategory(value: unknown): value is ProductCategory {
  return productCategories.some((c) => c.id === value);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getNewArrivals(limit = 4): Product[] {
  return products.filter((p) => p.isNew).slice(0, limit);
}

export function getBestsellers(limit = 4): Product[] {
  return products.filter((p) => p.isBestseller).slice(0, limit);
}

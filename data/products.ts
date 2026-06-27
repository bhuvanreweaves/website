export type ProductCategory =
  | "silk-saree-shirts"
  | "cotton-saree-shirts"
  | "kanjivaram-shirts"
  | "banarasi-shirts";

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
}

export const products: Product[] = [
  {
    id: "1",
    slug: "kanjivaram-silk-shirt",
    name: "Kanjivaram Silk Shirt",
    category: "kanjivaram-shirts",
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
    shippingInfo: "Ships in 10–14 business days. Free shipping above ₹2,000.",
  },
  {
    id: "2",
    slug: "banarasi-weave-shirt",
    name: "Banarasi Weave Shirt",
    category: "banarasi-shirts",
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
    shippingInfo: "Ships in 10–14 business days. Free shipping above ₹2,000.",
  },
  {
    id: "3",
    slug: "cotton-saree-checkered-shirt",
    name: "Cotton Saree Checkered Shirt",
    category: "cotton-saree-shirts",
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
    shippingInfo: "Ships in 10–14 business days. Free shipping above ₹2,000.",
  },
  {
    id: "4",
    slug: "chanderi-silk-shirt",
    name: "Chanderi Silk Shirt",
    category: "silk-saree-shirts",
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
    shippingInfo: "Ships in 10–14 business days. Free shipping above ₹2,000.",
  },
  {
    id: "5",
    slug: "patola-silk-shirt",
    name: "Patola Silk Shirt",
    category: "silk-saree-shirts",
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
    shippingInfo: "Ships in 10–14 business days. Free shipping above ₹2,000.",
  },
  {
    id: "6",
    slug: "handloom-cotton-saree-shirt",
    name: "Handloom Cotton Saree Shirt",
    category: "cotton-saree-shirts",
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
    shippingInfo: "Ships in 10–14 business days. Free shipping above ₹2,000.",
  },
  {
    id: "7",
    slug: "mysore-silk-shirt",
    name: "Mysore Silk Shirt",
    category: "silk-saree-shirts",
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
    shippingInfo: "Ships in 10–14 business days. Free shipping above ₹2,000.",
  },
  {
    id: "8",
    slug: "ikat-cotton-shirt",
    name: "Ikat Cotton Shirt",
    category: "cotton-saree-shirts",
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
    shippingInfo: "Ships in 10–14 business days. Free shipping above ₹2,000.",
  },
];

export const productCategories = [
  {
    id: "silk-saree-shirts",
    name: "Silk Saree Shirts",
    description: "Kanjivaram, Mysore, Chanderi & Patola — rewoven into shirts",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    count: 4,
  },
  {
    id: "cotton-saree-shirts",
    name: "Cotton Saree Shirts",
    description: "Handloom, Ikat & checked — breathable & everyday",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    count: 3,
  },
  {
    id: "kanjivaram-shirts",
    name: "Kanjivaram Shirts",
    description: "Tamil Nadu's finest silk — gold zari, rich colour, living legacy",
    image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=600&q=80",
    count: 1,
  },
  {
    id: "banarasi-shirts",
    name: "Banarasi Shirts",
    description: "Varanasi brocade carrying centuries of craft in every stitch",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
    count: 1,
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Arjun Mehta",
    location: "Mumbai",
    product: "Kanjivaram Silk Shirt",
    rating: 5,
    text: "My mother's old Kanjivaram saree sat in a box for 20 years. Bhuvan Reweaves turned it into the most beautiful shirt I've ever owned. I wore it to my sister's wedding and everyone asked where I got it.",
  },
  {
    id: "2",
    name: "Priya Sharma",
    location: "Bangalore",
    product: "Banarasi Weave Shirt",
    rating: 5,
    text: "I gifted my husband a shirt made from my grandmother's Banarasi saree. He cried when he opened it. You can feel the love and skill in every stitch. Something truly irreplaceable.",
  },
  {
    id: "3",
    name: "Rahul Krishnamurthy",
    location: "Chennai",
    product: "Mysore Silk Shirt",
    rating: 5,
    text: "The quality is unlike anything I've bought off a rack. It fits perfectly, feels incredible and carries a story only I know. Worth every rupee and more.",
  },
  {
    id: "4",
    name: "Deepa Iyer",
    location: "Delhi",
    product: "Cotton Saree Shirt",
    rating: 5,
    text: "Sent in my late mother's cotton saree and received a shirt for my father. He wears it every Sunday. It's not just a shirt — it's a memory he can hold close.",
  },
];

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

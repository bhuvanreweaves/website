export type ProductCategory =
  | "formal-shirts"
  | "printed-shirts"
  | "short-kurtas"
  | "long-kurtas";

export type Fabric =
  | "Cotton"
  | "Linen"
  | "Khadi"
  | "Silk Cotton"
  | "Modal"
  | "Chanderi";

export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription: string;
  fabric: Fabric;
  fabricDetails: string;
  careInstructions: string;
  shippingInfo: string;
  sizes: Size[];
  images: string[];
  tags: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "handloom-cotton-formal-shirt",
    name: "Handloom Cotton Formal Shirt",
    category: "formal-shirts",
    categoryLabel: "Formal Shirts",
    price: 2890,
    description:
      "A refined formal shirt woven from handloom cotton with a classic spread collar. Understated elegance for the modern professional.",
    longDescription:
      "Each thread of this shirt carries the legacy of skilled artisans. Hand-woven on traditional looms, this formal shirt blends heritage craftsmanship with contemporary silhouette. The natural cotton breathes beautifully, making it ideal for long days at work or formal evenings.",
    fabric: "Cotton",
    fabricDetails:
      "100% handloom cotton, 80s count, yarn-dyed with natural dyes. Fabric sourced from Coimbatore weavers with 40+ years of expertise.",
    careInstructions:
      "Hand wash in cold water with mild detergent. Do not bleach. Iron on medium heat. Dry in shade.",
    shippingInfo:
      "Ships within 3-5 business days. Free shipping across India on orders above ₹2000. Standard delivery 5-7 working days.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4b4628?w=800&q=80",
    ],
    tags: ["formal", "cotton", "handloom"],
    isNew: true,
    inStock: true,
  },
  {
    id: "2",
    slug: "indigo-linen-printed-shirt",
    name: "Indigo Linen Block Print Shirt",
    category: "printed-shirts",
    categoryLabel: "Printed Shirts",
    price: 3290,
    originalPrice: 3890,
    description:
      "A story of craft in every pattern. Hand block-printed on premium linen with traditional Rajasthani motifs in indigo.",
    longDescription:
      "Every shirt from this series is individually block-printed by craftspeople in Bagru, Rajasthan. The indigo pigment, derived from natural sources, deepens beautifully with each wash — making this not just a shirt but a living garment that evolves with you.",
    fabric: "Linen",
    fabricDetails:
      "60% linen, 40% cotton blend. Hand block printed with natural indigo. Each piece will show slight variations — a mark of authenticity.",
    careInstructions:
      "Wash separately for first 2-3 washes. Cold wash recommended. Iron inside-out on medium heat.",
    shippingInfo:
      "Ships within 3-5 business days. Free shipping across India on orders above ₹2000.",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
    ],
    tags: ["printed", "linen", "block print", "indigo"],
    isBestseller: true,
    inStock: true,
  },
  {
    id: "3",
    slug: "khadi-mandarin-short-kurta",
    name: "Khadi Mandarin Short Kurta",
    category: "short-kurtas",
    categoryLabel: "Short Kurtas",
    price: 2490,
    description:
      "Minimalist short kurta in handspun khadi with a mandarin collar. A timeless piece for effortless dressing.",
    longDescription:
      "This short kurta celebrates the simplicity of khadi — a fabric with a soul. Hand-spun and hand-woven, each piece carries the texture of the artisan's hands. The mandarin collar and relaxed silhouette make it equally suited for casual outings and curated occasions.",
    fabric: "Khadi",
    fabricDetails:
      "100% handspun khadi from Gujarat. Natural off-white color. Slight variations in texture and weave are inherent to khadi.",
    careInstructions:
      "Hand wash only. Do not wring. Dry flat. Light starch for crispness.",
    shippingInfo:
      "Ships within 5-7 business days (handmade). Free shipping across India.",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
    ],
    tags: ["kurta", "khadi", "minimal", "short"],
    isNew: true,
    inStock: true,
  },
  {
    id: "4",
    slug: "chanderi-embroidered-long-kurta",
    name: "Chanderi Embroidered Long Kurta",
    category: "long-kurtas",
    categoryLabel: "Long Kurtas",
    price: 4890,
    description:
      "A celebration of Chanderi silk-cotton with delicate zari embroidery along the collar and hem. For occasions that demand presence.",
    longDescription:
      "Woven in Chanderi, Madhya Pradesh, this long kurta uses the legendary Chanderi silk-cotton blend — featherlight with a natural sheen. The zari embroidery on the collar and hemline is hand-stitched by artisans trained in the Chanderi tradition, adding quiet opulence to the silhouette.",
    fabric: "Chanderi",
    fabricDetails:
      "Chanderi silk-cotton, traditional zari embroidery, natural dyes. Each piece takes approximately 3 days to weave and embroider.",
    careInstructions:
      "Dry clean recommended. If hand washing, use very mild detergent in cold water. Do not wring. Dry in shade.",
    shippingInfo:
      "Ships within 7-10 business days. Free shipping across India.",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
      "https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=800&q=80",
      "https://images.unsplash.com/photo-1614093302611-8efc60b9d15b?w=800&q=80",
    ],
    tags: ["kurta", "chanderi", "embroidery", "long", "festive"],
    isBestseller: true,
    inStock: true,
  },
  {
    id: "5",
    slug: "modal-slim-formal-shirt",
    name: "Modal Slim Formal Shirt",
    category: "formal-shirts",
    categoryLabel: "Formal Shirts",
    price: 3190,
    description:
      "Sculpted for the modern professional. Slim-cut modal shirt with a subtle sheen and exceptional drape.",
    longDescription:
      "Modal fabric offers the softness of cotton with the drape of silk — perfect for a shirt that moves with you. This slim-cut formal shirt features a clean button-down collar, mother-of-pearl buttons, and precise tailoring that flatters without constraining.",
    fabric: "Modal",
    fabricDetails:
      "100% micro-modal fabric. Natural off-white. OEKO-TEX certified. Mother-of-pearl buttons.",
    careInstructions:
      "Machine wash cold, gentle cycle. Low tumble dry. Iron on low heat.",
    shippingInfo:
      "Ships within 3-5 business days. Free shipping across India on orders above ₹2000.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=800&q=80",
      "https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=800&q=80",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80",
    ],
    tags: ["formal", "modal", "slim-fit"],
    inStock: true,
  },
  {
    id: "6",
    slug: "silk-cotton-short-kurta",
    name: "Silk Cotton Casual Kurta",
    category: "short-kurtas",
    categoryLabel: "Short Kurtas",
    price: 2990,
    description:
      "A relaxed short kurta in silk cotton with hand-painted abstract motifs. Art you can wear.",
    longDescription:
      "Where painting meets fabric — this kurta features hand-painted abstract motifs inspired by tribal art. Each piece is one-of-a-kind. The silk cotton blend ensures comfort with a subtle lustrous quality that elevates casual dressing to an art form.",
    fabric: "Silk Cotton",
    fabricDetails:
      "60% silk, 40% cotton blend. Hand-painted motifs using azo-free dyes. Each piece is unique.",
    careInstructions:
      "Hand wash in cold water separately. Avoid soaking. Dry in shade.",
    shippingInfo:
      "Ships within 5-7 business days. Free shipping across India.",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80",
    ],
    tags: ["kurta", "silk-cotton", "hand-painted", "art"],
    isNew: true,
    inStock: true,
  },
  {
    id: "7",
    slug: "geometric-printed-linen-shirt",
    name: "Geometric Printed Linen Shirt",
    category: "printed-shirts",
    categoryLabel: "Printed Shirts",
    price: 2790,
    description:
      "Clean geometric prints on breathable linen. Structured yet effortless.",
    longDescription:
      "Inspired by Bauhaus geometry and Indian textile traditions, this shirt merges both worlds with precision. Screen-printed on breathable linen in earthy tones, it transitions seamlessly from office to evening, from the mundane to the memorable.",
    fabric: "Linen",
    fabricDetails:
      "100% Belgian linen, 180 GSM. Screen-printed with water-based inks.",
    careInstructions:
      "Machine wash cold, gentle cycle. Line dry. Iron while slightly damp.",
    shippingInfo:
      "Ships within 3-5 business days. Free shipping across India on orders above ₹2000.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
      "https://images.unsplash.com/photo-1563630423918-b58f07336ac9?w=800&q=80",
    ],
    tags: ["printed", "linen", "geometric"],
    inStock: true,
  },
  {
    id: "8",
    slug: "khadi-embroidered-long-kurta",
    name: "Khadi Hand-Embroidered Long Kurta",
    category: "long-kurtas",
    categoryLabel: "Long Kurtas",
    price: 5490,
    description:
      "A long kurta in handspun khadi adorned with intricate phulkari embroidery on the yoke. Heritage in every stitch.",
    longDescription:
      "Phulkari — the art of floral embroidery from Punjab — meets khadi from Gujarat in this long kurta. The yoke features dense floral embroidery in jewel tones that stands in beautiful contrast to the natural khadi ground. A piece to be treasured and passed down.",
    fabric: "Khadi",
    fabricDetails:
      "100% handspun khadi. Phulkari embroidery with silk floss. Hand-stitched yoke. Each piece takes 8-10 hours to complete.",
    careInstructions:
      "Dry clean recommended. If hand washing, use cool water and mild soap. Handle embroidery with care.",
    shippingInfo:
      "Ships within 10-14 business days (handmade). Free shipping across India.",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4b4628?w=800&q=80",
      "https://images.unsplash.com/photo-1510427431118-28e4aeb6f39e?w=800&q=80",
    ],
    tags: ["kurta", "khadi", "phulkari", "embroidery", "long", "festive"],
    isBestseller: true,
    inStock: true,
  },
];

export const categories = [
  {
    id: "formal-shirts",
    label: "Formal Shirts",
    description: "Refined silhouettes for the modern professional",
    image:
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=600&q=80",
    count: products.filter((p) => p.category === "formal-shirts").length,
  },
  {
    id: "printed-shirts",
    label: "Printed Shirts",
    description: "Artisan prints that tell stories",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    count: products.filter((p) => p.category === "printed-shirts").length,
  },
  {
    id: "short-kurtas",
    label: "Short Kurtas",
    description: "Timeless ease, modern sensibility",
    image:
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600&q=80",
    count: products.filter((p) => p.category === "short-kurtas").length,
  },
  {
    id: "long-kurtas",
    label: "Long Kurtas",
    description: "Occasion wear crafted for permanence",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    count: products.filter((p) => p.category === "long-kurtas").length,
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Arjun Mehta",
    location: "Mumbai",
    rating: 5,
    text: "The handloom cotton shirt I ordered exceeded every expectation. The quality is extraordinary — you can feel the difference from the first touch. I've received more compliments on this one shirt than anything else I own.",
    product: "Handloom Cotton Formal Shirt",
  },
  {
    id: "2",
    name: "Priya Sharma",
    location: "Bangalore",
    rating: 5,
    text: "I customised a kurta for my brother's wedding and the team was incredibly attentive. The measurements were perfect, the fabric choice was guided beautifully, and the final piece looked like something from a couture collection.",
    product: "Custom Kurta",
  },
  {
    id: "3",
    name: "Rahul Krishnamurthy",
    location: "Chennai",
    rating: 5,
    text: "What Bhuvan Reweaves does is rare — they make you feel like the garment was made specifically for you, because it was. The Chanderi kurta I received is a masterpiece. Worth every rupee.",
    product: "Chanderi Embroidered Long Kurta",
  },
  {
    id: "4",
    name: "Ananya Iyer",
    location: "Delhi",
    rating: 5,
    text: "I was hesitant about ordering online without trying, but the size guide and their customer support made it seamless. The indigo linen shirt is my most-worn piece now. The block prints are stunning.",
    product: "Indigo Linen Block Print Shirt",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(
  category: ProductCategory
): Product[] {
  return products.filter((p) => p.category === category);
}

export function getNewArrivals(limit = 4): Product[] {
  return products.filter((p) => p.isNew).slice(0, limit);
}

export function getBestsellers(limit = 4): Product[] {
  return products.filter((p) => p.isBestseller).slice(0, limit);
}

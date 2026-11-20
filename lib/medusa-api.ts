import type { Product, ProductCategory, Fabric, Size } from "@/data/products";
import {
  MEDUSA_BACKEND_URL,
  MEDUSA_PUBLISHABLE_KEY,
  MEDUSA_REGION_ID,
} from "@/lib/medusa-config";

const BACKEND_URL = MEDUSA_BACKEND_URL;
const PUB_KEY = MEDUSA_PUBLISHABLE_KEY;

// region_id makes Medusa return each variant's price in that region (INR)
const FIELDS =
  `region_id=${MEDUSA_REGION_ID}&fields=%2Bvariants.calculated_price,%2Bvariants.options,%2Bvariants.options.option,%2Bimages,%2Btags,%2Bmetadata,%2Bvariants.inventory_quantity`;

async function medusaFetch(path: string) {
  const res = await fetch(`${BACKEND_URL}${path}`, {
    headers: {
      "x-publishable-api-key": PUB_KEY,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error(`Medusa API error: ${res.status}`);
  return res.json();
}

function mapMedusaProduct(p: any): Product {
  const meta = p.metadata || {};

  // Lowest size price, in rupees (Medusa stores ₹2,949 as 2949)
  const variantPrices: number[] = (p.variants || [])
    .map((v: any) => v.calculated_price?.calculated_amount)
    .filter((amount: unknown): amount is number => typeof amount === "number");
  const price = variantPrices.length ? Math.min(...variantPrices) : 0;

  const sizes: Size[] = (p.variants || [])
    .map((v: any) => {
      const opt = v.options?.find(
        (o: any) =>
          o.option?.title?.toLowerCase() === "size" ||
          o.option_value?.toLowerCase() !== undefined
      );
      return (opt?.value || v.title) as Size;
    })
    .filter(Boolean);

  const images: string[] = [];
  if (p.thumbnail) images.push(p.thumbnail);
  (p.images || []).forEach((img: any) => {
    if (img.url && !images.includes(img.url)) images.push(img.url);
  });

  const tags: string[] = (p.tags || []).map((t: any) => t.value as string);

  const category = (meta.category || tags[0] || "silk-saree-shirts") as ProductCategory;

  return {
    id: p.id,
    slug: p.handle,
    name: p.title,
    category,
    price,
    originalPrice: meta.original_price ? Number(meta.original_price) : undefined,
    description: p.description || "",
    fabric: (meta.fabric || "Cotton") as Fabric,
    careInstructions:
      meta.care_instructions || "Dry clean recommended.",
    shippingInfo:
      meta.shipping_info || "Ships in 10–14 business days. Free shipping above ₹2,000.",
    sizes: sizes.length > 0 ? sizes : ["S", "M", "L", "XL"],
    images,
    isNew: meta.is_new === "true",
    isBestseller: meta.is_bestseller === "true",
  };
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    const data = await medusaFetch(`/store/products?${FIELDS}`);
    return (data.products || []).map(mapMedusaProduct);
  } catch (e) {
    console.error("fetchProducts error:", e);
    return [];
  }
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  try {
    const data = await medusaFetch(
      `/store/products?handle=${slug}&${FIELDS}`
    );
    if (!data.products?.length) return null;
    return mapMedusaProduct(data.products[0]);
  } catch (e) {
    console.error("fetchProductBySlug error:", e);
    return null;
  }
}

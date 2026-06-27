import type { Product, ProductCategory, Fabric, Size } from "@/data/products";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000";
const PUB_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "";

const FIELDS =
  "fields=%2Bvariants.prices,%2Bvariants.options,%2Bvariants.options.option,%2Bimages,%2Btags,%2Bmetadata,%2Bvariants.inventory_quantity";

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

  const firstVariant = p.variants?.[0];
  const price = firstVariant?.prices?.[0]?.amount ?? 0;

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

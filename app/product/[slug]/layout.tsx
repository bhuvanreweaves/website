import type { Metadata } from "next";
import { fetchProductBySlug } from "@/lib/medusa-api";

// Re-check the product name/description in Medusa at most every 5 minutes
export const revalidate = 300;

// Tab title, Google result and share preview use the product's own details,
// e.g. "KURINJI | Bhuvan Reweaves"
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);
  if (!product) return { title: "Shirt" };

  const description =
    product.description.replace(/\s+/g, " ").trim().slice(0, 160) ||
    `${product.name} — handcrafted from a ${product.fabric} saree.`;
  const image = product.images[0];

  return {
    title: product.name,
    description,
    openGraph: {
      title: `${product.name} | Bhuvan Reweaves`,
      description,
      url: `/product/${product.slug}`,
      ...(image ? { images: [{ url: image }] } : {}),
    },
  };
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return children;
}

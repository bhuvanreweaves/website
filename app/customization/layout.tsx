import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Send Your Saree — Turn It into a Shirt",
  description:
    "Send us your own saree and we will handcraft it into a shirt made to your size. Keep the memories, wear them again.",
};

export default function CustomizationLayout({ children }: { children: React.ReactNode }) {
  return children;
}

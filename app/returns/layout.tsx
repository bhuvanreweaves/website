import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation, Returns & Refund Policy",
  description:
    "No returns or exchanges on our handcrafted shirts. Cancel within 24 hours for a full refund; damaged or defective items are always made right.",
};

export default function ReturnsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

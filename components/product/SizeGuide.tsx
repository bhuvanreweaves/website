"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { Size } from "@/data/products";

// Garment measurements in inches
const SIZES: Size[] = ["S", "M", "L", "XL", "XXL"];
const MEASUREMENTS: { label: string; values: number[] }[] = [
  { label: "Chest", values: [38, 40, 42, 44, 46] },
  { label: "Shoulder", values: [17.5, 18, 18.5, 19, 19.5] },
  { label: "Length", values: [28, 29, 30, 31, 32] },
];

export function SizeGuide({ selectedSize }: { selectedSize?: Size | null }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-xs text-brown/40 hover:text-brown transition-colors underline">
          Size Guide
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-xl w-[calc(100%-2rem)] p-6 sm:p-8">
        <DialogHeader>
          <DialogTitle>Size Guide</DialogTitle>
          <DialogDescription>All measurements are in inches.</DialogDescription>
        </DialogHeader>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-brown border-collapse">
            <thead>
              <tr className="bg-warm-beige/40">
                <th className="text-left text-xs tracking-widest uppercase font-medium p-3 border border-beige" />
                {SIZES.map((size) => (
                  <th
                    key={size}
                    className={`text-center text-xs tracking-widest uppercase font-medium p-3 border border-beige ${
                      selectedSize === size ? "bg-brown text-cream" : ""
                    }`}
                  >
                    {size}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MEASUREMENTS.map((row) => (
                <tr key={row.label}>
                  <th className="text-left text-xs tracking-widest uppercase font-medium p-3 border border-beige bg-warm-beige/20">
                    {row.label}
                  </th>
                  {row.values.map((value, i) => (
                    <td
                      key={SIZES[i]}
                      className={`text-center p-3 border border-beige ${
                        selectedSize === SIZES[i] ? "bg-brown/10 font-medium" : ""
                      }`}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
}

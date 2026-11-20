"use client";

import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="flex h-10 w-10 items-center justify-center rounded-full text-cream/70 transition-colors hover:bg-cream/10 hover:text-cream"
    >
      <ChevronUp size={20} strokeWidth={1.5} />
    </button>
  );
}

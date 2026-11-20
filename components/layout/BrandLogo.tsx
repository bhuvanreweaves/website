import Image from "next/image";

/**
 * Bhuvan Reweaves logo: the BR mark (image from the brand logo) next to the
 * name set in the site's serif, matching the logo's spaced capitals.
 * The name is real text so it stays sharp and readable at small sizes.
 */
type Tone = "plum" | "cream";
type Size = "sm" | "md" | "lg";

const MARK_RATIO = 206 / 209; // height / width of /brand/br-mark.png

const SIZES: Record<Size, { mark: number; text: string; gap: string }> = {
  sm: { mark: 32, text: "text-[11px]", gap: "gap-2.5" },
  md: { mark: 40, text: "text-[12px] sm:text-[13px]", gap: "gap-3" },
  lg: { mark: 56, text: "text-[15px]", gap: "gap-4" },
};

export default function BrandLogo({
  tone = "plum",
  size = "md",
  priority = false,
}: {
  tone?: Tone;
  size?: Size;
  priority?: boolean;
}) {
  const s = SIZES[size];
  return (
    <span className={`flex items-center ${s.gap}`}>
      <Image
        src={tone === "cream" ? "/brand/br-mark-cream.png" : "/brand/br-mark.png"}
        alt=""
        width={s.mark}
        height={Math.round(s.mark * MARK_RATIO)}
        priority={priority}
      />
      <span
        className={`font-serif font-medium uppercase leading-none tracking-[0.28em] whitespace-nowrap ${s.text} ${
          tone === "cream" ? "text-cream" : "text-plum"
        }`}
      >
        Bhuvan Reweaves
      </span>
    </span>
  );
}

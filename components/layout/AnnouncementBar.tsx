/**
 * Thin bar above the header with a slowly scrolling message.
 * The text is repeated in two identical halves; the CSS animation in
 * globals.css moves the track by exactly one half, so the loop is seamless.
 * Visitors who prefer reduced motion see it standing still.
 */
const MESSAGE = "Free shipping all over India";
const REPEATS = 8; // per half: wide enough to fill very wide screens

function Half() {
  return (
    <div className="flex shrink-0">
      {Array.from({ length: REPEATS }, (_, i) => (
        <span key={i} className="flex items-center">
          <span className="px-8">{MESSAGE}</span>
          <span className="text-cream/40" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar h-8 overflow-hidden bg-brown text-cream">
      <p className="sr-only">{MESSAGE}</p>
      <div
        aria-hidden
        className="announcement-track flex h-full w-max items-center whitespace-nowrap font-sans text-[10px] uppercase tracking-[0.3em]"
      >
        <Half />
        <Half />
      </div>
    </div>
  );
}

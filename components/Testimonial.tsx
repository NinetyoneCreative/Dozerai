interface TestimonialProps {
  /** Visual tone — match the surrounding section. */
  tone?: "light" | "dark";
  compact?: boolean;
}

/**
 * Single testimonial block. The quote and attribution are PLACEHOLDER and are
 * visibly marked as such — do not present them as a real customer quote.
 * Replace with an approved customer testimonial before launch.
 */
export function Testimonial({ tone = "light", compact = false }: TestimonialProps) {
  const dark = tone === "dark";
  return (
    <figure
      className={`relative rounded-md border p-6 sm:p-8 ${
        dark
          ? "border-white/15 bg-white/5"
          : "border-medium-grey/30 bg-white"
      }`}
    >
      <span
        className={`absolute right-4 top-3 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
          dark ? "bg-white/15 text-white/80" : "bg-dozer-yellow/20 text-darker-grey"
        }`}
      >
        Placeholder
      </span>
      <blockquote
        className={`${compact ? "text-base" : "text-lg sm:text-xl"} ${
          dark ? "text-white" : "text-darker-grey"
        }`}
      >
        &ldquo;We caught a backover-in-the-making the first week — the operator
        got the in-cab alert and stopped. That alone paid for the system.&rdquo;
      </blockquote>
      <figcaption
        className={`mt-5 text-sm ${dark ? "text-dozer-white/70" : "text-dark-grey"}`}
      >
        {/* PLACEHOLDER — replace with a real, approved customer + title */}
        <span className="font-medium">[Name, Title]</span> — [Company]
        <span className="ml-2 italic text-medium-grey">(placeholder)</span>
      </figcaption>
    </figure>
  );
}

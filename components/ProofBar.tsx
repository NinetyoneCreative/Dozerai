/**
 * Social-proof logo bar. Logos are PLACEHOLDER text marks — replace with real
 * customer logos before launch (do NOT present placeholders as real customers).
 */
const PLACEHOLDER_LOGOS = [
  "Heavy Civil Co.",
  "Summit Aggregates",
  "Ironline Demolition",
  "Basin Mining",
  "Granite Grading",
];

export function ProofBar() {
  return (
    <div className="border-y border-medium-grey/30 bg-white py-8">
      <div className="mx-auto max-w-container px-5 sm:px-8">
        <p className="text-center text-xs uppercase tracking-widest text-medium-grey">
          {/* PLACEHOLDER copy — replace with real proof line before launch */}
          Trusted on jobsites across heavy-civil, aggregates &amp; mining
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {PLACEHOLDER_LOGOS.map((logo) => (
            <li
              key={logo}
              className="font-mono text-sm uppercase tracking-wide text-medium-grey/80"
              title="PLACEHOLDER logo — replace before launch"
            >
              {logo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

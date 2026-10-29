import { type CSSProperties, type ReactNode } from "react";
import { Pill, LiveDot } from "@/components/ProductOverlays";

/**
 * Small animated UI pieces stacked on the right of the product-page camera
 * GIF, one per part of the system: the cameras (blind-side watch), the AI
 * (detection), the operator (in-cab alert) and the office (dashboard). They
 * fade in one after another and stay up. Decorative only, so the whole layer
 * is aria-hidden; reduced-motion visitors get them held still.
 */

/** Fades a piece in after `delay`, then bobs it gently. */
function Float({ delay, children }: { delay: number; children: ReactNode }) {
  const chip: CSSProperties = { animationDelay: `${delay}s` };
  const bob: CSSProperties = { animationDelay: `${delay + 0.6}s` };
  return (
    <div className="hero-chip" style={chip}>
      <div className="hero-bob" style={bob}>
        {children}
      </div>
    </div>
  );
}

const CARD =
  "rounded-md border border-medium-grey/30 bg-white/95 px-3 py-2.5 shadow-[0_12px_30px_-16px_rgba(77,82,96,0.55)] backdrop-blur";

const TAGS = [
  { label: "Person", color: "bg-[#e5484d]" },
  { label: "Vehicle", color: "bg-[#3b82f6]" },
  { label: "Equipment", color: "bg-dozer-yellow" },
];

const BARS = [0.55, 0.8, 0.65, 1, 0.75, 0.9];

const liveVision = (
  // Right-aligned and kept on one line: in the stack it runs a little past the cards on the left.
  <span className="flex justify-end whitespace-nowrap">
    <Pill>
      <LiveDot /> Live · Watching the blind side
    </Pill>
  </span>
);

export function ProductHeroOverlays() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {/* Phones: just the live pill, so the small GIF stays visible */}
      <div className="absolute left-[3%] top-[4%] sm:hidden">
        <Float delay={0.3}>{liveVision}</Float>
      </div>

      {/* Tablet and up: the whole system, stacked down the right side */}
      <div className="absolute right-0 top-1/2 hidden w-48 -translate-y-1/2 flex-col gap-2 sm:flex">
        {/* Cameras: always-on blind-side watch */}
        <Float delay={0.3}>{liveVision}</Float>

        {/* AI: what it's classifying, one tag brightening at a time */}
        <Float delay={0.6}>
          <div className={CARD}>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-medium-grey">
              AI detecting
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {TAGS.map((t, i) => (
                <span
                  key={t.label}
                  className="hero-highlight inline-flex items-center gap-1 rounded-full bg-dozer-white px-2 py-0.5 text-[0.68rem] font-semibold text-darker-grey"
                  style={{ animationDelay: `${i}s` }}
                >
                  <span className={`h-1.5 w-1.5 rounded-sm ${t.color}`} />
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </Float>

        {/* Operator: the in-cab warning */}
        <Float delay={0.9}>
          <div className="flex items-center gap-2 rounded-md bg-[#e5484d] px-3 py-2 text-white shadow-[0_12px_30px_-12px_rgba(229,72,77,0.75)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
              <path d="M12 3 2 20h20L12 3Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M12 10v4M12 17h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <div className="leading-tight">
              <p className="text-[0.72rem] font-bold">Truck in blind spot</p>
              <p className="text-[0.62rem] text-white/85">In-cab alert</p>
            </div>
            <span className="ml-auto">
              <LiveDot color="bg-white" />
            </span>
          </div>
        </Float>

        {/* Office: activity rolling up into the dashboard */}
        <Float delay={1.2}>
          <div className={CARD}>
            <div className="flex items-center justify-between">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-medium-grey">
                Site dashboard
              </p>
              <LiveDot />
            </div>
            <div className="mt-2 flex h-8 items-end gap-1">
              {BARS.map((h, i) => (
                <span
                  key={i}
                  className="hero-bar flex-1 rounded-sm bg-dozer-yellow"
                  style={{ height: `${h * 100}%`, animationDelay: `${i * 0.25}s` }}
                />
              ))}
            </div>
            <p className="mt-1.5 text-[0.62rem] text-dark-grey">Utilization today</p>
          </div>
        </Float>
      </div>
    </div>
  );
}

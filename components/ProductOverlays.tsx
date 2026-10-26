import { type ReactNode } from "react";

/**
 * Small UI pieces rebuilt in HTML and layered over product images and
 * recordings (home page rows, product page visuals). Purely decorative, so
 * each is aria-hidden; the image or recording underneath carries the alt text.
 */

/** Status pill. */
export function Pill({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm ${
        tone === "dark"
          ? "bg-darker-grey/90 text-white backdrop-blur"
          : "border border-medium-grey/30 bg-white/95 text-darker-grey backdrop-blur"
      }`}
    >
      {children}
    </span>
  );
}

/** Pulsing "live" dot. */
export function LiveDot({ color = "bg-[#2fbf71]" }: { color?: string }) {
  return (
    <span className="relative flex h-2 w-2" aria-hidden="true">
      <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 motion-reduce:hidden ${color}`} />
      <span className={`relative inline-flex h-2 w-2 rounded-full ${color}`} />
    </span>
  );
}

/**
 * Proximity-zone readout. Sits under the media on phones and floats over its
 * bottom-right corner from `sm` up (the parent needs `relative`).
 */
export function ProximityCard({ label = "Person" }: { label?: string }) {
  return (
    <div
      className="m-3 mt-0 rounded-md border border-medium-grey/30 bg-white/95 p-4 shadow-[0_16px_40px_-20px_rgba(77,82,96,0.5)] backdrop-blur sm:absolute sm:bottom-4 sm:right-4 sm:m-0 sm:w-64"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between text-xs font-semibold text-darker-grey">
        <span>Proximity zone</span>
        <span className="rounded bg-[#ff8a1f]/15 px-1.5 py-0.5 text-[#c25e00]">{label}</span>
      </div>
      <div className="mt-3 flex h-2 overflow-hidden rounded-full">
        <span className="flex-1 bg-dozer-yellow" />
        <span className="flex-1 bg-[#ff8a1f]" />
        <span className="flex-1 bg-[#e5484d]" />
      </div>
      <div className="mt-1.5 flex justify-between font-mono text-[0.65rem] uppercase tracking-wider text-medium-grey">
        <span>Caution</span>
        <span>Warning</span>
        <span>Stop</span>
      </div>
    </div>
  );
}

/** Red in-cab alert banner, centred over the bottom edge of its parent (needs `relative`). */
export function AlertBanner({ title, detail }: { title: string; detail: string }) {
  return (
    <div
      className="absolute -bottom-5 left-1/2 flex w-[88%] max-w-sm -translate-x-1/2 items-center gap-3 rounded-md bg-[#e5484d] px-4 py-3 text-white shadow-[0_16px_40px_-16px_rgba(229,72,77,0.8)]"
      aria-hidden="true"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path d="M12 3 2 20h20L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 10v4M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <div className="min-w-0">
        <p className="text-sm font-bold leading-tight">{title}</p>
        <p className="text-xs text-white/85">{detail}</p>
      </div>
      <span className="ml-auto">
        <LiveDot color="bg-white" />
      </span>
    </div>
  );
}

/** White floating card with an icon, a title, a subtitle and optional tags. */
export function FloatCard({
  icon,
  title,
  detail,
  tags,
  className = "",
}: {
  icon: ReactNode;
  title: string;
  detail: string;
  tags?: string[];
  className?: string;
}) {
  return (
    <div
      className={`w-60 rounded-md border border-medium-grey/30 bg-white p-4 shadow-[0_20px_50px_-20px_rgba(77,82,96,0.55)] ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-dozer-yellow/20 text-darker-grey">
          {icon}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-bold leading-tight text-darker-grey">{title}</p>
          <p className="text-xs text-dark-grey">{detail}</p>
        </div>
      </div>
      {tags && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-dozer-white px-2 py-0.5 text-[0.7rem] text-dark-grey">
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export const PlayIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7L8 5Z" />
  </svg>
);

export const CheckIcon = (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
    <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 0 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z" />
  </svg>
);

/** Colour-keyed legend of what detection is boxing (person / vehicle / equipment). */
export function DetectionLegend() {
  const items = [
    { label: "Person", color: "bg-[#e5484d]" },
    { label: "Vehicle", color: "bg-[#3b82f6]" },
    { label: "Equipment", color: "bg-dozer-yellow" },
  ];
  return (
    <div className="flex flex-wrap items-center gap-2" aria-hidden="true">
      <Pill tone="dark">
        <LiveDot /> Detecting
      </Pill>
      {/* Category key only from sm up; on phones it would cover the footage */}
      {items.map((i) => (
        <span key={i.label} className="hidden sm:inline-flex">
          <Pill>
            <span className={`h-2 w-2 rounded-sm ${i.color}`} />
            {i.label}
          </Pill>
        </span>
      ))}
    </div>
  );
}

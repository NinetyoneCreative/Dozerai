import { TABLET_VIEW, APP_TOUR } from "@/lib/appTour";

/**
 * Product visuals for the home page's field / cab / office rows. Each one is a
 * real product image (camera unit, tablet recording, app recording) with a
 * few UI elements rebuilt in HTML on top, so the rows read as "the product"
 * rather than stock jobsite photos.
 */

/** Small status pill used across the overlays. */
function Pill({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
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

function LiveDot({ color = "bg-[#2fbf71]" }: { color?: string }) {
  return (
    <span className="relative flex h-2 w-2" aria-hidden="true">
      <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 motion-reduce:hidden ${color}`} />
      <span className={`relative inline-flex h-2 w-2 rounded-full ${color}`} />
    </span>
  );
}

/** In the field: the camera unit, with a proximity-zone readout. */
export function FieldVisual() {
  return (
    <figure className="relative overflow-hidden rounded-md border border-medium-grey/30 bg-[#fefefe]">
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, pre-sized */}
      <img
        src="/product-camera/camera-housing.jpg"
        alt="The Dozer camera unit in its rugged housing, ready to mount on a machine."
        width={1024}
        height={768}
        loading="lazy"
        className="block h-auto w-full"
      />
      <div className="absolute left-4 top-4">
        <Pill>
          <LiveDot /> Watching 360°
        </Pill>
      </div>

      {/* Proximity zone card */}
      <div
        className="m-3 mt-0 rounded-md border border-medium-grey/30 bg-white/95 p-4 shadow-[0_16px_40px_-20px_rgba(77,82,96,0.5)] backdrop-blur sm:absolute sm:bottom-4 sm:right-4 sm:m-0 sm:w-64"
        aria-hidden="true"
      >
        <div className="flex items-center justify-between text-xs font-semibold text-darker-grey">
          <span>Proximity zone</span>
          <span className="rounded bg-[#ff8a1f]/15 px-1.5 py-0.5 text-[#c25e00]">Person</span>
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
    </figure>
  );
}

/** In the cab: the operator tablet recording, with an alert banner. */
export function CabVisual() {
  return (
    <figure className="relative">
      <div className="rounded-[1.5rem] border border-black/10 bg-[#16171b] p-2.5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] sm:p-3">
        <div className="overflow-hidden rounded-[0.9rem] bg-black">
          <picture>
            <source media="(prefers-reduced-motion: reduce)" srcSet={TABLET_VIEW.still} />
            {/* eslint-disable-next-line @next/next/no-img-element -- animated GIF, served as-is */}
            <img
              src={TABLET_VIEW.gif}
              alt={TABLET_VIEW.alt}
              width={800}
              height={480}
              loading="lazy"
              className="block h-auto w-full"
            />
          </picture>
        </div>
      </div>

      {/* Alert banner, the way it pops up for the operator */}
      <div
        className="absolute -bottom-5 left-1/2 flex w-[88%] max-w-sm -translate-x-1/2 items-center gap-3 rounded-md bg-[#e5484d] px-4 py-3 text-white shadow-[0_16px_40px_-16px_rgba(229,72,77,0.8)]"
        aria-hidden="true"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M12 3 2 20h20L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 10v4M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <div className="min-w-0">
          <p className="text-sm font-bold leading-tight">Person in blind spot</p>
          <p className="text-xs text-white/85">Rear camera · stop zone</p>
        </div>
        <span className="ml-auto">
          <LiveDot color="bg-white" />
        </span>
      </div>
    </figure>
  );
}

/** In the office: the desktop app recording, with a safety-event card. */
export function OfficeVisual() {
  const view = APP_TOUR.find((s) => s.id === "events")?.views[0] ?? APP_TOUR[0].views[0];
  return (
    <figure className="relative">
      <div className="overflow-hidden rounded-md border border-medium-grey/40 bg-white shadow-[0_24px_60px_-24px_rgba(77,82,96,0.35)]">
        <div className="flex items-center gap-1.5 border-b border-medium-grey/30 bg-dozer-white px-3 py-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-medium-grey/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-medium-grey/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-medium-grey/50" />
          <span className="ml-2 font-mono text-[0.7rem] text-medium-grey">Dozer · Events</span>
        </div>
        <picture>
          <source media="(prefers-reduced-motion: reduce)" srcSet={view.still} />
          {/* eslint-disable-next-line @next/next/no-img-element -- animated GIF, served as-is */}
          <img
            src={view.gif}
            alt={view.alt}
            width={1000}
            height={496}
            loading="lazy"
            className="block h-auto w-full"
          />
        </picture>
      </div>

      {/* Floating event card */}
      <div
        className="absolute -bottom-6 -left-3 hidden w-60 rounded-md border border-medium-grey/30 bg-white p-4 shadow-[0_20px_50px_-20px_rgba(77,82,96,0.55)] sm:block"
        aria-hidden="true"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded bg-dozer-yellow/20 text-darker-grey">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7L8 5Z" />
            </svg>
          </span>
          <div>
            <p className="text-sm font-bold leading-tight text-darker-grey">Safety event</p>
            <p className="text-xs text-dark-grey">Proximity · clip saved</p>
          </div>
        </div>
        <div className="mt-3 flex gap-1.5">
          <span className="rounded-full bg-dozer-white px-2 py-0.5 text-[0.7rem] text-dark-grey">Machine</span>
          <span className="rounded-full bg-dozer-white px-2 py-0.5 text-[0.7rem] text-dark-grey">Map area</span>
          <span className="rounded-full bg-dozer-white px-2 py-0.5 text-[0.7rem] text-dark-grey">History</span>
        </div>
      </div>
    </figure>
  );
}

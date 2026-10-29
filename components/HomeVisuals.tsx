import { TABLET_VIEW, APP_TOUR } from "@/lib/appTour";
import { Pill, LiveDot, ProximityCard, AlertBanner, FloatCard, PlayIcon } from "@/components/ProductOverlays";

/**
 * Product visuals for the home page's field / cab / office rows. Each one is a
 * real product image (camera unit, tablet recording, app recording) with a
 * few UI elements rebuilt in HTML on top, so the rows read as "the product"
 * rather than stock jobsite photos.
 */

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
          <LiveDot /> Watching the blind side
        </Pill>
      </div>

      <ProximityCard />
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

      <AlertBanner title="Truck in blind spot" detail="Rear camera · stop zone" />
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
      <FloatCard
        icon={PlayIcon}
        title="Safety event"
        detail="Proximity · clip saved"
        tags={["Machine", "Map area", "History"]}
        className="absolute -bottom-6 -left-3 hidden sm:block"
      />
    </figure>
  );
}

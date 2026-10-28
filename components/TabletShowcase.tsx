import { TABLET_VIEW } from "@/lib/appTour";
import { AlertBanner } from "@/components/ProductOverlays";

/**
 * The in-cab operator tablet, shown in a simple device frame. The GIF is a
 * highlight from a real tablet recording; reduced-motion visitors get a still.
 * A rebuilt alert banner shows how a warning pops up for the operator.
 */
export function TabletShowcase() {
  return (
    <figure className="relative mx-auto mb-5 w-full max-w-3xl">
      <div className="rounded-[1.75rem] border border-white/10 bg-[#16171b] p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] sm:p-4">
        <div className="overflow-hidden rounded-[1rem] bg-black">
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

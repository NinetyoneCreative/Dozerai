import Link from "next/link";
import { PILOT } from "@/content/home";

/**
 * Full-bleed yellow pilot band with dark text and a dark CTA to /pilot.
 * No price, ever. Reused across pages.
 */
export function PilotBand() {
  return (
    <section className="bg-dozer-yellow text-black" aria-labelledby="pilot-heading">
      <div className="mx-auto flex max-w-container flex-col items-start gap-6 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 id="pilot-heading" className="text-3xl font-bold sm:text-4xl">
            {PILOT.headline}
          </h2>
          <p className="mt-3 text-lg text-black/80">{PILOT.line}</p>
        </div>
        <Link
          href="/pilot"
          className="inline-flex shrink-0 items-center justify-center rounded-md bg-black px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-black/85"
        >
          See how the pilot works
        </Link>
      </div>
    </section>
  );
}

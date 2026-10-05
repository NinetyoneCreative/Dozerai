import { CtaLink } from "@/components/CtaLink";
import { AssetSlot } from "@/components/AssetSlot";
import { ASSETS } from "@/content/assets";

/**
 * Homepage hero on --surface-deep, full viewport minus the nav. The hero pulls
 * itself up under the sticky transparent header (-mt-20) so the bar overlays
 * the dark background, then pads its content back down (pt-28) to clear it.
 *
 * Left: mono eyebrow, H1, both-suites subhead, primary + ghost CTAs.
 * Right: the in-cab detection clip (hero-incab, video slot), with the camera
 * unit (hero-hardware) overlapping its bottom-left corner.
 */
export function HomeHero() {
  return (
    <section
      className="relative -mt-20 overflow-hidden bg-surface-deep"
      aria-labelledby="hero-heading"
    >
      {/* subtle depth: a soft radial from the top-right, no photography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 60% at 78% 18%, rgba(253,172,19,0.10), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid min-h-screen max-w-container items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* Left: copy */}
        <div>
          <p className="kicker">ON-MACHINE PERCEPTION</p>
          <h1
            id="hero-heading"
            className="mt-5 text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
          >
            See everything moving around your machines.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            Dozer AI mounts rugged cameras and depth sensors on your heavy
            equipment to warn operators of people in the blind spot and turn the
            same footage into cost codes, cycle times, and utilization for the
            office.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <CtaLink href="/demo" variant="primary" trackId="hero_walkthrough">
              Book a walkthrough
            </CtaLink>
            <CtaLink href="#how-it-works" variant="dark" trackId="hero_how_it_works">
              See how it works
            </CtaLink>
          </div>
        </div>

        {/* Right: in-cab clip + overlapping camera unit */}
        <div className="relative">
          <div className="overflow-hidden rounded-md border border-white/10 bg-black">
            <AssetSlot {...ASSETS.heroIncab} priority className="object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 sm:w-40">
            <div className="overflow-hidden rounded-md border border-white/15 bg-surface-dark shadow-lg">
              <AssetSlot {...ASSETS.heroHardware} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

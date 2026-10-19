import Image from "next/image";
import { CtaLink } from "@/components/CtaLink";

/**
 * Full-bleed homepage hero: the jobsite photo (public/hero.jpg) edge-to-edge
 * with a left-anchored dark gradient for text legibility, headline, subhead,
 * and dual CTAs. Motive-style scale, Dozer brand.
 */
export function HomeHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-black" aria-labelledby="hero-heading">
      <Image
        src="/hero.jpg"
        alt="A jobsite at golden hour: a foreman with a tablet beside an excavator, with a Dozer camera unit mounted on the machine in the foreground"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Legibility overlay: darker on the left where the copy sits */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[82vh] max-w-container flex-col justify-center px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="kicker">Safety + productivity, one system</p>
          <h1
            id="hero-heading"
            className="mt-5 text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
          >
            See everything on your job site. Keep every crew safer and more
            productive.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Dozer mounts AI cameras and sensors on your heavy equipment to watch
            the whole work area, warn your crews in real time, and turn every
            shift into data you can act on, from the field to the cab to the
            office.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <CtaLink href="/demo" variant="primary" trackId="home_hero_demo">
              Request a demo
            </CtaLink>
            <CtaLink href="/product" variant="dark" trackId="home_hero_product">
              See the product
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}

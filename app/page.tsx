import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CtaLink } from "@/components/CtaLink";
import { SafeVideo } from "@/components/SafeVideo";
import { ProofBar } from "@/components/ProofBar";
import { OutcomesSection } from "@/components/OutcomesSection";
import { UseCaseGrid } from "@/components/UseCaseGrid";
import { PricingBlock } from "@/components/PricingBlock";
import { Testimonial } from "@/components/Testimonial";
import { CtaBand } from "@/components/CtaBand";
import { buildMetadata } from "@/lib/seo";
import { ASSETS } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Excavator Blind-Spot & Backup Cameras for Heavy Equipment",
  description:
    "Dozer.ai mounts AI depth-sensing cameras on excavators, dozers, loaders, and haul trucks for real-time blind-spot alerts, proximity detection, and backover prevention on the jobsite.",
  path: "/",
});

const PRODUCTS = [
  {
    href: "/cameras",
    name: "Cameras",
    blurb:
      "Durable, IP-rated cameras with 360° vision and proximity measurement, mounted right on the machine.",
  },
  {
    href: "/intelligence",
    name: "Intelligence",
    blurb:
      "AI that classifies people and vehicles, alerts operators in-cab, and records every safety event.",
  },
  {
    href: "/dashboards",
    name: "Dashboards",
    blurb:
      "Review footage, safety events, and productivity by machine and map area across your whole fleet.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — with the conversion-path near-miss reel */}
      <Section tone="light" spacing="lg" aria-labelledby="hero-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="kicker">Heavy equipment safety cameras</p>
            <h1
              id="hero-heading"
              className="mt-4 text-4xl font-bold leading-[1.1] text-darker-grey sm:text-5xl"
            >
              AI blind-spot cameras that prevent backovers on heavy equipment
            </h1>
            <p className="mt-5 max-w-xl text-lg text-dark-grey">
              Dozer mounts depth-sensing cameras and sensors directly on
              excavators, dozers, wheel loaders, and haul trucks — giving every
              operator a 360° virtual spotter, real-time proximity alerts, and a
              recorded view of everything around the machine.
            </p>

            {/* Conversion ladder: primary intro, secondary watch demo, tertiary pricing */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CtaLink href="/demo" variant="primary" trackId="home_hero_intro">
                Book a 15-min intro
              </CtaLink>
              <CtaLink href="#near-miss" variant="secondary" trackId="home_hero_watch">
                ▶ Watch a 90-sec demo
              </CtaLink>
              <CtaLink href="/demo#pricing" variant="ghost" trackId="home_hero_pricing">
                Get pricing
              </CtaLink>
            </div>
            <p className="mt-4 text-sm text-medium-grey">
              Pilot one machine · Free install · No long-term contract
            </p>
          </div>

          {/* Near-miss reel — likely the highest-converting element */}
          <div id="near-miss" className="scroll-mt-28">
            <div className="overflow-hidden rounded-md border border-medium-grey/30 bg-black shadow-sm">
              <SafeVideo
                src={ASSETS.importantObjectsVideo}
                label="Near-miss reel: a Dozer in-cab alert flags a worker in the blind spot before an incident."
                trackId="home_near_miss"
                ambient
                className="aspect-video w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center text-sm text-dark-grey">
              Real computer-vision detection — this alert flags a high-risk object
              in the blind spot before it becomes an incident.
            </p>
          </div>
        </div>
      </Section>

      <ProofBar />

      {/* Product overview */}
      <Section tone="light" spacing="lg" aria-labelledby="products-heading">
        <div className="max-w-3xl">
          <p className="kicker">The system</p>
          <h2 id="products-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Cameras, intelligence, and dashboards — working as one
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PRODUCTS.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex flex-col rounded-md border border-medium-grey/30 bg-white p-6 transition-colors hover:border-dozer-yellow"
            >
              <h3 className="text-xl font-medium text-darker-grey">{p.name}</h3>
              <p className="mt-2 flex-1 text-dark-grey">{p.blurb}</p>
              <span className="mt-4 text-sm font-medium text-dark-grey group-hover:text-darker-grey">
                Explore {p.name} →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <OutcomesSection />

      <UseCaseGrid />

      <PricingBlock />

      {/* Testimonial */}
      <Section tone="light" spacing="lg" aria-labelledby="proof-heading">
        <div className="mx-auto max-w-3xl">
          <h2 id="proof-heading" className="sr-only">
            What customers say
          </h2>
          <Testimonial />
        </div>
      </Section>

      <CtaBand location="home" />
    </>
  );
}

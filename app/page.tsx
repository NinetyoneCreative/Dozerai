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
import { StatusBadge } from "@/components/StatusBadge";
import { buildMetadata } from "@/lib/seo";
import { ASSETS } from "@/lib/site";
import { SAFETY_SUITE, PRODUCTIVITY_SUITE } from "@/lib/suites";

export const metadata: Metadata = buildMetadata({
  title: "Excavator Blind-Spot & Backup Cameras for Heavy Equipment",
  description:
    "Dozer.ai mounts AI depth-sensing cameras on excavators, dozers, loaders, and haul trucks for real-time blind-spot alerts, proximity detection, and backover prevention on the jobsite.",
  path: "/",
});

/** The two product suites, surfaced prominently on the home page. */
const SUITE_CARDS = [
  {
    suite: SAFETY_SUITE,
    href: "/safety",
    blurb:
      "Production-ready today. Real-time object detection, exclusion-zone proximity monitoring, PPE compliance, and in-cab driver alerts — with a supervisor dashboard for every event.",
  },
  {
    suite: PRODUCTIVITY_SUITE,
    href: "/productivity",
    blurb:
      "Coming soon. Job-cost allocation, fleet utilization analytics, AI jobsite reports, activity heat maps, and ERP integrations — built on the same cameras.",
  },
];

/** The platform layers both suites sit on. */
const FOUNDATION = [
  {
    href: "/cameras",
    name: "Cameras",
    blurb: "Durable, IP-rated 360° depth-sensing cameras mounted right on the machine.",
  },
  {
    href: "/dashboards",
    name: "Dashboards",
    blurb: "One place to review footage, events, and analytics by machine and map area.",
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
              excavators, dozers, wheel loaders, and haul trucks. The{" "}
              <span className="font-medium text-darker-grey">Safety Intelligence Suite</span>{" "}
              is production-ready today — and the{" "}
              <span className="font-medium text-darker-grey">Productivity &amp; Analytics Suite</span>{" "}
              turns the same cameras into job-cost and fleet insight, arriving in 60–90 days.
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

      {/* Platform: one platform, two suites */}
      <Section tone="light" spacing="lg" aria-labelledby="platform-heading">
        <div className="max-w-3xl">
          <p className="kicker">The platform</p>
          <h2 id="platform-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            One platform. Two suites.
          </h2>
          <p className="mt-4 text-lg text-dark-grey">
            Start with safety today and grow into productivity — all from the same
            cameras on the same machines.
          </p>
        </div>

        {/* Two suites */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {SUITE_CARDS.map(({ suite, href, blurb }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col rounded-md border border-medium-grey/30 bg-white p-7 transition-colors hover:border-dozer-yellow"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-bold text-darker-grey">{suite.name}</h3>
                <StatusBadge status={suite.status} timeline={suite.timeline} />
              </div>
              <p className="mt-3 text-dark-grey">{blurb}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {suite.categories.map((c) => (
                  <li
                    key={c.key}
                    className="rounded-full border border-medium-grey/40 px-3 py-1 text-xs text-dark-grey"
                  >
                    {c.name}
                  </li>
                ))}
              </ul>
              <span className="mt-6 text-sm font-medium text-dark-grey group-hover:text-darker-grey">
                {suite.status === "available"
                  ? `Explore ${suite.shortName} →`
                  : `See what's coming →`}
              </span>
            </Link>
          ))}
        </div>

        {/* Foundation: cameras + dashboards */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {FOUNDATION.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group flex items-center justify-between gap-4 rounded-md border border-medium-grey/30 bg-dozer-white p-5 transition-colors hover:border-dozer-yellow"
            >
              <div>
                <h3 className="font-medium text-darker-grey">{f.name}</h3>
                <p className="mt-0.5 text-sm text-dark-grey">{f.blurb}</p>
              </div>
              <span className="shrink-0 text-dark-grey group-hover:text-darker-grey" aria-hidden="true">
                →
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

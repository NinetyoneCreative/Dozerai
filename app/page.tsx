import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CtaLink } from "@/components/CtaLink";
import { SafeVideo } from "@/components/SafeVideo";
import { ProofBar } from "@/components/ProofBar";
import { UseCaseGrid } from "@/components/UseCaseGrid";
import { PricingBlock } from "@/components/PricingBlock";
import { Testimonial } from "@/components/Testimonial";
import { CtaBand } from "@/components/CtaBand";
import { SuiteIcon } from "@/components/SuiteIcon";
import { buildMetadata } from "@/lib/seo";
import { ASSETS } from "@/lib/site";
import { SAFETY_SUITE, PRODUCTIVITY_SUITE } from "@/lib/suites";

export const metadata: Metadata = buildMetadata({
  title: "AI Perceptual Intelligence for Heavy Job Sites",
  description:
    "Dozer is an AI perceptual intelligence system for heavy job sites. Cameras and sensors on your equipment detect people, measure proximity, and turn messy, busy sites into safer, more productive operations.",
  path: "/",
});

/** Complex environments Dozer is built for. */
const ENVIRONMENTS = [
  "Heavy civil",
  "Underground utilities",
  "Grading & earthwork",
  "Aggregates",
  "Demolition",
  "Mining & landfill",
];

/** Plain-English "what / who / what it drives" trio. */
const CLARITY = [
  {
    label: "What it is",
    body: "An AI perceptual intelligence system — cameras and sensors on your equipment, plus the AI that understands what they see.",
  },
  {
    label: "Who it's for",
    body: "Safety directors, equipment and fleet managers, and owners running busy, equipment-heavy job sites.",
  },
  {
    label: "What it drives",
    body: "Fewer incidents, less wasted time, and a clear, shared record of what actually happens on site.",
  },
];

/**
 * Cost framing. All three stats are cited: OSHA for the two safety figures
 * (TODO before launch: link the specific OSHA fatality pages), and the
 * PlanGrid & FMI "Construction Disconnected" (2018) report for the 35%
 * non-optimal-time figure (~14 hrs/week; ~$177B/yr in labor).
 */
const COST_FRAMING = [
  {
    stat: "~1 in 5",
    label: "U.S. worker deaths happen in construction",
    source: "Source: OSHA",
  },
  {
    stat: "Struck-by",
    label: "is a leading cause of construction fatalities",
    source: "Source: OSHA Focus Four",
  },
  {
    stat: "35%",
    label: "of a construction pro's time goes to non-optimal work — rework, conflicts, and chasing information",
    source: "Source: PlanGrid & FMI, Construction Disconnected (2018)",
  },
];

/** How the system works, in three plain steps. */
const HOW_IT_WORKS = [
  {
    n: "01",
    name: "It sees",
    body: "Rugged cameras and depth sensors on every machine give a 360° view of the people, equipment, and ground around it.",
  },
  {
    n: "02",
    name: "It understands",
    body: "AI classifies workers, vehicles, and objects, measures how close they are, and maps activity across the whole site.",
  },
  {
    n: "03",
    name: "It acts",
    body: "Operators get real-time alerts in the cab. Supervisors get clear dashboards and reports to review and improve.",
  },
];

/**
 * Safety + Productivity framed as outcomes of the one product. Each links to
 * its section on the Product page, where the modules live in full.
 */
const OUTCOME_GROUPS = [
  { suite: SAFETY_SUITE, href: "/product#safety" },
  { suite: PRODUCTIVITY_SUITE, href: "/product#productivity" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — lead with AI perceptual intelligence */}
      <Section tone="light" spacing="lg" aria-labelledby="hero-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="kicker">AI perceptual intelligence</p>
            <h1
              id="hero-heading"
              className="mt-4 text-4xl font-bold leading-[1.1] text-darker-grey sm:text-5xl"
            >
              Make sense of everything moving on your job site
            </h1>
            <p className="mt-5 max-w-xl text-lg text-dark-grey">
              Dozer puts AI-powered eyes on your heavy equipment. It sees the
              people, machines, materials, and changing conditions across complex
              sites — heavy civil, underground utilities, and more — and turns that
              into a safer, more productive operation.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CtaLink href="/demo" variant="primary" trackId="home_hero_intro">
                Book a 15-min intro
              </CtaLink>
              <CtaLink href="/product" variant="secondary" trackId="home_hero_product">
                See how it works
              </CtaLink>
              <CtaLink href="/demo#pricing" variant="ghost" trackId="home_hero_pricing">
                Get pricing
              </CtaLink>
            </div>
            <p className="mt-4 text-sm text-medium-grey">
              45-day pilot · One machine · One low fee · No long-term contract
            </p>
          </div>

          {/* Live detection reel */}
          <div className="scroll-mt-28">
            <div className="overflow-hidden rounded-md border border-medium-grey/30 bg-black shadow-sm">
              <SafeVideo
                src={ASSETS.importantObjectsVideo}
                label="Dozer AI detecting people, vehicles, and objects around heavy equipment in real time."
                trackId="home_hero_reel"
                ambient
                className="aspect-video w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center text-sm text-dark-grey">
              Real perception in a messy scene — Dozer tells people apart from
              equipment and flags a hazard before it becomes an incident.
            </p>
          </div>
        </div>
      </Section>

      <ProofBar />

      {/* What Dozer is / who it's for / what it drives */}
      <Section tone="light" spacing="lg" aria-labelledby="clarity-heading">
        <div className="max-w-3xl">
          <p className="kicker">What is Dozer?</p>
          <h2 id="clarity-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Perception for sites with a lot going on
          </h2>
          <p className="mt-4 text-lg text-dark-grey">
            A busy job site is full of moving parts — people on foot, equipment
            swinging and backing, materials, and conditions that change by the hour.
            Dozer makes sense of it all so your team can act on what matters.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {CLARITY.map((c) => (
            <div key={c.label} className="rounded-md border border-medium-grey/30 bg-white p-6">
              <p className="kicker">{c.label}</p>
              <p className="mt-3 text-dark-grey">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Environments */}
        <div className="mt-8">
          <p className="text-sm font-medium text-darker-grey">Built for environments like:</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {ENVIRONMENTS.map((e) => (
              <li
                key={e}
                className="rounded-full border border-medium-grey/40 bg-white px-3 py-1 text-sm text-dark-grey"
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Cost framing — why it matters */}
      <Section tone="dark" spacing="lg" aria-labelledby="cost-heading">
        <div className="max-w-3xl">
          <p className="kicker">Why it matters</p>
          <h2 id="cost-heading" className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            The two most expensive things on a site: accidents and wasted time
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {COST_FRAMING.map((c) => (
            <div key={c.label} className="rounded-md border border-white/15 bg-white/5 p-6">
              <p className="text-3xl font-bold text-dozer-yellow">{c.stat}</p>
              <p className="mt-2 text-dozer-white/90">{c.label}</p>
              <p className="mt-3 text-xs text-dozer-white/50">{c.source}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-dozer-white/80">
          Dozer attacks both: it helps prevent the incident before it happens, and
          it shows you where time and money quietly leak out of the day.
        </p>
      </Section>

      {/* How it works — three plain steps */}
      <Section tone="white" spacing="lg" aria-labelledby="how-heading">
        <div className="max-w-3xl">
          <p className="kicker">How it works</p>
          <h2 id="how-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            It sees. It understands. It acts.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {HOW_IT_WORKS.map((s) => (
            <div key={s.n} className="rounded-md border border-medium-grey/30 bg-dozer-white p-6">
              <span className="font-mono text-sm text-dozer-yellow">{s.n}</span>
              <h3 className="mt-1 text-xl font-bold text-darker-grey">{s.name}</h3>
              <p className="mt-2 text-dark-grey">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <CtaLink href="/product" variant="secondary" trackId="home_how_product">
            See the full system →
          </CtaLink>
        </div>
      </Section>

      {/* What it delivers — modules grouped by Safety / Productivity */}
      <Section tone="light" spacing="lg" aria-labelledby="outcomes-heading">
        <div className="max-w-3xl">
          <p className="kicker">What it delivers</p>
          <h2 id="outcomes-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Safer sites. More productive days.
          </h2>
          <p className="mt-4 text-lg text-dark-grey">
            Safety and productivity aren&apos;t separate products — they&apos;re the
            modules the same system delivers once it understands your site.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {OUTCOME_GROUPS.map(({ suite, href }) => (
            <div key={suite.slug}>
              {/* Group label */}
              <div className="flex flex-wrap items-center gap-3 border-b border-medium-grey/30 pb-4">
                <h3 className="text-xl font-bold text-darker-grey">{suite.shortName}</h3>
                <Link
                  href={href}
                  className="ml-auto text-sm font-medium text-dark-grey hover:text-darker-grey"
                >
                  Explore →
                </Link>
              </div>

              {/* Module cards — one per feature category */}
              <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {suite.categories.map((cat) => (
                  <li key={cat.key}>
                    <Link
                      href={`${href.split("#")[0]}#${cat.key}`}
                      className="group flex h-full flex-col rounded-md border border-medium-grey/30 bg-white p-6 transition-colors hover:border-dozer-yellow"
                    >
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-md ${
                          suite.status === "available"
                            ? "bg-dozer-yellow/15 text-darker-grey"
                            : "bg-dozer-white text-dark-grey"
                        }`}
                      >
                        <SuiteIcon name={cat.icon} />
                      </span>
                      <h4 className="mt-4 font-bold text-darker-grey">{cat.name}</h4>
                      <ul className="mt-2 space-y-1 text-sm text-dark-grey">
                        {cat.features.map((f) => (
                          <li key={f.name}>{f.name}</li>
                        ))}
                      </ul>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

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

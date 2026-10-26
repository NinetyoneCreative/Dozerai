import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CtaLink } from "@/components/CtaLink";
import { UseCaseGrid } from "@/components/UseCaseGrid";
import { PricingBlock } from "@/components/PricingBlock";
import { CtaBand } from "@/components/CtaBand";
import { FieldVisual, CabVisual, OfficeVisual } from "@/components/HomeVisuals";
import { YouTubeLite } from "@/components/YouTubeLite";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Jobsite Safety & Productivity for Heavy Equipment",
  description:
    "Dozer mounts AI cameras and sensors on your heavy equipment to watch the whole work area, warn your crews in real time, and turn every shift into data you can act on.",
  path: "/",
});

/** The three audiences: same cameras, three jobs. Each card jumps to its row below. */
const AUDIENCES = [
  {
    id: "field",
    place: "In the field",
    who: "Foremen & spotters",
    teaser: "Live proximity alerts and 360° awareness for everyone on the ground.",
    title: "A second set of eyes on every machine",
    body: "Dozer watches the whole work area around each machine, so the people on the ground get warned before a machine ever gets too close.",
    points: [
      "Real-time proximity alerts that act as a virtual spotter",
      "360° view of the cabin, attachment, and every blind spot",
      "Exclusion-zone monitoring around active equipment",
      "PPE compliance checks on every worker in frame",
    ],
    Visual: FieldVisual,
  },
  {
    id: "cab",
    place: "In the cab",
    who: "Operators",
    teaser: "Real-time in-cab warnings before a person or hazard is in the way.",
    title: "In-cab alerts before contact, not after",
    body: "Operators get real-time audio and visual warnings the instant a person or hazard enters a blind spot, with enough time to stop.",
    points: [
      "In-cab audio and visual hazard alerts",
      "Blind-spot and proximity detection on every side",
      "AI that tells people apart from equipment and objects",
      "Fatigue and exclusion-zone violation warnings",
    ],
    Visual: CabVisual,
  },
  {
    id: "office",
    place: "In the office",
    who: "Foremen & management",
    teaser: "One dashboard for safety events, productivity, and disputes.",
    title: "The whole jobsite, on one dashboard",
    body: "Review safety events, measure how productively work gets done, and settle disputes by machine and map area, without leaving your desk.",
    points: [
      "Safety event review with clips and full incident history",
      "Job-cost allocation and equipment utilization",
      "AI jobsite and per-vehicle reports",
      "Activity heat maps and ERP / project-management integrations",
    ],
    Visual: OfficeVisual,
  },
];

/**
 * Cost framing. All three stats are cited: OSHA for the two safety figures
 * (TODO before launch: link the specific OSHA fatality pages), and the
 * PlanGrid & FMI "Construction Disconnected" (2018) report for the 35%
 * non-optimal-time figure.
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
    label: "of a construction pro's time goes to non-optimal work",
    source: "Source: PlanGrid & FMI, Construction Disconnected (2018)",
  },
];

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      className="mt-0.5 shrink-0 text-dozer-yellow"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 0 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO, full-bleed jobsite photo */}
      <section
        className="relative isolate overflow-hidden bg-black text-white"
        aria-labelledby="hero-heading"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, pre-sized hero */}
        <img
          src="/home/hero.jpg"
          alt="A jobsite at golden hour: a foreman with a tablet beside an excavator, with a Dozer camera unit mounted on the machine in the foreground"
          width={2400}
          height={1340}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/10"
          aria-hidden="true"
        />
        <div className="mx-auto w-full max-w-container px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="kicker">Safety + productivity, one system</p>
            <h1
              id="hero-heading"
              className="mt-5 text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
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

      {/* One system for the whole crew */}
      <Section tone="white" spacing="lg" aria-labelledby="crew-heading">
        <div className="max-w-3xl">
          <p className="kicker">One system for the whole crew</p>
          <h2 id="crew-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Safety and productivity from the same cameras
          </h2>
          <p className="mt-4 text-lg text-dark-grey">
            Most jobsite tech solves one problem. Dozer&apos;s cameras and sensors
            capture everything happening around your equipment, then put it to work
            three ways: keeping the field safe, backing up your operators, and
            giving the office the data to run a tighter job.
          </p>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {AUDIENCES.map((a) => (
            <li key={a.id}>
              <Link
                href={`#${a.id}`}
                className="group flex h-full flex-col rounded-md border border-medium-grey/30 bg-dozer-white p-6 transition-colors hover:border-dozer-yellow"
              >
                <span className="kicker self-start">{a.place}</span>
                <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-medium-grey">
                  {a.who}
                </span>
                <span className="mt-2 flex-1 text-dark-grey">{a.teaser}</span>
                <span className="mt-5 text-sm font-medium text-darker-grey">
                  See how <span aria-hidden="true">↓</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Field / cab / office, alternating rows with product visuals */}
      <Section tone="light" spacing="lg" aria-label="Dozer in the field, in the cab, and in the office">
        <div className="space-y-24 sm:space-y-32">
          {AUDIENCES.map(({ Visual, ...a }, i) => (
            <div
              key={a.id}
              id={a.id}
              className="grid scroll-mt-28 items-center gap-12 lg:grid-cols-2 lg:gap-16"
            >
              <div className={i % 2 ? "lg:order-2" : ""}>
                <p className="kicker">{a.place}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-medium-grey">
                  {a.who}
                </p>
                <h2 className="mt-2 text-3xl font-bold text-darker-grey sm:text-4xl">
                  {a.title}
                </h2>
                <p className="mt-4 text-lg text-dark-grey">{a.body}</p>
                <ul className="mt-6 space-y-3">
                  {a.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-dark-grey">
                      <Check />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 ? "lg:order-1" : ""}>
                <Visual />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Cost framing, why it matters */}
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
              <p className="font-mono text-3xl font-bold text-dozer-yellow">{c.stat}</p>
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

      {/* Customer story */}
      <Section tone="white" spacing="lg" aria-labelledby="story-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="kicker">Customer story</p>
            <h2 id="story-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
              Hear it from a Dozer customer
            </h2>
            <p className="mt-4 text-lg text-dark-grey">
              From out in the field to in the office, Smith Denison has transformed
              how they handle safety and productivity.
            </p>
          </div>
          <YouTubeLite
            id="LniqXy8HlL0"
            title="Smith Denison on using Dozer for safety and productivity"
            trackId="home_customer_story"
          />
        </div>
      </Section>

      <UseCaseGrid />

      <PricingBlock />

      <CtaBand location="home" />
    </>
  );
}

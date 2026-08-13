import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CtaLink } from "@/components/CtaLink";
import { SafeVideo } from "@/components/SafeVideo";
import { SuiteIcon } from "@/components/SuiteIcon";
import { VideoTestimonial } from "@/components/VideoTestimonial";
import { CtaBand } from "@/components/CtaBand";
import { ProductJsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { PERSONAS } from "@/lib/personas";
import { CAPABILITIES } from "@/lib/capabilities";

const DESCRIPTION =
  "Dozer is one AI system for your job site: rugged cameras and sensors on your equipment that keep the field safe, back up your operators in the cab, and give the office the data to run a tighter job.";

export const metadata: Metadata = buildMetadata({
  title: "Product — One AI System for Jobsite Safety & Productivity",
  description: DESCRIPTION,
  path: "/product",
});

/** The five stages of the system, from hardware to action. */
const STAGES = [
  {
    n: "01",
    name: "Eyes on site",
    body: "Rugged, IP-rated cameras and depth sensors mount on your excavators, dozers, loaders, and haul trucks, giving every machine a 360° view of the people, equipment, and ground around it.",
  },
  {
    n: "02",
    name: "Data capture",
    body: "Each machine continuously captures video, depth and point-cloud measurements, GPS location, and machine state, a complete, time-stamped record of what happened, where, and when.",
  },
  {
    n: "03",
    name: "Data pipeline",
    body: "That data moves off the machine through a pipeline built for the field, processed at the edge for instant alerts and synced to the cloud for site-wide analysis.",
  },
  {
    n: "04",
    name: "Site intelligence",
    body: "AI makes sense of the scene: it classifies workers, vehicles, and objects, measures proximity in real time, and maps activity across the whole site.",
  },
  {
    n: "05",
    name: "Insights & actions",
    body: "The result reaches the people who need it: real-time alerts in the cab, and clear dashboards and reports for the office to review safety, productivity, and disputes.",
  },
];

export default function ProductPage() {
  return (
    <>
      <ProductJsonLd name="Dozer AI" description={DESCRIPTION} path="/product" />

      {/* Hero */}
      <Section tone="light" spacing="lg" aria-labelledby="product-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="kicker">The product</p>
            <h1
              id="product-heading"
              className="mt-4 text-4xl font-bold leading-[1.1] text-darker-grey sm:text-5xl"
            >
              One system for jobsite safety and productivity
            </h1>
            <p className="mt-5 max-w-xl text-lg text-dark-grey">
              Dozer is a single, end-to-end system: cameras and sensors on your
              equipment, AI that understands what they see, and clear alerts and
              dashboards for everyone from the field to the office.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CtaLink href="/demo" variant="primary" trackId="product_hero_demo">
                Request a demo
              </CtaLink>
              <CtaLink href="#how-it-works" variant="secondary" trackId="product_hero_how">
                See how it works
              </CtaLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-medium-grey/30 bg-black">
            <SafeVideo
              src="/important-objects.mp4"
              label="Dozer AI detecting and classifying people, vehicles, and objects on a busy jobsite."
              trackId="product_hero_video"
              ambient
              className="aspect-video w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section id="how-it-works" tone="white" spacing="lg" aria-labelledby="how-heading">
        <div className="max-w-3xl">
          <p className="kicker">How it works</p>
          <h2 id="how-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            From the machine to a decision, one connected system
          </h2>
          <p className="mt-4 text-lg text-dark-grey">
            Every part of Dozer works together, so raw footage becomes something
            your team can actually use.
          </p>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-5">
          {STAGES.map((s, i) => (
            <li
              key={s.n}
              className="relative rounded-md border border-medium-grey/30 bg-dozer-white p-5"
            >
              <span className="font-mono text-sm text-dozer-yellow">{s.n}</span>
              <h3 className="mt-1 font-bold text-darker-grey">{s.name}</h3>
              <p className="mt-2 text-sm text-dark-grey">{s.body}</p>
              {i < STAGES.length - 1 && (
                <span
                  className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-medium-grey md:block"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </Section>

      {/* Built for every seat on the job (persona summary) */}
      <Section tone="light" spacing="lg" aria-labelledby="seats-heading">
        <div className="max-w-3xl">
          <p className="kicker">Built for every seat on the job</p>
          <h2 id="seats-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            One product, three vantage points
          </h2>
          <p className="mt-4 text-lg text-dark-grey">
            The same system delivers exactly what each role needs, from the ground
            to the cab to the office.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PERSONAS.map((p) => (
            <div
              key={p.id}
              id={p.id}
              className="scroll-mt-24 flex flex-col rounded-md border border-medium-grey/30 bg-white p-6"
            >
              <p className="kicker">{p.eyebrow}</p>
              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-medium-grey">
                {p.who}
              </p>
              <h3 className="mt-2 text-xl font-bold text-darker-grey">{p.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {p.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-dark-grey">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-dozer-yellow" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Full capability set */}
      <Section tone="light" spacing="lg" aria-labelledby="caps-heading">
        <div className="max-w-3xl">
          <p className="kicker">Capabilities</p>
          <h2 id="caps-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Everything Dozer does, in one system
          </h2>
          <p className="mt-4 text-lg text-dark-grey">
            Safety and productivity from the same cameras, available today.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.key}
              className="rounded-md border border-medium-grey/30 bg-white p-6 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-dozer-yellow/15 text-darker-grey">
                  <SuiteIcon name={cap.icon} />
                </span>
                <h3 className="text-xl font-bold text-darker-grey">{cap.name}</h3>
              </div>
              <ul className="mt-5 space-y-4">
                {cap.features.map((f) => (
                  <li key={f.name} className="border-l-2 border-dozer-yellow/60 pl-4">
                    <p className="font-medium text-darker-grey">{f.name}</p>
                    <p className="mt-0.5 text-sm text-dark-grey">{f.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <VideoTestimonial tone="light" />

      <CtaBand
        location="product"
        heading="See it on your own machine, request a demo"
        subheading="A short call, no obligation. We'll show live footage and map Dozer to your fleet."
      />
    </>
  );
}

import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { HomeHero } from "@/components/HomeHero";
import { PersonaBand } from "@/components/PersonaBand";
import { UseCaseGrid } from "@/components/UseCaseGrid";
import { PricingBlock } from "@/components/PricingBlock";
import { VideoTestimonial } from "@/components/VideoTestimonial";
import { CtaBand } from "@/components/CtaBand";
import { buildMetadata } from "@/lib/seo";
import { PERSONAS } from "@/lib/personas";

export const metadata: Metadata = buildMetadata({
  title: "Jobsite Safety & Productivity for Heavy Equipment",
  description:
    "Dozer mounts AI cameras and sensors on your heavy equipment to keep crews safe and jobsites productive, from the field to the cab to the office.",
  path: "/",
});

/** Cited proof stats. */
const STATS = [
  { stat: "~1 in 5", label: "U.S. worker deaths happen in construction", source: "OSHA" },
  { stat: "Struck-by", label: "is a leading cause of construction fatalities", source: "OSHA Focus Four" },
  {
    stat: "35%",
    label: "of a construction pro's time goes to non-optimal work",
    source: "PlanGrid & FMI, Construction Disconnected (2018)",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* One system for the whole crew */}
      <Section tone="white" spacing="lg" aria-labelledby="intro-heading">
        <div className="max-w-3xl">
          <p className="kicker">One system for the whole crew</p>
          <h2 id="intro-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Safety and productivity from the same cameras
          </h2>
          <p className="mt-4 text-lg text-dark-grey">
            Most jobsite tech solves one problem. Dozer&apos;s cameras and sensors
            capture everything happening around your equipment, then put it to work
            three ways: keeping the field safe, backing up your operators, and
            giving the office the data to run a tighter job.
          </p>
        </div>

        {/* Persona overview cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PERSONAS.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="group flex flex-col rounded-md border border-medium-grey/30 bg-dozer-white p-6 transition-colors hover:border-dozer-yellow"
            >
              <p className="kicker">{p.eyebrow}</p>
              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-medium-grey">
                {p.who}
              </p>
              <p className="mt-2 flex-1 text-dark-grey">{p.teaser}</p>
              <span className="mt-4 text-sm font-medium text-dark-grey group-hover:text-darker-grey">
                See how ↓
              </span>
            </a>
          ))}
        </div>
      </Section>

      {/* Persona deep-dives: field -> cab -> office */}
      <Section tone="light" spacing="lg" aria-label="How Dozer helps each role">
        <div className="space-y-20">
          {PERSONAS.map((p, i) => (
            <PersonaBand key={p.id} persona={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </Section>

      {/* Why it matters */}
      <Section tone="dark" spacing="lg" aria-labelledby="why-heading">
        <div className="max-w-3xl">
          <p className="kicker">Why it matters</p>
          <h2 id="why-heading" className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            The two most expensive things on a site: accidents and wasted time
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-md border border-white/15 bg-white/5 p-6">
              <p className="font-mono text-3xl font-bold text-dozer-yellow">{s.stat}</p>
              <p className="mt-2 text-dozer-white/90">{s.label}</p>
              <p className="mt-3 text-xs text-dozer-white/50">Source: {s.source}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-dozer-white/80">
          Dozer attacks both: it helps prevent the incident before it happens, and
          it shows you where time and money quietly leak out of the day.
        </p>
      </Section>

      <VideoTestimonial tone="white" />

      <UseCaseGrid />

      <PricingBlock />

      <CtaBand location="home" />
    </>
  );
}

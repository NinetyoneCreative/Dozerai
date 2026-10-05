import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { HomeHero } from "@/components/HomeHero";
import { AssetSlot } from "@/components/AssetSlot";
import { BrowserChrome } from "@/components/BrowserChrome";
import { CtaLink } from "@/components/CtaLink";
import { YouTubeFacade } from "@/components/YouTubeFacade";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PilotBand } from "@/components/PilotBand";
import { FaqPageJsonLd, VideoObjectJsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { ASSETS } from "@/content/assets";
import {
  PILLARS,
  OPERATOR,
  OFFICE,
  SUITES,
  SUITES_INTRO,
  STEPS,
  PROOF,
  COMPARISON,
  TOUR_EMBED_URL,
} from "@/content/home";
import { HARDWARE } from "@/content/hardware";
import { TRUST_LOGOS } from "@/content/trust";
import { FAQ } from "@/content/faq";

export const metadata: Metadata = buildMetadata({
  title: "On-Machine Safety & Productivity for Heavy Equipment",
  description:
    "Dozer AI mounts rugged 360-degree cameras and depth sensors on heavy equipment to warn operators of people in the blind spot and turn the same footage into utilization, cycle times, and cost codes.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <FaqPageJsonLd items={FAQ} />
      <VideoObjectJsonLd
        videoId={PROOF.videoId}
        name="Smith Denison Construction on Dozer AI"
        description="Doug Burkhart, owner of Smith Denison Construction, on the safety and productivity results of running Dozer AI on his fleet."
      />

      {/* 2 — Hero */}
      <HomeHero />

      {/* 3 — Trust bar */}
      <section aria-label="Trusted by contractors" className="border-b border-medium-grey/30 bg-white">
        <div className="mx-auto max-w-container px-5 py-8 sm:px-8">
          <p className="text-center font-mono text-xs uppercase tracking-[0.18em] text-medium-grey">
            Running on heavy fleets today
          </p>
          {/* TODO: drop approved logo files into /public/logos and set logoSrc in content/trust.ts */}
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {TRUST_LOGOS.map((logo) => (
              <li
                key={logo.name}
                className="font-mono text-sm font-medium uppercase tracking-wide text-darker-grey/70"
              >
                {logo.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 — Four-pillar strip */}
      <Section tone="light" spacing="lg" aria-labelledby="pillars-heading" className="reveal">
        <h2 id="pillars-heading" className="sr-only">
          How Dozer AI works, at a glance
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <div key={p.name}>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-medium-grey">
                {p.suite === "safety" ? "Safety" : "Productivity"}
              </p>
              <h3 className="mt-3 text-xl font-bold text-darker-grey">{p.name}</h3>
              <p className="mt-2 text-dark-grey">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5 — What the operator sees */}
      <section className="bg-surface-dark py-20 text-dozer-white sm:py-28" aria-labelledby="operator-heading">
        <div className="mx-auto max-w-container px-5 text-center sm:px-8">
          <p className="kicker">In the cab</p>
          <h2 id="operator-heading" className="mx-auto mt-5 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            {OPERATOR.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">{OPERATOR.body}</p>
          <div className="mx-auto mt-10 max-w-4xl">
            <AssetSlot {...ASSETS.operatorIncab} className="object-cover" />
          </div>
          <ul className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-3">
            {OPERATOR.specs.map((s) => (
              <li
                key={s}
                className="rounded-md border border-white/15 bg-white/5 px-4 py-2 font-mono text-sm text-dozer-yellow"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6 — What the office sees */}
      <section className="bg-surface-dark py-20 text-dozer-white sm:py-28" aria-labelledby="office-heading">
        <div className="mx-auto grid max-w-container items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-2">
            <p className="kicker">On the dashboard</p>
            <h2 id="office-heading" className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              {OFFICE.headline}
            </h2>
            <p className="mt-4 text-lg text-white/70">{OFFICE.body}</p>
            <ul className="mt-6 space-y-3">
              {OFFICE.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-dozer-white/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dozer-yellow" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:order-1">
            <BrowserChrome>
              <AssetSlot {...ASSETS.officeDashboard} className="object-cover" />
            </BrowserChrome>
          </div>
        </div>
      </section>

      {/* 7 — Two suites */}
      <Section tone="light" spacing="lg" aria-labelledby="suites-heading" className="reveal">
        <h2 id="suites-heading" className="text-center text-2xl font-bold text-darker-grey sm:text-3xl">
          {SUITES_INTRO}
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {SUITES.map((suite) => (
            <div
              key={suite.eyebrow}
              className="flex flex-col rounded-md border border-medium-grey/30 bg-white p-6 sm:p-8"
            >
              <p className="kicker">{suite.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-bold text-darker-grey">{suite.name}</h3>
              <p className="mt-3 text-dark-grey">{suite.promise}</p>
              <div className="mt-6 overflow-hidden rounded-md border border-medium-grey/30 bg-surface-dark">
                <BrowserChrome>
                  <AssetSlot {...ASSETS[suite.asset]} className="object-cover" />
                </BrowserChrome>
              </div>
              <ul className="mt-6 space-y-3">
                {suite.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-dark-grey">
                    <svg width="20" height="20" viewBox="0 0 20 20" className="mt-1 shrink-0 text-dozer-yellow" fill="currentColor" aria-hidden="true">
                      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 0 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-2">
                <CtaLink href={suite.href} variant="secondary" trackId={`home_suite_${suite.href}`}>
                  Explore the {suite.eyebrow.split(" ")[0]} suite
                </CtaLink>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 8 — Hardware lineup */}
      <Section tone="light" spacing="lg" aria-labelledby="hardware-heading" className="reveal">
        <div className="max-w-3xl">
          <p className="kicker">The hardware</p>
          <h2 id="hardware-heading" className="mt-4 text-3xl font-bold text-darker-grey sm:text-4xl">
            One install. Three rugged pieces.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {HARDWARE.map((sku) => (
            <div key={sku.slug} className="flex flex-col rounded-md border border-medium-grey/30 bg-white p-6">
              <div className="overflow-hidden rounded-md bg-dozer-white">
                <AssetSlot {...ASSETS[sku.asset]} className="object-contain" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-darker-grey">{sku.name}</h3>
              <p className="mt-2 flex-1 text-sm text-dark-grey">{sku.tagline}</p>
              <ul className="mt-4 space-y-1.5">
                {sku.specs.map((spec) => (
                  <li key={spec} className="font-mono text-xs text-medium-grey">
                    {spec}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Link href={sku.href} className="text-sm font-medium text-darker-grey underline-offset-4 hover:underline">
                  View specs
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 9 — How it works */}
      <Section id="how-it-works" tone="white" spacing="lg" aria-labelledby="how-heading" className="reveal">
        <div className="max-w-3xl">
          <p className="kicker">How it works</p>
          <h2 id="how-heading" className="mt-4 text-3xl font-bold text-darker-grey sm:text-4xl">
            From mount to report, one connected system
          </h2>
        </div>
        <ol className="mt-10 grid gap-px overflow-hidden rounded-md border border-medium-grey/30 bg-medium-grey/30 md:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.n} className="bg-white p-6">
              <span className="font-mono text-sm text-dozer-yellow">{step.n}</span>
              <h3 className="mt-2 text-lg font-bold text-darker-grey">{step.name}</h3>
              <p className="mt-2 text-sm text-dark-grey">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <AssetSlot {...ASSETS.systemDiagram} />
        </div>
      </Section>

      {/* 10 — Proof */}
      <Section tone="light" spacing="lg" aria-labelledby="proof-heading" className="reveal">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <YouTubeFacade
              videoId={PROOF.videoId}
              title="Smith Denison Construction on Dozer AI"
              trackId="proof_smith_denison"
            />
            <p className="mt-3 font-mono text-xs uppercase tracking-wide text-medium-grey">
              {PROOF.attribution.name}, {PROOF.attribution.role}
            </p>
          </div>
          <div>
            <p className="kicker">Customer proof</p>
            <h2 id="proof-heading" className="mt-4 text-3xl font-bold text-darker-grey sm:text-4xl">
              Smith Denison Construction
            </h2>
            {PROOF.quote ? (
              <blockquote className="mt-5 border-l-2 border-dozer-yellow pl-4 text-lg text-dark-grey">
                {PROOF.quote}
              </blockquote>
            ) : (
              <p className="mt-5 text-lg text-dark-grey">{PROOF.summary}</p>
            )}
            <dl className="mt-8 grid grid-cols-2 gap-4">
              {PROOF.stats.map((s) => (
                <div key={s.label} className="rounded-md border border-medium-grey/30 bg-white p-5">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-mono text-3xl font-bold text-darker-grey">{s.value}</dd>
                  <p className="mt-1 text-sm text-dark-grey">{s.label}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* 11 — Why on-machine */}
      <Section tone="white" spacing="lg" aria-labelledby="why-heading" className="reveal">
        <div className="max-w-3xl">
          <p className="kicker">Why on-machine</p>
          <h2 id="why-heading" className="mt-4 text-3xl font-bold text-darker-grey sm:text-4xl">
            The camera rides the machine, not a pole
          </h2>
        </div>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-medium-grey/40">
                <th className="w-1/3 py-4 pr-4" />
                <th className="w-1/3 py-4 pr-4 font-mono text-sm uppercase tracking-wide text-darker-grey">
                  {COMPARISON.columnA}
                </th>
                <th className="w-1/3 py-4 font-mono text-sm uppercase tracking-wide text-medium-grey">
                  {COMPARISON.columnB}
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.rows.map((row) => (
                <tr key={row.label} className="border-b border-medium-grey/25 align-top">
                  <th scope="row" className="py-5 pr-4 font-mono text-sm font-normal uppercase tracking-wide text-medium-grey">
                    {row.label}
                  </th>
                  <td className="py-5 pr-4 text-darker-grey">{row.a}</td>
                  <td className="py-5 text-dark-grey">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* 12 — Pilot band */}
      <PilotBand />

      {/* 13 — Interactive tour slot */}
      <Section tone="light" spacing="lg" aria-labelledby="tour-heading" className="reveal">
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker">Take the tour</p>
          <h2 id="tour-heading" className="mt-4 text-3xl font-bold text-darker-grey sm:text-4xl">
            Walk the product yourself
          </h2>
        </div>
        <div className="mt-10">
          {TOUR_EMBED_URL ? (
            <iframe
              src={TOUR_EMBED_URL}
              title="Interactive product tour"
              className="aspect-video w-full rounded-md border border-medium-grey/30"
              allowFullScreen
            />
          ) : (
            <div
              role="img"
              aria-label="Interactive product tour, coming soon"
              className="flex aspect-video w-full items-center justify-center rounded-md border border-dashed border-medium-grey/60 bg-white"
            >
              <div className="text-center font-mono">
                <p className="text-xs uppercase tracking-[0.18em] text-darker-grey">Interactive tour</p>
                <p className="mt-2 text-sm text-medium-grey">
                  Navattic / Storylane embed. Set TOUR_EMBED_URL in content/home.ts.
                </p>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* 14 — FAQ */}
      <Section tone="white" spacing="lg" aria-labelledby="faq-heading" className="reveal">
        <div className="max-w-3xl">
          <p className="kicker">Questions</p>
          <h2 id="faq-heading" className="mt-4 text-3xl font-bold text-darker-grey sm:text-4xl">
            Straight answers before you book
          </h2>
        </div>
        <div className="mt-10">
          <FaqAccordion items={FAQ} />
        </div>
      </Section>
    </>
  );
}

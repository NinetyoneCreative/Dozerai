import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { CtaLink } from "@/components/CtaLink";
import { SuiteFeatures } from "@/components/SuiteFeatures";
import { StatusBadge } from "@/components/StatusBadge";
import { ProductJsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { PRODUCTIVITY_SUITE } from "@/lib/suites";

export const metadata: Metadata = buildMetadata({
  title: PRODUCTIVITY_SUITE.title,
  description: PRODUCTIVITY_SUITE.metaDescription,
  path: "/productivity",
});

export default function ProductivityPage() {
  return (
    <>
      <ProductJsonLd
        name={PRODUCTIVITY_SUITE.name}
        description={PRODUCTIVITY_SUITE.metaDescription}
        path="/productivity"
      />

      {/* Hero */}
      <Section tone="light" spacing="lg" aria-labelledby="prod-heading">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/product"
            className="text-sm font-medium text-dark-grey hover:text-darker-grey"
          >
            An application of Dozer AI →
          </Link>
          <div className="mt-3 flex items-center justify-center gap-3">
            <p className="kicker">Productivity &amp; Analytics Suite</p>
            <StatusBadge status={PRODUCTIVITY_SUITE.status} timeline={PRODUCTIVITY_SUITE.timeline} />
          </div>
          <h1
            id="prod-heading"
            className="mt-4 text-4xl font-bold leading-[1.1] text-darker-grey sm:text-5xl"
          >
            {PRODUCTIVITY_SUITE.heroHeadline}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-dark-grey">
            {PRODUCTIVITY_SUITE.heroSub}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaLink href="/demo" variant="primary" trackId="productivity_hero_early_access">
              Get early access
            </CtaLink>
            <CtaLink href="#job-cost" variant="secondary" trackId="productivity_hero_explore">
              See what&apos;s coming
            </CtaLink>
          </div>
          <p className="mt-4 text-sm text-medium-grey">
            Same cameras you can deploy today — new insight arriving in{" "}
            {PRODUCTIVITY_SUITE.timeline}.
          </p>
        </div>

        {/* "Built on the hardware you already have" explainer */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          {[
            {
              n: "01",
              t: "Already on the machine",
              d: "Runs on the same Dozer cameras deploying for safety today — no new hardware.",
            },
            {
              n: "02",
              t: "Activity becomes data",
              d: "Machine state, location, and cycle times get logged continuously and tied to project phase.",
            },
            {
              n: "03",
              t: "Data becomes decisions",
              d: "Job costs, utilization, AI reports, and heat maps — exported to the tools you already run.",
            },
          ].map((s) => (
            <div key={s.n} className="rounded-md border border-medium-grey/30 bg-white p-5">
              <span className="font-mono text-sm text-dozer-yellow">{s.n}</span>
              <p className="mt-1 font-medium text-darker-grey">{s.t}</p>
              <p className="mt-1 text-sm text-dark-grey">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The roadmap intro */}
      <Section tone="white" spacing="sm" aria-labelledby="prod-roadmap-heading">
        <div className="max-w-3xl">
          <p className="kicker">On the roadmap · {PRODUCTIVITY_SUITE.timeline}</p>
          <h2 id="prod-roadmap-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            What&apos;s coming in the Productivity &amp; Analytics Suite
          </h2>
          <p className="mt-4 text-lg text-dark-grey">
            These capabilities are under active development and targeted for general
            availability within {PRODUCTIVITY_SUITE.timeline}. Early-access partners
            help shape what ships first.
          </p>
        </div>
      </Section>

      {/* Suite feature grid (6 categories) */}
      <SuiteFeatures suite={PRODUCTIVITY_SUITE} />

      {/* Early-access band */}
      <Section tone="dark" spacing="lg" aria-labelledby="prod-cta-heading">
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker">Be first</p>
          <h2 id="prod-cta-heading" className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Get early access to the Productivity &amp; Analytics Suite
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-dozer-white/80">
            Deploy Dozer for safety today, and you&apos;re first in line as productivity
            analytics roll out over the next {PRODUCTIVITY_SUITE.timeline}. Tell us how
            you&apos;d use it and help prioritize the roadmap.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaLink href="/demo" variant="primary" trackId="productivity_band_early_access">
              Get early access
            </CtaLink>
            <CtaLink href="/safety" variant="dark" trackId="productivity_band_safety">
              Start with Safety (available now)
            </CtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}

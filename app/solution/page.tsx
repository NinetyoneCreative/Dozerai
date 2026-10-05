import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { AssetSlot } from "@/components/AssetSlot";
import { BrowserChrome } from "@/components/BrowserChrome";
import { CtaLink } from "@/components/CtaLink";
import { PilotBand } from "@/components/PilotBand";
import { WalkthroughCta } from "@/components/WalkthroughCta";
import { buildMetadata } from "@/lib/seo";
import { ASSETS } from "@/content/assets";
import { PRODUCT, SUITE_PAGES } from "@/content/product";
import { SUITES_INTRO } from "@/content/home";
import { HARDWARE } from "@/content/hardware";

export const metadata: Metadata = buildMetadata({
  title: "The Dozer AI System, End to End for Safety & Productivity",
  description:
    "Dozer AI is one system: rugged cameras and depth sensors on the machine, on-machine edge AI, an in-cab tablet, and a web Command Center. One install runs both the Safety Intelligence and Productivity & Analytics suites.",
  path: "/solution",
});

export default function SolutionPage() {
  return (
    <>
      {/* Hero */}
      <Section tone="light" spacing="lg" aria-labelledby="solution-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="kicker">The solution</p>
            <h1 id="solution-heading" className="mt-5 text-4xl font-bold leading-[1.05] text-darker-grey sm:text-5xl">
              {PRODUCT.h1}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-dark-grey">{PRODUCT.opening}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CtaLink href="/demo" variant="primary" trackId="solution_hero_demo">
                Book a walkthrough
              </CtaLink>
              <CtaLink href="#flow" variant="secondary" trackId="solution_hero_flow">
                See how it works
              </CtaLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-medium-grey/30 bg-black">
            <AssetSlot {...ASSETS.productIncab} priority className="object-cover" />
          </div>
        </div>
      </Section>

      {/* Specs strip */}
      <section className="bg-surface-dark py-14" aria-label="Key specifications">
        <div className="mx-auto grid max-w-container grid-cols-2 gap-6 px-5 sm:px-8 md:grid-cols-5">
          {PRODUCT.specs.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-mono text-2xl font-bold text-dozer-yellow sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-sm text-dozer-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The flow */}
      <Section id="flow" tone="white" spacing="lg" aria-labelledby="flow-heading" className="reveal">
        <div className="max-w-3xl">
          <p className="kicker">How it works</p>
          <h2 id="flow-heading" className="mt-4 text-3xl font-bold text-darker-grey sm:text-4xl">
            From the camera to the decision
          </h2>
        </div>
        <ol className="mt-10 grid gap-px overflow-hidden rounded-md border border-medium-grey/30 bg-medium-grey/30 md:grid-cols-4">
          {PRODUCT.flow.map((step) => (
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

      {/* Two suites, full detail inline */}
      <Section tone="light" spacing="lg" aria-labelledby="suites-heading" className="reveal">
        <h2 id="suites-heading" className="text-center text-2xl font-bold text-darker-grey sm:text-3xl">
          {SUITES_INTRO}
        </h2>

        <div className="mt-14 space-y-16 lg:space-y-24">
          {SUITE_PAGES.map((suite, i) => {
            const hero = ASSETS[suite.heroAsset];
            const reverse = i % 2 === 1;
            return (
              <div key={suite.slug} id={suite.slug} className="scroll-mt-24">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div className={reverse ? "lg:order-2" : ""}>
                    <p className="kicker">{suite.eyebrow}</p>
                    <h3 className="mt-4 text-2xl font-bold text-darker-grey sm:text-3xl">{suite.h1}</h3>
                    <p className="mt-4 text-lg text-dark-grey">{suite.opening}</p>
                    <ul className="mt-6 grid gap-2">
                      {suite.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-3 text-dark-grey">
                          <svg width="20" height="20" viewBox="0 0 20 20" className="mt-1 shrink-0 text-dozer-yellow" fill="currentColor" aria-hidden="true">
                            <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 0 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z" />
                          </svg>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={reverse ? "lg:order-1" : ""}>
                    {hero.bucket === "ui" ? (
                      <BrowserChrome>
                        <AssetSlot {...hero} className="object-cover" />
                      </BrowserChrome>
                    ) : (
                      <div className="overflow-hidden rounded-md border border-medium-grey/30 bg-black">
                        <AssetSlot {...hero} className="object-cover" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Capabilities */}
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {suite.capabilities.map((cap) => (
                    <div key={cap.title} className="rounded-md border border-medium-grey/30 bg-white p-6">
                      <h4 className="font-bold text-darker-grey">{cap.title}</h4>
                      <p className="mt-2 text-sm text-dark-grey">{cap.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Hardware lineup */}
      <Section tone="white" spacing="lg" aria-labelledby="hw-heading" className="reveal">
        <div className="max-w-3xl">
          <p className="kicker">The hardware</p>
          <h2 id="hw-heading" className="mt-4 text-3xl font-bold text-darker-grey sm:text-4xl">
            One install. Three rugged pieces.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {HARDWARE.map((sku) => (
            <Link key={sku.slug} href={sku.href} className="group flex flex-col rounded-md border border-medium-grey/30 bg-white p-6 transition-colors hover:border-dozer-yellow">
              <div className="overflow-hidden rounded-md bg-dozer-white">
                <AssetSlot {...ASSETS[sku.asset]} className="object-contain" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-darker-grey">{sku.name}</h3>
              <p className="mt-2 flex-1 text-sm text-dark-grey">{sku.tagline}</p>
              <span className="mt-4 text-sm font-medium text-dark-grey group-hover:text-darker-grey">View specs</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Command Center teaser */}
      <section className="bg-surface-dark py-20 text-dozer-white sm:py-28" aria-labelledby="cc-heading">
        <div className="mx-auto grid max-w-container items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="kicker">Command Center</p>
            <h2 id="cc-heading" className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              The whole yard, on one dashboard
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Every camera feeds the web Command Center, so supervisors see machine locations, utilization, and safety events without leaving the trailer.
            </p>
            <div className="mt-8">
              <CtaLink href="/platform" variant="dark" trackId="solution_platform">
                Explore the Command Center
              </CtaLink>
            </div>
          </div>
          <BrowserChrome>
            <AssetSlot {...ASSETS.officeDashboard} className="object-cover" />
          </BrowserChrome>
        </div>
      </section>

      <PilotBand />
      <WalkthroughCta trackId="solution_cta" />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/Section";
import { AssetSlot } from "@/components/AssetSlot";
import { CtaLink } from "@/components/CtaLink";
import { PilotBand } from "@/components/PilotBand";
import { WalkthroughCta } from "@/components/WalkthroughCta";
import { buildMetadata } from "@/lib/seo";
import { ASSETS } from "@/content/assets";
import { INDUSTRIES, getIndustry } from "@/content/industries";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = getIndustry(params.slug);
  if (!industry) return {};
  return buildMetadata({
    title: industry.title,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
  });
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = getIndustry(params.slug);
  if (!industry) notFound();

  return (
    <>
      {/* Hero */}
      <Section tone="light" spacing="lg" aria-labelledby="ind-heading">
        <p className="mb-6">
          <Link href="/industries" className="text-sm text-dark-grey hover:text-darker-grey">
            &larr; All industries
          </Link>
        </p>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="kicker">{industry.eyebrow}</p>
            <h1 id="ind-heading" className="mt-5 text-4xl font-bold leading-[1.05] text-darker-grey sm:text-5xl">
              {industry.h1}
            </h1>
            <p className="mt-5 text-lg text-dark-grey">{industry.opening}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CtaLink href="/demo" variant="primary" trackId={`ind_${industry.slug}_demo`}>
                Book a walkthrough
              </CtaLink>
              <CtaLink href="#use-cases" variant="secondary" trackId={`ind_${industry.slug}_uc`}>
                See how it fits
              </CtaLink>
            </div>
          </div>
          <div>
            <div className="overflow-hidden rounded-md border border-medium-grey/30 bg-black">
              <AssetSlot {...ASSETS.operatorIncab} className="object-cover" />
            </div>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Equipment we cover">
              {industry.machines.map((m) => (
                <li key={m} className="rounded-full border border-medium-grey/40 bg-white px-3 py-1 text-xs text-dark-grey">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Use cases */}
      <Section id="use-cases" tone="white" spacing="lg" aria-labelledby="uc-heading" className="reveal">
        <div className="max-w-3xl">
          <p className="kicker">How Dozer fits</p>
          <h2 id="uc-heading" className="mt-4 text-3xl font-bold text-darker-grey sm:text-4xl">
            Three ways it earns its keep on a {industry.name.toLowerCase()} site
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {industry.useCases.map((uc, i) => (
            <div key={uc.title} className="rounded-md border border-medium-grey/30 bg-white p-6">
              <span className="font-mono text-sm text-dozer-yellow">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-lg font-bold text-darker-grey">{uc.title}</h3>
              <p className="mt-2 text-dark-grey">{uc.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Outcomes */}
      <section className="bg-surface-dark py-20 text-dozer-white sm:py-28" aria-labelledby="out-heading">
        <div className="mx-auto max-w-container px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="kicker">What it changes</p>
            <h2 id="out-heading" className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              The outcomes you are buying
            </h2>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {industry.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3 text-dozer-white/90">
                <svg width="22" height="22" viewBox="0 0 20 20" className="mt-0.5 shrink-0 text-dozer-yellow" fill="currentColor" aria-hidden="true">
                  <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 0 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z" />
                </svg>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PilotBand />
      <WalkthroughCta trackId={`ind_${industry.slug}_cta`} />
    </>
  );
}

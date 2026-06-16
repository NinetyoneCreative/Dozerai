import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/Section";
import { CtaLink } from "@/components/CtaLink";
import { SafeVideo } from "@/components/SafeVideo";
import { PricingBlock } from "@/components/PricingBlock";
import { CtaBand } from "@/components/CtaBand";
import { ProductJsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { INDUSTRIES, getIndustry } from "@/lib/industries";

/** Pre-render every industry page at build time. */
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
      <ProductJsonLd
        name={`Dozer.ai for ${industry.name}`}
        description={industry.metaDescription}
        path={`/industries/${industry.slug}`}
      />

      {/* HERO, pain-led, with the near-miss reel on the conversion path */}
      <Section tone="light" spacing="lg" aria-labelledby="ind-heading">
        <p className="mb-6">
          <Link href="/industries" className="text-sm text-dark-grey hover:text-darker-grey">
            ← All industries
          </Link>
        </p>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="kicker">{industry.heroKicker}</p>
            <h1
              id="ind-heading"
              className="mt-4 text-4xl font-bold leading-[1.1] text-darker-grey sm:text-5xl"
            >
              {industry.heroHeadline}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-dark-grey">{industry.heroSub}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CtaLink href="/demo" variant="primary" trackId={`ind_${industry.slug}_hero_intro`}>
                Book a 15-min intro
              </CtaLink>
              <CtaLink
                href="#how"
                variant="secondary"
                trackId={`ind_${industry.slug}_hero_how`}
              >
                See how it works
              </CtaLink>
              <CtaLink
                href="/demo#pricing"
                variant="ghost"
                trackId={`ind_${industry.slug}_hero_pricing`}
              >
                Get pricing
              </CtaLink>
            </div>

            {/* Equipment chips */}
            <ul className="mt-7 flex flex-wrap gap-2" aria-label="Equipment we cover">
              {industry.equipment.map((e) => (
                <li
                  key={e}
                  className="rounded-full border border-medium-grey/40 bg-white px-3 py-1 text-xs text-dark-grey"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="overflow-hidden rounded-md border border-medium-grey/30 bg-black shadow-sm">
              <SafeVideo
                src={industry.heroVideo}
                label={`Dozer detection in a ${industry.name.toLowerCase()} environment.`}
                trackId={`ind_${industry.slug}_hero_video`}
                ambient
                className="aspect-video w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center text-sm text-dark-grey">
              Real computer-vision detection, an alert flags the hazard before it
              becomes an incident.
            </p>
          </div>
        </div>
      </Section>

      {/* PAIN, "sound familiar?" */}
      <Section tone="white" spacing="lg" aria-labelledby="pain-heading">
        <div className="max-w-3xl">
          <p className="kicker">The reality on site</p>
          <h2 id="pain-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Sound familiar?
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {industry.pains.map((p) => (
            <div
              key={p.title}
              className="rounded-md border border-medium-grey/30 bg-dozer-white p-6"
            >
              <h3 className="text-lg font-medium text-darker-grey">{p.title}</h3>
              <p className="mt-2 text-dark-grey">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SOLUTION, how Dozer fits */}
      <Section id="how" tone="light" spacing="lg" aria-labelledby="how-heading">
        <div className="max-w-3xl">
          <p className="kicker">How Dozer fits</p>
          <h2 id="how-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            One system, tuned to your environment
          </h2>
          <p className="mt-4 text-lg text-dark-grey">
            The same cameras, safety intelligence, and dashboards, pointed at
            the hazards that actually matter on a {industry.name.toLowerCase()} site.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {industry.solutions.map((s, i) => (
            <div
              key={s.title}
              className="rounded-md border border-medium-grey/30 bg-white p-6"
            >
              <span className="font-mono text-sm text-dozer-yellow">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-medium text-darker-grey">{s.title}</h3>
              <p className="mt-2 text-dark-grey">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* OUTCOMES / ROI */}
      <Section tone="dark" spacing="lg" aria-labelledby="ind-outcomes-heading">
        <div className="max-w-3xl">
          <p className="kicker">What it changes</p>
          <h2
            id="ind-outcomes-heading"
            className="mt-3 text-3xl font-bold text-white sm:text-4xl"
          >
            The outcomes you&apos;re actually buying
          </h2>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {industry.outcomes.map((o) => (
            <li key={o} className="flex items-start gap-3 text-dozer-white/90">
              <svg
                width="22"
                height="22"
                viewBox="0 0 20 20"
                className="mt-0.5 shrink-0 text-dozer-yellow"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 0 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z" />
              </svg>
              <span>{o}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 rounded-md bg-white/10 px-6 py-5 text-center text-lg font-medium text-white">
          Prevent <span className="text-dozer-yellow">one incident</span> and the
          system pays for itself.
        </p>
      </Section>

      {/* PRICING + risk reversal (the close) */}
      <PricingBlock />

      <CtaBand location={`industry_${industry.slug}`} heading={industry.ctaHeadline} />
    </>
  );
}

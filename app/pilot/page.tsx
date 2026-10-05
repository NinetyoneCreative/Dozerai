import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CtaLink } from "@/components/CtaLink";
import { WalkthroughCta } from "@/components/WalkthroughCta";
import { buildMetadata } from "@/lib/seo";
import { PILOT_PAGE } from "@/content/pilot";

export const metadata: Metadata = buildMetadata({
  title: "The 45-Day Dozer AI Pilot on One Machine",
  description:
    "Put Dozer AI on one machine for 45 days with no long-term contract. See real safety events and real production data from your own jobsite, then decide.",
  path: "/pilot",
});

export default function PilotPage() {
  return (
    <>
      {/* Hero */}
      <Section tone="light" spacing="lg" aria-labelledby="pilot-heading">
        <div className="max-w-3xl">
          <p className="kicker">{PILOT_PAGE.eyebrow}</p>
          <h1 id="pilot-heading" className="mt-5 text-4xl font-bold leading-[1.05] text-darker-grey sm:text-5xl">
            {PILOT_PAGE.h1}
          </h1>
          <p className="mt-5 text-lg text-dark-grey">{PILOT_PAGE.opening}</p>
          <div className="mt-8">
            <CtaLink href="/demo" variant="primary" trackId="pilot_hero_demo">
              Book a walkthrough
            </CtaLink>
          </div>
        </div>
      </Section>

      {/* How the pilot works */}
      <Section tone="white" spacing="lg" aria-labelledby="steps-heading" className="reveal">
        <div className="max-w-3xl">
          <p className="kicker">How it works</p>
          <h2 id="steps-heading" className="mt-4 text-3xl font-bold text-darker-grey sm:text-4xl">
            Four steps, 45 days, one machine
          </h2>
        </div>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PILOT_PAGE.steps.map((step) => (
            <li key={step.n} className="rounded-md border border-medium-grey/30 bg-white p-6">
              <span className="font-mono text-sm text-dozer-yellow">{step.n}</span>
              <h3 className="mt-2 text-lg font-bold text-darker-grey">{step.name}</h3>
              <p className="mt-2 text-sm text-dark-grey">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* What's included */}
      <Section tone="light" spacing="lg" aria-labelledby="incl-heading" className="reveal">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="kicker">What is included</p>
            <h2 id="incl-heading" className="mt-4 text-3xl font-bold text-darker-grey sm:text-4xl">
              Everything, on one machine
            </h2>
            <ul className="mt-8 space-y-3">
              {PILOT_PAGE.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-dark-grey">
                  <svg width="22" height="22" viewBox="0 0 20 20" className="mt-0.5 shrink-0 text-dozer-yellow" fill="currentColor" aria-hidden="true">
                    <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 0 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-medium-grey/30 bg-white p-8">
            <p className="kicker">Proof</p>
            <p className="mt-4 text-lg text-dark-grey">{PILOT_PAGE.proof}</p>
          </div>
        </div>
      </Section>

      <WalkthroughCta
        heading="Ready to put it on a machine?"
        sub="Book a 15-minute walkthrough and we will scope a 45-day pilot on your fleet."
        trackId="pilot_cta"
      />
    </>
  );
}

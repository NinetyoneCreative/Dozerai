import { Section } from "@/components/Section";
import { CtaLink } from "@/components/CtaLink";

/**
 * The "Innovation Program" offer, a low-commitment founding-member pilot that
 * replaces the old per-unit pricing framing. Lives at #pricing (linked from
 * CTAs across the site). Three pillars: 45-day pilot, one-time low-cost fee,
 * one machine.
 */
const OFFER = [
  {
    title: "45-day pilot",
    desc: "A full six weeks on your equipment, on your jobsite, long enough to capture real safety events, not a staged demo.",
  },
  {
    title: "One-time, low-cost fee",
    desc: "A single low entry cost to get started. No long-term contract and no per-month surprise.",
  },
  {
    title: "One machine",
    desc: "Start on a single excavator or dozer. Scale across the yard only once you've seen it work for yourself.",
  },
];

export function PricingBlock() {
  return (
    <Section id="pricing" tone="white" spacing="lg" aria-labelledby="pricing-heading">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="kicker">Innovation Program</p>
          <h2 id="pricing-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Join the Innovation Program
          </h2>
          <p className="mt-4 text-lg text-dark-grey">
            We&apos;re onboarding a small group of forward-thinking contractors as
            founding members. Put Dozer on one machine, see real footage from your
            own jobsite, and help shape what ships next, including early access to
            the Productivity &amp; Analytics Suite.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="/demo" variant="primary" trackId="pricing_join_club">
              Join the Innovation Program
            </CtaLink>
            <CtaLink href="/demo" variant="secondary" trackId="pricing_talk_first">
              Talk to us first
            </CtaLink>
          </div>
        </div>

        <div className="rounded-md border border-medium-grey/30 bg-dozer-white p-8">
          <p className="text-sm font-medium uppercase tracking-wide text-darker-grey">
            What founding members get
          </p>
          <ul className="mt-5 space-y-5">
            {OFFER.map((o) => (
              <li key={o.title} className="flex items-start gap-3">
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
                <div>
                  <p className="font-medium text-darker-grey">{o.title}</p>
                  <p className="mt-0.5 text-sm text-dark-grey">{o.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-medium-grey/30 pt-5 text-sm text-dark-grey">
            One machine, 45 days, real footage, for one low fee. Founding-member
            spots are limited.
          </p>
        </div>
      </div>
    </Section>
  );
}

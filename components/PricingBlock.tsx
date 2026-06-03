import { Section } from "@/components/Section";
import { CtaLink } from "@/components/CtaLink";

/** Risk-reversal points that lower the commitment of saying yes. */
const RISK_REVERSAL = [
  "Pilot one machine",
  "Free install",
  "No long-term contract",
  "Field-serviceable hardware",
];

/**
 * Pricing signal + risk reversal. Lives at #pricing (linked from CTAs). We
 * don't publish a number — flexible per-unit pricing, start with one machine.
 */
export function PricingBlock() {
  return (
    <Section id="pricing" tone="white" spacing="lg" aria-labelledby="pricing-heading">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="kicker">Pricing</p>
          <h2 id="pricing-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Flexible per-unit pricing. Start with one machine.
          </h2>
          <p className="mt-4 text-lg text-dark-grey">
            Price scales with your fleet, not a rigid tier. Prove it out on a
            single excavator or dozer first — then roll it across the yard once
            you&apos;ve seen the footage.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="/demo" variant="primary" trackId="pricing_intro">
              Book a 15-min intro
            </CtaLink>
            <CtaLink href="/demo" variant="secondary" trackId="pricing_get_quote">
              Get a per-unit quote
            </CtaLink>
          </div>
        </div>

        <div className="rounded-md border border-medium-grey/30 bg-dozer-white p-8">
          <p className="text-sm font-medium uppercase tracking-wide text-darker-grey">
            Risk reversal
          </p>
          <ul className="mt-4 space-y-3">
            {RISK_REVERSAL.map((r) => (
              <li key={r} className="flex items-start gap-3 text-darker-grey">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="mt-0.5 shrink-0 text-dozer-yellow"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 0 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z" />
                </svg>
                <span>{r}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-dark-grey">
            No yard-wide commitment to find out if it works. One machine, one
            month, real footage.
          </p>
        </div>
      </div>
    </Section>
  );
}

import { Section } from "@/components/Section";
import { CtaLink } from "@/components/CtaLink";

interface CtaBandProps {
  /** Where this band lives, for analytics attribution. */
  location: string;
  heading?: string;
  subheading?: string;
}

/**
 * Shared dark CTA band that closes Home + all three product pages.
 * Primary action is the lower-commitment "Book a 15-min intro".
 */
export function CtaBand({
  location,
  heading = "See a near-miss caught on camera, book a 15-min intro",
  subheading = "A 15-minute call, no obligation. We'll assess fit and show live footage from machines in the field.",
}: CtaBandProps) {
  return (
    <Section tone="dark" spacing="lg" aria-labelledby={`cta-${location}`}>
      <div className="mx-auto max-w-3xl text-center">
        <p className="kicker">Ready when you are</p>
        <h2 id={`cta-${location}`} className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-dozer-white/80">
          {subheading}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaLink href="/demo" variant="primary" trackId={`ctaband_${location}_intro`}>
            Book a 15-min intro
          </CtaLink>
          <CtaLink href="/demo#pricing" variant="dark" trackId={`ctaband_${location}_pricing`}>
            Get pricing
          </CtaLink>
        </div>
      </div>
    </Section>
  );
}

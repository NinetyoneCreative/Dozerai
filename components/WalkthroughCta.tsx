import { CtaLink } from "@/components/CtaLink";

/**
 * Shared closing CTA band for internal pages. Dark surface, one primary CTA to
 * book a walkthrough plus a ghost link to the 45-day pilot. No price.
 */
export function WalkthroughCta({
  heading = "See it on your own machine.",
  sub = "Book a 15-minute walkthrough. We will show live footage and map Dozer AI to your fleet.",
  trackId = "walkthrough_cta",
}: {
  heading?: string;
  sub?: string;
  trackId?: string;
}) {
  return (
    <section className="bg-surface-deep" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-container px-5 py-16 text-center sm:px-8 sm:py-20">
        <h2 id="cta-heading" className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">{sub}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <CtaLink href="/demo" variant="primary" trackId={`${trackId}_demo`}>
            Book a walkthrough
          </CtaLink>
          <CtaLink href="/pilot" variant="dark" trackId={`${trackId}_pilot`}>
            See the 45-day pilot
          </CtaLink>
        </div>
      </div>
    </section>
  );
}

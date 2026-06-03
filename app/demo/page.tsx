import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SafeVideo } from "@/components/SafeVideo";
import { DemoForm } from "@/components/DemoForm";
import { Testimonial } from "@/components/Testimonial";
import { PricingBlock } from "@/components/PricingBlock";
import { CtaLink } from "@/components/CtaLink";
import { buildMetadata } from "@/lib/seo";
import { ASSETS, EXTERNAL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Book a 15-Minute Intro — See Dozer Safety Cameras Live",
  description:
    "Book a 15-minute intro call — no obligation. We'll assess fit and show live footage of Dozer's blind-spot detection and backover prevention on real heavy equipment.",
  path: "/demo",
});

const WHAT_HAPPENS = [
  "A 15-minute call, no obligation — we'll assess fit and show live footage.",
  "We walk through detection, in-cab alerts, and the dashboard on a real machine.",
  "You leave with a clear, per-unit price and a one-machine pilot plan.",
];

export default function DemoPage() {
  return (
    <>
      <Section tone="light" spacing="lg" aria-labelledby="demo-heading">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* LEFT — persuasion + proof */}
          <div>
            <p className="kicker">Request a demo</p>
            <h1
              id="demo-heading"
              className="mt-4 text-4xl font-bold leading-[1.1] text-darker-grey sm:text-5xl"
            >
              Book a 15-min intro
            </h1>
            <p className="mt-5 max-w-xl text-lg text-dark-grey">
              See exactly how Dozer&apos;s blind-spot cameras catch a near-miss
              before it becomes an incident — on the kinds of machines already in
              your yard.
            </p>

            {/* What happens next */}
            <div className="mt-8 rounded-md border border-medium-grey/30 bg-white p-6">
              <h2 className="text-sm font-medium uppercase tracking-wide text-darker-grey">
                What happens next
              </h2>
              <ul className="mt-4 space-y-3">
                {WHAT_HAPPENS.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-dark-grey">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dozer-yellow text-sm font-medium text-black">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Near-miss reel on the conversion path */}
            <div className="mt-8 overflow-hidden rounded-md border border-medium-grey/30 bg-black">
              <SafeVideo
                src={ASSETS.importantObjectsVideo}
                label="Near-miss reel: a Dozer in-cab alert flags a worker in the blind spot."
                trackId="demo_near_miss"
                ambient
                className="aspect-video w-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm text-medium-grey">
              90 seconds: an alert flagging a high-risk object before it becomes an
              incident.
            </p>

            {/* Instant-calendar fallback */}
            <div className="mt-8 rounded-md bg-dozer-white p-6">
              <p className="font-medium text-darker-grey">Prefer to grab a time now?</p>
              <p className="mt-1 text-sm text-dark-grey">
                Skip the form and book straight onto a specialist&apos;s calendar.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {/* TODO: replace EXTERNAL.booking with the real Calendly / Chili Piper link */}
                <CtaLink
                  href={EXTERNAL.booking}
                  variant="secondary"
                  trackId="demo_calendar_fallback"
                  external
                >
                  📅 Pick a time on the calendar
                </CtaLink>
                <CtaLink href="#pricing" variant="ghost" trackId="demo_jump_pricing">
                  Just want pricing? →
                </CtaLink>
              </div>
            </div>

            {/* Proof */}
            <div className="mt-8">
              <Testimonial compact />
            </div>
          </div>

          {/* RIGHT — the lean form */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-md border border-medium-grey/30 bg-dozer-white p-6 sm:p-8">
              <h2 className="text-xl font-bold text-darker-grey">
                Tell us where to send the footage
              </h2>
              <p className="mt-1.5 text-sm text-dark-grey">
                Three quick fields. We&apos;ll handle the rest.
              </p>
              <div className="mt-6">
                <DemoForm />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing + risk reversal (CTA target: /demo#pricing) */}
      <PricingBlock />
    </>
  );
}

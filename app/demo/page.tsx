import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SafeVideo } from "@/components/SafeVideo";
import { DemoBooking } from "@/components/demo/DemoBooking";
import { DemoCta } from "@/components/demo/DemoCta";
import { DemoFaq } from "@/components/demo/DemoFaq";
import { DemoVideo } from "@/components/demo/DemoVideo";
import { DemoHeroSubhead } from "@/components/demo/DemoHeroSubhead";
import { CameraCoverage } from "@/components/demo/CameraCoverage";
import { StickyCta } from "@/components/demo/StickyCta";
import { PhoneLink } from "@/components/demo/PhoneLink";
import { buildMetadata } from "@/lib/seo";
import { ASSETS } from "@/lib/site";
import {
  CREDIBILITY,
  PULL_QUOTES,
  OFFER_INCLUDED,
  OFFER_CARDS,
  TIMELINE,
  COST_STATS,
  FAQ,
} from "@/lib/demoContent";

const DEMO_TITLE = "Book a 15-Minute Intro | See Dozer AI Safety Cameras Live";
const DEMO_DESCRIPTION =
  "Book a 15-minute intro, no obligation. See live footage of Dozer AI blind-spot detection on real heavy equipment, then pick a time on the spot.";

const base = buildMetadata({ title: DEMO_TITLE, description: DEMO_DESCRIPTION, path: "/demo" });
export const metadata: Metadata = {
  ...base,
  // Absolute title bypasses the global "| Dozer.ai" template so this route reads "Dozer AI".
  title: { absolute: DEMO_TITLE },
  openGraph: { ...base.openGraph, siteName: "Dozer AI: Heavy Equipment Safety Cameras" },
};

const HERO_SUBHEAD =
  "See how Dozer AI catches a near-miss before it becomes an incident, on the machines already in your yard.";

const WHAT_HAPPENS = [
  "A 15-minute call, no obligation. We'll assess fit and show live footage.",
  "We walk through detection, in-cab alerts, and the dashboard on a real machine.",
  "You leave with the Dozer Pilot offer: one machine, 45 days, $2,500, credited toward your purchase if you keep it.",
];

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export default function DemoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />

      {/* Hero + form */}
      <Section tone="light" spacing="lg" aria-labelledby="demo-heading">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* LEFT: persuasion + proof */}
          <div>
            <p className="kicker">Request a demo</p>
            <h1 id="demo-heading" className="mt-4 text-4xl font-bold leading-[1.1] text-darker-grey sm:text-5xl">
              Book a 15-min intro
            </h1>
            <DemoHeroSubhead defaultText={HERO_SUBHEAD} />

            <div className="mt-8 rounded-md border border-medium-grey/30 bg-white p-6">
              <h2 className="text-sm font-medium uppercase tracking-wide text-darker-grey">What happens next</h2>
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

            <div className="mt-8 overflow-hidden rounded-md border border-medium-grey/30 bg-black">
              <SafeVideo
                src={ASSETS.importantObjectsVideo}
                label="Near-miss reel: a Dozer AI in-cab alert flags a worker in the blind spot."
                trackId="demo_near_miss"
                ambient
                className="aspect-video w-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm text-medium-grey">
              90 seconds: an alert flagging a high-risk object before it becomes an incident.
            </p>
          </div>

          {/* RIGHT: form, swaps to the scheduler on submit */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <DemoBooking />
          </div>
        </div>
      </Section>

      {/* Module 1: Credibility strip */}
      <Section id="credibility" tone="white" spacing="sm" aria-label="Backed by">
        <p className="text-center font-mono text-xs uppercase tracking-[0.18em] text-medium-grey">Backed by</p>
        <ul className="mt-5 flex flex-col items-center justify-center gap-x-8 gap-y-3 sm:flex-row sm:flex-wrap sm:divide-x sm:divide-medium-grey/40">
          {CREDIBILITY.map((item) => (
            <li key={item} className="px-4 text-center font-mono text-sm text-dark-grey">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Module 2: Customer proof */}
      <Section id="customer-story" tone="light" spacing="lg" aria-labelledby="story-heading">
        <p className="kicker">Customer story</p>
        <h2 id="story-heading" className="mt-3 max-w-3xl text-3xl font-bold text-darker-grey sm:text-4xl">
          Smith Denison runs Dozer AI on their machines. Here&apos;s what they&apos;d tell you.
        </h2>
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <DemoVideo />
          <ul className="space-y-5">
            {PULL_QUOTES.map((q) => (
              <li key={q.quote} className="rounded-md border border-medium-grey/30 border-l-4 border-l-dozer-yellow bg-white p-5">
                <p className="text-dark-grey">&ldquo;{q.quote}&rdquo;</p>
                <p className="mt-3 text-sm font-medium text-darker-grey">{q.name}</p>
                <p className="text-xs text-medium-grey">{q.role}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <DemoCta location="customer-story">See it on your machines</DemoCta>
        </div>
      </Section>

      {/* Module 3: The Offer (dark) */}
      <section id="pilot-offer" className="bg-surface-dark py-20 text-dozer-white sm:py-28" aria-labelledby="offer-heading">
        <div className="mx-auto max-w-container px-5 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-dozer-yellow">The Dozer Pilot</p>
          <h2 id="offer-heading" className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
            One machine. 45 days. $2,500. Keep it or walk away.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-dozer-white/80">
            Put Dozer AI on one of your machines and see real footage from your own jobsite. If you keep it, the
            $2,500 goes toward your purchase. If you don&apos;t, you step away. No strings attached.
          </p>

          <div className="mt-10 rounded-md border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-dozer-white/60">Everything included</p>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {OFFER_INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-dozer-white/90">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-dozer-yellow" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {OFFER_CARDS.map((c) => (
              <div key={c.title} className="rounded-md border border-white/10 bg-white/5 p-6">
                <h3 className="font-bold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-dozer-white/80">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <DemoCta location="pilot-offer">Book a 15-min intro</DemoCta>
            <DemoCta location="pilot-offer" variant="link" className="text-dozer-white/80 hover:text-white">
              Questions first? Talk to us
            </DemoCta>
          </div>
        </div>
      </section>

      {/* Module 4: How the 45 days work */}
      <Section id="how-it-works" tone="white" spacing="lg" aria-labelledby="how-heading">
        <p className="kicker">How the pilot works</p>
        <h2 id="how-heading" className="mt-3 text-3xl font-bold text-darker-grey sm:text-4xl">
          From intro call to real footage.
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-4">
          {TIMELINE.map((step, i) => (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dozer-yellow text-sm font-bold text-black">
                  {i + 1}
                </span>
                {i < TIMELINE.length - 1 && <span className="hidden h-px flex-1 bg-medium-grey/40 md:block" aria-hidden="true" />}
              </div>
              <p className="mt-4 font-mono text-xs uppercase tracking-wide text-dozer-yellow">{step.day}</p>
              <h3 className="mt-1 text-lg font-bold text-darker-grey">{step.title}</h3>
              <p className="mt-2 text-sm text-dark-grey">{step.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Module 5: Interactive camera coverage */}
      <Section id="coverage" tone="light" spacing="lg" aria-labelledby="coverage-heading">
        <div className="max-w-3xl">
          <p className="kicker">See the coverage</p>
          <h2 id="coverage-heading" className="mt-3 text-3xl font-bold text-darker-grey sm:text-4xl">
            See what your operators can&apos;t.
          </h2>
        </div>
        <div className="mt-10">
          <CameraCoverage />
        </div>
      </Section>

      {/* Module 6: What an incident really costs */}
      <Section id="cost" tone="white" spacing="lg" aria-labelledby="cost-heading">
        <div className="max-w-3xl">
          <p className="kicker">Why it matters</p>
          <h2 id="cost-heading" className="mt-3 text-3xl font-bold text-darker-grey sm:text-4xl">
            One hit shuts down the whole job.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {COST_STATS.map((c) => (
            <div key={c.label} className="rounded-md border border-medium-grey/30 bg-white p-6">
              <p className="text-3xl font-bold text-dozer-yellow [font-family:var(--font-heading)]">{c.stat}</p>
              <p className="mt-2 text-dark-grey">{c.label}</p>
              <p className="mt-3 text-xs text-medium-grey">{c.source}</p>
            </div>
          ))}
        </div>
        <blockquote className="mt-10 max-w-3xl border-l-4 border-dozer-yellow pl-5 text-xl text-darker-grey">
          &ldquo;It shuts the whole job down, and that&apos;s costly when we have crews of 15 people and all sorts of
          heavy equipment running.&rdquo;
          <footer className="mt-3 text-sm font-medium text-dark-grey">
            Doug Burkhart, Owner, Smith Denison Construction
          </footer>
        </blockquote>
      </Section>

      {/* Module 7: FAQ */}
      <Section id="faq" tone="light" spacing="lg" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl">
          <p className="kicker">Questions</p>
          <h2 id="faq-heading" className="mt-3 text-3xl font-bold text-darker-grey sm:text-4xl">
            What contractors ask before the call.
          </h2>
        </div>
        <div className="mt-10">
          <DemoFaq />
        </div>
      </Section>

      {/* Module 8: Final CTA */}
      <Section id="final-cta" tone="white" spacing="lg" aria-labelledby="final-heading">
        <div className="rounded-md border-l-8 border-dozer-yellow bg-surface-dark p-8 sm:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-dozer-yellow">Ready when you are</p>
          <h2 id="final-heading" className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            See a near-miss caught on camera.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-dozer-white/80">
            15 minutes. No obligation. Leave with the pilot offer.
          </p>
          <div className="mt-8">
            <DemoCta location="final-cta">Book a 15-min intro</DemoCta>
            <p className="mt-4 text-sm text-dozer-white/70">
              Rather talk now? Call{" "}
              <PhoneLink location="final-cta" className="font-medium text-white underline underline-offset-2">
                (707) 563-9898
              </PhoneLink>
            </p>
          </div>
        </div>
      </Section>

      <StickyCta />
    </>
  );
}

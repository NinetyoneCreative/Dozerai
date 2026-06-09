import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { Testimonial } from "@/components/Testimonial";
import { CtaLink } from "@/components/CtaLink";
import { buildMetadata } from "@/lib/seo";
import { CONTACT, EXTERNAL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Dozer AI, Talk to Our Team",
  description:
    "Get in touch with Dozer AI. Ask about blind-spot detection and proximity safety for heavy equipment, request pricing, or book a 15-minute intro, we reply within one business day.",
  path: "/contact",
});

/** Reasons people reach out, helps route the conversation. */
const REASONS = [
  {
    title: "See it on your equipment",
    body: "Book a 15-minute intro and we'll show live footage from real machines.",
  },
  {
    title: "Get pricing",
    body: "Ask about the Innovation Program pilot, one machine, 45 days, one low fee.",
  },
  {
    title: "Partnerships & press",
    body: "Integrations, resellers, or media, point us in the right direction and we'll connect you.",
  },
];

export default function ContactPage() {
  return (
    <Section tone="light" spacing="lg" aria-labelledby="contact-heading">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* LEFT, context, contact methods, proof */}
        <div>
          <p className="kicker">Contact us</p>
          <h1
            id="contact-heading"
            className="mt-4 text-4xl font-bold leading-[1.1] text-darker-grey sm:text-5xl"
          >
            Let&apos;s talk about your site
          </h1>
          <p className="mt-5 max-w-xl text-lg text-dark-grey">
            Questions about blind-spot detection, proximity safety, or productivity
            analytics for your fleet? Send a note and a real person on our team will
            reply {CONTACT.responseTime}.
          </p>

          {/* Direct contact methods */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${CONTACT.email}`}
              className="rounded-md border border-medium-grey/30 bg-white p-5 transition-colors hover:border-dozer-yellow"
            >
              <p className="text-sm font-medium uppercase tracking-wide text-darker-grey">Email</p>
              <p className="mt-1 text-dark-grey">{CONTACT.email}</p>
            </a>
            <a
              href={CONTACT.phoneHref}
              className="rounded-md border border-medium-grey/30 bg-white p-5 transition-colors hover:border-dozer-yellow"
            >
              <p className="text-sm font-medium uppercase tracking-wide text-darker-grey">Phone</p>
              <p className="mt-1 text-dark-grey">{CONTACT.phone}</p>
            </a>
          </div>

          {/* Reasons to reach out */}
          <ul className="mt-8 space-y-4">
            {REASONS.map((r) => (
              <li key={r.title} className="flex items-start gap-3">
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
                  <p className="font-medium text-darker-grey">{r.title}</p>
                  <p className="text-sm text-dark-grey">{r.body}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Calendar fallback */}
          <div className="mt-8 rounded-md bg-dozer-white p-6">
            <p className="font-medium text-darker-grey">Prefer to grab a time now?</p>
            <p className="mt-1 text-sm text-dark-grey">
              Skip the form and book straight onto a specialist&apos;s calendar.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {/* TODO: replace EXTERNAL.booking with the real Calendly / Chili Piper link */}
              <CtaLink href={EXTERNAL.booking} variant="secondary" trackId="contact_calendar" external>
                📅 Book a 15-min intro
              </CtaLink>
            </div>
          </div>

          {/* Proof */}
          <div className="mt-8">
            <Testimonial compact />
          </div>
        </div>

        {/* RIGHT, the form */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-md border border-medium-grey/30 bg-dozer-white p-6 sm:p-8">
            <h2 className="text-xl font-bold text-darker-grey">Send us a message</h2>
            <p className="mt-1.5 text-sm text-dark-grey">
              We reply {CONTACT.responseTime}.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

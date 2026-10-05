import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { HubspotForm } from "@/components/HubspotForm";
import { AssetSlot } from "@/components/AssetSlot";
import { buildMetadata } from "@/lib/seo";
import { ASSETS } from "@/content/assets";

export const metadata: Metadata = buildMetadata({
  title: "Book a Walkthrough of Dozer AI Safety & Productivity",
  description:
    "Book a 15-minute walkthrough of Dozer AI. We will show live in-cab detection and the Command Center, and map the system to the machines in your fleet.",
  path: "/demo",
});

const WHAT_HAPPENS = [
  "A 15-minute call, no obligation. We assess fit and show live footage.",
  "We walk through in-cab detection and the Command Center on a real machine.",
  "You leave with a scoped 45-day pilot on one machine, no long-term contract.",
];

export default function DemoPage() {
  return (
    <Section tone="light" spacing="lg" aria-labelledby="demo-heading">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Left: persuasion + proof */}
        <div>
          <p className="kicker">Book a walkthrough</p>
          <h1 id="demo-heading" className="mt-5 text-4xl font-bold leading-[1.05] text-darker-grey sm:text-5xl">
            See it on your own machines
          </h1>
          <p className="mt-5 max-w-xl text-lg text-dark-grey">
            Fifteen minutes. We show how Dozer AI catches a near-miss before it becomes an incident, and how the same cameras turn a shift into cost codes and cycle times.
          </p>

          <div className="mt-8 rounded-md border border-medium-grey/30 bg-white p-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-darker-grey">
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

          <div className="mt-8 overflow-hidden rounded-md border border-medium-grey/30 bg-black">
            <AssetSlot {...ASSETS.operatorIncab} className="object-cover" />
          </div>
        </div>

        {/* Right: HubSpot form */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-md border border-medium-grey/30 bg-dozer-white p-6 sm:p-8">
            <h2 className="text-xl font-bold text-darker-grey">Tell us about your fleet</h2>
            <p className="mt-1.5 text-sm text-dark-grey">A few quick details. We handle the rest.</p>
            <div className="mt-6">
              <HubspotForm trackId="demo_form_submit" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

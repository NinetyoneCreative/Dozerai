import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CtaLink } from "@/components/CtaLink";
import { SafeImage } from "@/components/SafeImage";
import { CtaBand } from "@/components/CtaBand";
import { ProductJsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { ASSETS } from "@/lib/site";

const DESCRIPTION =
  "A fleet and jobsite dashboard to review footage, safety events, productivity, and disputes by machine and map area — across your entire heavy equipment fleet.";

export const metadata: Metadata = buildMetadata({
  title: "Fleet Safety Dashboard for Heavy Equipment Footage & Events",
  description: DESCRIPTION,
  path: "/dashboards",
});

const CAPABILITIES = [
  {
    title: "Review by machine",
    body: "Jump straight to any excavator, dozer, or loader and scrub its footage, alerts, and uptime.",
  },
  {
    title: "Review by map area",
    body: "Isolate everything that happened in a zone — perfect for rework disputes and incident review.",
  },
  {
    title: "Safety events in one place",
    body: "Every recorded alert and near-miss, tagged and searchable for documentation or training.",
  },
  {
    title: "Productivity at a glance",
    body: "See how and where work got done across the fleet, not just where machines idled.",
  },
];

export default function DashboardsPage() {
  return (
    <>
      <ProductJsonLd
        name="Dozer.ai Dashboards"
        description={DESCRIPTION}
        path="/dashboards"
      />

      {/* Hero */}
      <Section tone="light" spacing="lg" aria-labelledby="dash-heading">
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker">Dashboards</p>
          <h1
            id="dash-heading"
            className="mt-4 text-4xl font-bold leading-[1.1] text-darker-grey sm:text-5xl"
          >
            Your whole fleet&apos;s safety and footage, in one dashboard
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-dark-grey">
            Review footage, safety events, productivity, and disputes by machine
            and by map area — without leaving your desk.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaLink href="/demo" variant="primary" trackId="dash_hero_intro">
              Book a 15-min intro
            </CtaLink>
            <CtaLink href="/demo#pricing" variant="secondary" trackId="dash_hero_pricing">
              Get pricing
            </CtaLink>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-md border border-medium-grey/30 bg-white shadow-sm">
          <SafeImage
            src={ASSETS.dashboardCarousel}
            alt="Dozer fleet dashboard showing footage, safety events, and productivity by machine and map area."
            width={1440}
            height={810}
            className="h-auto w-full"
            priority
          />
        </div>
      </Section>

      {/* Capabilities */}
      <Section tone="white" spacing="lg" aria-labelledby="dash-cap-heading">
        <div className="max-w-3xl">
          <p className="kicker">What you can do</p>
          <h2 id="dash-cap-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Built for fleet and safety managers
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {CAPABILITIES.map((c) => (
            <div
              key={c.title}
              className="rounded-md border border-medium-grey/30 bg-dozer-white p-6"
            >
              <h3 className="text-lg font-medium text-darker-grey">{c.title}</h3>
              <p className="mt-2 text-dark-grey">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand location="dashboards" />
    </>
  );
}

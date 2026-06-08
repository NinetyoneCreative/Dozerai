import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { CtaLink } from "@/components/CtaLink";
import { SafeVideo } from "@/components/SafeVideo";
import { FeatureRow } from "@/components/FeatureRow";
import { CtaBand } from "@/components/CtaBand";
import { ProductJsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { ASSETS } from "@/lib/site";

const DESCRIPTION =
  "Dozer is one AI system that puts eyes on your job site: rugged cameras and sensors on your equipment, real-time perception of people and conditions, and clear insights and alerts your team can act on.";

export const metadata: Metadata = buildMetadata({
  title: "Product — How Dozer's AI Job Site System Works",
  description: DESCRIPTION,
  path: "/product",
});

/** The five stages of the system, from hardware to action. */
const STAGES = [
  {
    n: "01",
    name: "Eyes on site",
    body: "Rugged, IP-rated cameras and depth sensors mount directly on your excavators, dozers, loaders, and haul trucks — giving every machine a 360° view of the people, equipment, and ground around it.",
  },
  {
    n: "02",
    name: "Data capture",
    body: "Each machine continuously captures video, depth and point-cloud measurements, GPS location, and machine state — a complete, time-stamped record of what happened, where, and when.",
  },
  {
    n: "03",
    name: "Data pipeline",
    body: "That data moves off the machine through a pipeline built for the field — processed at the edge for instant alerts and synced to the cloud for site-wide analysis.",
  },
  {
    n: "04",
    name: "Site intelligence",
    body: "AI perception makes sense of the scene: it classifies workers, vehicles, and objects, measures proximity in real time, and maps activity across the whole site.",
  },
  {
    n: "05",
    name: "Insights & actions",
    body: "The result reaches the people who need it — real-time alerts in the cab, and clear dashboards and reports for supervisors to review events, productivity, and disputes.",
  },
];

export default function ProductPage() {
  return (
    <>
      <ProductJsonLd name="Dozer AI" description={DESCRIPTION} path="/product" />

      {/* Hero */}
      <Section tone="light" spacing="lg" aria-labelledby="product-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="kicker">Dozer AI · The product</p>
            <h1
              id="product-heading"
              className="mt-4 text-4xl font-bold leading-[1.1] text-darker-grey sm:text-5xl"
            >
              One system that turns your job site into site intelligence
            </h1>
            <p className="mt-5 max-w-xl text-lg text-dark-grey">
              Dozer is a single, end-to-end system: cameras and sensors on your
              equipment, an AI that understands what they see, and clear insights
              your team can act on — for a safer, more productive site.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CtaLink href="/demo" variant="primary" trackId="product_hero_intro">
                Book a 15-min intro
              </CtaLink>
              <CtaLink href="#how-it-works" variant="secondary" trackId="product_hero_how">
                See how it works
              </CtaLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-medium-grey/30 bg-black">
            <SafeVideo
              src={ASSETS.camerasHeroVideo}
              label="Dozer cameras and sensors mounted on heavy equipment in the field."
              trackId="product_hero_video"
              ambient
              className="aspect-video w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* How it works — the five stages */}
      <Section id="how-it-works" tone="white" spacing="lg" aria-labelledby="how-heading">
        <div className="max-w-3xl">
          <p className="kicker">How it works</p>
          <h2 id="how-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            From the machine to a decision — one connected system
          </h2>
          <p className="mt-4 text-lg text-dark-grey">
            Every part of Dozer works together, so raw footage becomes something
            your team can actually use.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-5">
          {STAGES.map((s, i) => (
            <li
              key={s.n}
              className="relative rounded-md border border-medium-grey/30 bg-dozer-white p-5"
            >
              <span className="font-mono text-sm text-dozer-yellow">{s.n}</span>
              <h3 className="mt-1 font-bold text-darker-grey">{s.name}</h3>
              <p className="mt-2 text-sm text-dark-grey">{s.body}</p>
              {i < STAGES.length - 1 && (
                <span
                  className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-medium-grey md:block"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </Section>

      {/* Deeper visual highlights */}
      <Section tone="light" spacing="lg" aria-label="The system in detail">
        <div className="space-y-20">
          <FeatureRow
            kicker="Eyes on site"
            title="Cameras and sensors built for the jobsite"
            body="Durable, IP-rated cameras with a 360° spherical field of view and stereoscopic depth sensing — mounted right on the machine and built to survive harsh conditions."
            points={[
              "360° view of the cabin, attachment, and everything around the machine",
              "Stereoscopic depth sensing for centimeter-accurate proximity",
              "IP-6/7-rated housing that withstands dust, water, and impact",
            ]}
            media={{
              type: "image",
              src: ASSETS.fieldOfView,
              alt: "360-degree field of view around an excavator captured by Dozer cameras.",
            }}
          />

          <FeatureRow
            reverse
            kicker="Site intelligence"
            title="AI that understands a messy scene in real time"
            body="Computer vision classifies people, vehicles, and objects, measures how close they are, and maps activity across the site — turning raw video into an understanding of what's actually happening."
            points={[
              "Real-time detection of workers, equipment, and vehicles",
              "Point-cloud proximity measurement as a virtual spotter",
              "GPS-tagged activity mapped across the whole site",
            ]}
            media={{
              type: "video",
              src: ASSETS.importantObjectsVideo,
              label: "Dozer AI classifying people, vehicles, and objects on a busy jobsite.",
              trackId: "product_intelligence_video",
            }}
          />

          <FeatureRow
            kicker="Insights & actions"
            title="Alerts in the cab. Answers on the dashboard."
            body="Operators get real-time audio and visual warnings the moment a hazard appears. Supervisors get a single dashboard to review footage, safety events, productivity, and disputes — by machine and by map area."
            points={[
              "In-cab alerts for hazards, proximity, and zone violations",
              "Review events and footage by machine or location",
              "One record for safety, productivity, and dispute resolution",
            ]}
            media={{
              type: "image",
              src: ASSETS.dashboardCarousel,
              alt: "Dozer dashboard showing footage, safety events, and productivity by machine and map area.",
            }}
          />
        </div>
      </Section>

      {/* What it helps you do — bridge to outcome pages */}
      <Section tone="white" spacing="lg" aria-labelledby="product-outcomes-heading">
        <div className="max-w-3xl">
          <p className="kicker">What it helps you do</p>
          <h2 id="product-outcomes-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            One product, two outcomes
          </h2>
          <p className="mt-4 text-lg text-dark-grey">
            Safety and productivity aren&apos;t separate products — they&apos;re what
            the same system delivers once it understands your site.
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Link
            href="/safety"
            className="group rounded-md border border-medium-grey/30 bg-dozer-white p-7 transition-colors hover:border-dozer-yellow"
          >
            <h3 className="text-xl font-bold text-darker-grey">Safety</h3>
            <p className="mt-2 text-dark-grey">
              Detect people in blind spots, alert operators before contact, and keep
              an objective record of every event.
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-dark-grey group-hover:text-darker-grey">
              Explore Safety →
            </span>
          </Link>
          <Link
            href="/productivity"
            className="group rounded-md border border-medium-grey/30 bg-dozer-white p-7 transition-colors hover:border-dozer-yellow"
          >
            <h3 className="text-xl font-bold text-darker-grey">Productivity</h3>
            <p className="mt-2 text-dark-grey">
              Turn machine activity into job costs, utilization, and AI jobsite
              reports — so you can see where time and money actually go.
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-dark-grey group-hover:text-darker-grey">
              Explore Productivity →
            </span>
          </Link>
        </div>
      </Section>

      <CtaBand location="product" />
    </>
  );
}

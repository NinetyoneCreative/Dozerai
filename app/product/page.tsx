import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CtaLink } from "@/components/CtaLink";
import { SafeVideo } from "@/components/SafeVideo";
import { FeatureRow } from "@/components/FeatureRow";
import { SuiteFeatures } from "@/components/SuiteFeatures";
import { CtaBand } from "@/components/CtaBand";
import { ProductJsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { ASSETS } from "@/lib/site";
import { SAFETY_SUITE, PRODUCTIVITY_SUITE } from "@/lib/suites";

const DESCRIPTION =
  "Dozer is one AI system that puts eyes on your job site: rugged cameras and sensors on your equipment, real-time perception of people and conditions, and clear insights and alerts your team can act on — for both safety and productivity.";

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
            {/* In-page jumps to the two applications */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a href="#safety" className="font-medium text-dark-grey hover:text-darker-grey">
                ↓ Safety
              </a>
              <a href="#productivity" className="font-medium text-dark-grey hover:text-darker-grey">
                ↓ Productivity
              </a>
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

      {/* The system in detail: input (cameras) + output (dashboard) */}
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
            kicker="Insights & actions"
            title="Alerts in the cab. Answers on the dashboard."
            body="Operators get real-time warnings the moment a hazard appears. Supervisors get a single dashboard to review footage, events, productivity, and disputes — by machine and by map area."
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

      {/* Applications intro */}
      <Section tone="white" spacing="sm" aria-labelledby="apps-heading">
        <div className="max-w-3xl">
          <p className="kicker">What it helps you do</p>
          <h2 id="apps-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            One product, two applications
          </h2>
          <p className="mt-4 text-lg text-dark-grey">
            Safety and productivity aren&apos;t separate products — they&apos;re what
            the same system delivers once it understands your site. Safety is
            production-ready today; productivity analytics arrive in{" "}
            {PRODUCTIVITY_SUITE.timeline}.
          </p>
        </div>
      </Section>

      {/* ===================== SAFETY ===================== */}
      <Section id="safety" tone="light" spacing="lg" aria-labelledby="safety-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="kicker">{SAFETY_SUITE.name}</p>
            <h2
              id="safety-heading"
              className="mt-4 text-3xl font-bold leading-tight text-darker-grey sm:text-4xl"
            >
              {SAFETY_SUITE.heroHeadline}
            </h2>
            <p className="mt-5 max-w-xl text-lg text-dark-grey">{SAFETY_SUITE.heroSub}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CtaLink href="/demo" variant="primary" trackId="product_safety_intro">
                Book a 15-min intro
              </CtaLink>
              <CtaLink href="/demo#pricing" variant="ghost" trackId="product_safety_pricing">
                Get pricing
              </CtaLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-medium-grey/30 bg-black">
            <SafeVideo
              src={ASSETS.intelligenceHeroVideo}
              label="Dozer AI classifying personnel and vehicles around heavy equipment in real time."
              trackId="product_safety_video"
              ambient
              className="aspect-video w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Safety feature grid (Object Detection + Driver Alerts) */}
      <SuiteFeatures suite={SAFETY_SUITE} />

      {/* Safety visual highlights */}
      <Section tone="light" spacing="lg" aria-label="Safety capabilities in the field">
        <div className="space-y-20">
          <FeatureRow
            kicker="Object detection"
            title="Important objects in a chaotic environment"
            body="Computer vision classifies personnel, vehicles, and objects around the machine in real time — so the system knows the difference between a dirt pile and a person."
            points={[
              "Real-time detection of workers, equipment, and vehicles",
              "Exclusion-zone proximity monitoring around heavy equipment",
              "PPE compliance: hard hat, vest, and safety-gear verification",
            ]}
            media={{
              type: "video",
              src: ASSETS.importantObjectsVideo,
              label: "Computer vision classifying important objects on a busy jobsite.",
              trackId: "product_safety_objects_video",
            }}
          />

          <FeatureRow
            reverse
            kicker="Proximity monitoring"
            title="Centimeter-accurate proximity, as a virtual spotter"
            body="Point-cloud measurement assesses distance in real time and warns the operator the moment a person enters a defined exclusion zone."
            points={[
              "Real-time operator alerts as objects enter the danger zone",
              "Point-cloud visualization of the space around the machine",
              "A virtual spotter that never looks away",
            ]}
            media={{
              type: "video",
              src: ASSETS.proximityVideo,
              label: "Stereoscopic proximity measurement watching a machine's blind spots.",
              trackId: "product_safety_prox_video",
            }}
          />

          <FeatureRow
            kicker="Driver alerts"
            title="In-cab alerts now — supervisor review after"
            body="Operators get real-time audio and visual warnings for hazards, fatigue signals, and zone violations. Every flagged event is recorded, clipped, and saved to the safety event dashboard for review."
            points={[
              "In-cab audio + visual warnings the instant a hazard appears",
              "Supervisor view of all flagged events, clips, and incident history",
              "An objective record for documentation, training, and insurance",
            ]}
            media={{
              type: "image",
              src: ASSETS.inCabAlert,
              alt: "In-cab alert UI showing a high-risk object detected in the blind spot.",
            }}
          />
        </div>
      </Section>

      {/* ===================== PRODUCTIVITY ===================== */}
      <Section id="productivity" tone="white" spacing="lg" aria-labelledby="prod-heading">
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker">{PRODUCTIVITY_SUITE.name}</p>
          <h2
            id="prod-heading"
            className="mt-4 text-3xl font-bold leading-tight text-darker-grey sm:text-4xl"
          >
            {PRODUCTIVITY_SUITE.heroHeadline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-dark-grey">
            {PRODUCTIVITY_SUITE.heroSub}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaLink href="/demo" variant="primary" trackId="product_prod_early_access">
              Get early access
            </CtaLink>
            <CtaLink href="#job-cost" variant="secondary" trackId="product_prod_explore">
              See what&apos;s coming
            </CtaLink>
          </div>
          <p className="mt-4 text-sm text-medium-grey">
            Same cameras you can deploy today — new insight arriving in{" "}
            {PRODUCTIVITY_SUITE.timeline}.
          </p>
        </div>

        {/* "Built on the hardware you already have" explainer */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          {[
            {
              n: "01",
              t: "Already on the machine",
              d: "Runs on the same Dozer cameras deploying for safety today — no new hardware.",
            },
            {
              n: "02",
              t: "Activity becomes data",
              d: "Machine state, location, and cycle times get logged continuously and tied to project phase.",
            },
            {
              n: "03",
              t: "Data becomes decisions",
              d: "Job costs, utilization, AI reports, and heat maps — exported to the tools you already run.",
            },
          ].map((s) => (
            <div key={s.n} className="rounded-md border border-medium-grey/30 bg-dozer-white p-5">
              <span className="font-mono text-sm text-dozer-yellow">{s.n}</span>
              <p className="mt-1 font-medium text-darker-grey">{s.t}</p>
              <p className="mt-1 text-sm text-dark-grey">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Productivity feature grid (6 categories) */}
      <SuiteFeatures suite={PRODUCTIVITY_SUITE} />

      <CtaBand
        location="product"
        heading="See it on your own machine — book a 15-min intro"
        subheading="Start with safety today and get early access to productivity analytics as they roll out over the next 60–90 days."
      />
    </>
  );
}

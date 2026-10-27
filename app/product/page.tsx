import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CtaLink } from "@/components/CtaLink";
import { FeatureRow } from "@/components/FeatureRow";
import { SuiteFeatures } from "@/components/SuiteFeatures";
import { CtaBand } from "@/components/CtaBand";
import { AppTour } from "@/components/AppTour";
import { TabletShowcase } from "@/components/TabletShowcase";
import { CameraShowcase } from "@/components/CameraShowcase";
import { DetectionLegend, ProximityCard } from "@/components/ProductOverlays";
import { ProductJsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { ASSETS, EXTERNAL } from "@/lib/site";
import { SAFETY_SUITE, PRODUCTIVITY_SUITE } from "@/lib/suites";

const DESCRIPTION =
  "Dozer is one AI system that puts eyes on your job site: rugged cameras and sensors on your equipment, real-time perception of people and conditions, and clear insights and alerts your team can act on, for both safety and productivity.";

export const metadata: Metadata = buildMetadata({
  title: "Product, How Dozer's AI Job Site System Works",
  description: DESCRIPTION,
  path: "/product",
});

/** The five stages of the system, from hardware to action. */
const STAGES = [
  {
    n: "01",
    name: "Eyes on site",
    body: "Rugged, IP-rated cameras and depth sensors mount directly on your excavators, dozers, loaders, and haul trucks, giving every machine a 360° view of the people, equipment, and ground around it.",
  },
  {
    n: "02",
    name: "Data capture",
    body: "Each machine continuously captures video, depth and point-cloud measurements, GPS location, and machine state, a complete, time-stamped record of what happened, where, and when.",
  },
  {
    n: "03",
    name: "Data pipeline",
    body: "That data moves off the machine through a pipeline built for the field, processed at the edge for instant alerts and synced to the cloud for site-wide analysis.",
  },
  {
    n: "04",
    name: "Site intelligence",
    body: "AI perception makes sense of the scene: it classifies workers, vehicles, and objects, measures proximity in real time, and maps activity across the whole site.",
  },
  {
    n: "05",
    name: "Insights & actions",
    body: "The result reaches the people who need it, real-time alerts in the cab, and clear dashboards and reports for supervisors to review events, productivity, and disputes.",
  },
];

export default function ProductPage() {
  return (
    <>
      <ProductJsonLd name="Dozer AI" description={DESCRIPTION} path="/product" />

      {/* Hero */}
      <Section tone="light" spacing="lg" aria-labelledby="product-heading">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.45fr)]">
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
              your team can act on, for a safer, more productive site.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CtaLink href={EXTERNAL.booking} external variant="primary" trackId="product_hero_intro">
                Book a 15-min intro
              </CtaLink>
              <CtaLink href="#how-it-works" variant="secondary" trackId="product_hero_how">
                See how it works
              </CtaLink>
            </div>
          </div>
          {/* Assembly loop; its edges are feathered into the page colour so it has no frame */}
          <picture>
            <source
              media="(prefers-reduced-motion: reduce)"
              srcSet="/product-camera/camera-assembly.png"
            />
            {/* eslint-disable-next-line @next/next/no-img-element -- animated GIF, served as-is */}
            <img
              src="/product-camera/camera-assembly.gif"
              alt="The Dozer camera housing assembling around the depth camera piece by piece, then coming apart again."
              width={1000}
              height={562}
              className="block h-auto w-full"
            />
          </picture>
        </div>
      </Section>

      {/* How it works: the five stages, then the hardware they start from */}
      <Section id="how-it-works" tone="white" spacing="lg" aria-labelledby="how-heading">
        <div className="max-w-3xl">
          <p className="kicker">How it works</p>
          <h2 id="how-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            From the machine to a decision
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

      {/* The camera unit, with and without its housing */}
      <Section id="camera" tone="light" spacing="lg" aria-labelledby="camera-heading">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <div>
            <p className="kicker">The camera</p>
            <h2 id="camera-heading" className="mt-3 text-3xl font-bold text-darker-grey sm:text-4xl">
              Cameras and sensors built for the jobsite
            </h2>
            <p className="mt-4 text-lg text-dark-grey">
              Each unit pairs a stereoscopic depth camera with a rugged housing that
              bolts straight onto the machine. Take the housing off to see
              what&apos;s inside.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "360° view of the cabin, attachment, and everything around the machine",
                "Stereoscopic depth sensing for centimeter-accurate proximity",
                "IP-6/7-rated housing that withstands dust, water, and impact",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-dark-grey">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dozer-yellow"
                    aria-hidden="true"
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <CameraShowcase />
        </div>
      </Section>

      {/* The in-cab operator tablet (#driver-alerts is linked from the home page) */}
      <Section id="in-cab" tone="dark" spacing="lg" aria-labelledby="in-cab-heading">
        <div
          id="driver-alerts"
          className="grid scroll-mt-28 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]"
        >
          <div>
            <p className="kicker">In the cab</p>
            <h2 id="in-cab-heading" className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Every blind spot, on one screen
            </h2>
            <p className="mt-4 text-lg text-dozer-white/80">
              A tablet in the cab shows the operator live front, side, and rear
              cameras around a top-down view of the machine. Dozer boxes and labels
              every truck, car, and person it sees, and the zone turns from yellow
              to orange to red as something gets closer.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Front, side, and rear cameras, all on one screen",
                "Live distance and angle on every object Dozer detects",
                "Color-coded zones that escalate as something closes in",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-dozer-white/90">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dozer-yellow"
                    aria-hidden="true"
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <TabletShowcase />
        </div>
      </Section>

      {/* The desktop app, tab by tab */}
      <Section id="platform" tone="white" spacing="lg" aria-labelledby="platform-heading">
        <div className="max-w-3xl">
          <p className="kicker">Inside the Dozer app</p>
          <h2 id="platform-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            See exactly what your team sees
          </h2>
          <p className="mt-4 text-lg text-dark-grey">
            The Dozer app is where the footage becomes answers. Walk through it the
            way your supervisors do, from the daily summary down to a single
            machine&apos;s clip.
          </p>
        </div>
        <div className="mt-10">
          <AppTour />
        </div>
      </Section>

      {/* ===================== SAFETY ===================== */}
      <Section id="safety" tone="light" spacing="lg" aria-labelledby="safety-heading">
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker">{SAFETY_SUITE.name}</p>
          <h2
            id="safety-heading"
            className="mt-4 text-3xl font-bold leading-tight text-darker-grey sm:text-4xl"
          >
            {SAFETY_SUITE.heroHeadline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-dark-grey">
            {SAFETY_SUITE.heroSub}
          </p>
        </div>

        <div className="mt-16 space-y-20">
          <div id="object-detection" className="scroll-mt-28">
            <FeatureRow
              kicker="Object detection"
              title="Important objects in a chaotic environment"
              body="Computer vision classifies personnel, vehicles, and objects around the machine in real time, so the system knows the difference between a dirt pile and a person."
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
              overlay={
                <div className="absolute left-3 top-3 right-3">
                  <DetectionLegend />
                </div>
              }
            />
          </div>

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
            overlay={<ProximityCard />}
          />
        </div>
      </Section>

      {/* ===================== PRODUCTIVITY ===================== */}
      <Section
        id="productivity"
        tone="white"
        spacing="lg"
        className="pb-0 sm:pb-0"
        aria-labelledby="prod-heading"
      >
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
        </div>
      </Section>

      {/* Productivity feature grid (6 categories) */}
      <SuiteFeatures suite={PRODUCTIVITY_SUITE} />

      <CtaBand
        location="product"
        heading="See it on your own machine, book a 15-min intro"
        subheading="We'll walk you through live footage, in-cab alerts, and the app, using machines in the field."
      />
    </>
  );
}

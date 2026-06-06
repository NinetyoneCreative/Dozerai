import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CtaLink } from "@/components/CtaLink";
import { SafeVideo } from "@/components/SafeVideo";
import { FeatureRow } from "@/components/FeatureRow";
import { SuiteFeatures } from "@/components/SuiteFeatures";
import { StatusBadge } from "@/components/StatusBadge";
import { CtaBand } from "@/components/CtaBand";
import { ProductJsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { ASSETS } from "@/lib/site";
import { SAFETY_SUITE } from "@/lib/suites";

export const metadata: Metadata = buildMetadata({
  title: SAFETY_SUITE.title,
  description: SAFETY_SUITE.metaDescription,
  path: "/safety",
});

export default function SafetyPage() {
  return (
    <>
      <ProductJsonLd
        name={SAFETY_SUITE.name}
        description={SAFETY_SUITE.metaDescription}
        path="/safety"
      />

      {/* Hero */}
      <Section tone="light" spacing="lg" aria-labelledby="safety-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <p className="kicker">Safety Intelligence Suite</p>
              <StatusBadge status={SAFETY_SUITE.status} />
            </div>
            <h1
              id="safety-heading"
              className="mt-4 text-4xl font-bold leading-[1.1] text-darker-grey sm:text-5xl"
            >
              {SAFETY_SUITE.heroHeadline}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-dark-grey">{SAFETY_SUITE.heroSub}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CtaLink href="/demo" variant="primary" trackId="safety_hero_intro">
                Book a 15-min intro
              </CtaLink>
              <CtaLink href="#object-detection" variant="secondary" trackId="safety_hero_explore">
                Explore the suite
              </CtaLink>
              <CtaLink href="/demo#pricing" variant="ghost" trackId="safety_hero_pricing">
                Get pricing
              </CtaLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-medium-grey/30 bg-black">
            <SafeVideo
              src={ASSETS.intelligenceHeroVideo}
              label="Dozer AI classifying personnel and vehicles around heavy equipment in real time."
              trackId="safety_hero_video"
              ambient
              className="aspect-video w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Suite feature grid (Object Detection + Driver Alerts) */}
      <SuiteFeatures suite={SAFETY_SUITE} />

      {/* Visual highlights */}
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
              trackId: "safety_objects_video",
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
              trackId: "safety_prox_video",
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

      <CtaBand location="safety" />
    </>
  );
}

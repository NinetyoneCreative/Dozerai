import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CtaLink } from "@/components/CtaLink";
import { SafeVideo } from "@/components/SafeVideo";
import { FeatureRow } from "@/components/FeatureRow";
import { CtaBand } from "@/components/CtaBand";
import { ProductJsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { ASSETS } from "@/lib/site";

const DESCRIPTION =
  "AI-powered proximity detection and computer vision for heavy equipment: classify people and vehicles, alert operators in-cab about blind-spot hazards, and record every safety event for review.";

export const metadata: Metadata = buildMetadata({
  title: "AI Proximity Detection & Computer Vision for Heavy Equipment",
  description: DESCRIPTION,
  path: "/intelligence",
});

export default function IntelligencePage() {
  return (
    <>
      <ProductJsonLd
        name="Dozer.ai Intelligence"
        description={DESCRIPTION}
        path="/intelligence"
      />

      {/* Hero */}
      <Section tone="light" spacing="lg" aria-labelledby="intel-heading">
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker">Intelligence</p>
          <h1
            id="intel-heading"
            className="mt-4 text-4xl font-bold leading-[1.1] text-darker-grey sm:text-5xl"
          >
            Enhance safety and gather insights with AI-powered cameras
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-dark-grey">
            Unparalleled situational awareness. Dozer&apos;s computer vision
            collects video data for safety, productivity, and security — and
            turns a chaotic jobsite into real-time operator alerts.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaLink href="/demo" variant="primary" trackId="intel_hero_intro">
              Book a 15-min intro
            </CtaLink>
            <CtaLink href="/demo#pricing" variant="secondary" trackId="intel_hero_pricing">
              Get pricing
            </CtaLink>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-md border border-medium-grey/30 bg-black">
          <SafeVideo
            src={ASSETS.intelligenceHeroVideo}
            label="Dozer AI classifying personnel and vehicles around heavy equipment in real time."
            trackId="intel_hero_video"
            ambient
            className="aspect-video w-full object-cover"
          />
        </div>
      </Section>

      {/* Features */}
      <Section tone="white" spacing="lg" aria-label="Intelligence capabilities">
        <div className="space-y-20">
          <FeatureRow
            kicker="Computer vision"
            title="Important objects in a chaotic environment"
            body="Computer vision classifies personnel, vehicles, and objects around the machine — so the system knows the difference between a dirt pile and a person."
            points={[
              "In-cabin alerts about high-risk objects in blind spots",
              "Safety events alerted, recorded, and saved for review",
              "Cuts through jobsite clutter to flag what actually matters",
            ]}
            media={{
              type: "video",
              src: ASSETS.importantObjectsVideo,
              label: "Computer vision classifying important objects on a busy jobsite.",
              trackId: "intel_objects_video",
            }}
          />

          <FeatureRow
            reverse
            kicker="Centimeter accuracy"
            title="Proximity measurements with centimeter accuracy"
            body="Point-cloud measurements assess proximity in real time, acting as a virtual spotter and warning operators before contact."
            points={[
              "Real-time operator alerts as objects enter the danger zone",
              "Point-cloud visualization of the space around the machine",
              "A virtual spotter that never looks away",
            ]}
            media={{
              type: "image",
              src: ASSETS.pointCloudGif,
              alt: "Point-cloud proximity visualization around heavy equipment.",
            }}
          />

          <FeatureRow
            kicker="GPS + 360° video"
            title="360-degree video + GPS"
            body="GPS plus 360° vision shows how and where work was done — and lets you isolate footage by map area."
            points={[
              "Resolve disputes and monitor productivity by location",
              "Recover near-misses and incidents for documentation or training",
              "Isolate video by the exact area on the map",
            ]}
            media={{
              type: "image",
              src: ASSETS.inCabAlert,
              alt: "In-cab alert UI showing a high-risk object detected in the blind spot.",
            }}
          />

          <FeatureRow
            reverse
            kicker="In the field"
            title="Computer vision in the field"
            body="Dozer tags highlight other vehicles and barriers, and you can mark overhead lines and utilities on the map to warn operators in-cab."
            points={[
              "Tag other vehicles and barriers automatically",
              "Mark overhead lines and buried utilities on the map",
              "Warn operators in-cab before they reach a hazard",
            ]}
            media={{
              type: "image",
              src: ASSETS.fieldOfView,
              alt: "Computer vision tagging vehicles, barriers, and utilities in the field.",
            }}
          />
        </div>
      </Section>

      <CtaBand location="intelligence" />
    </>
  );
}

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
  "Durable IP-rated heavy equipment cameras with a 360° spherical field of view, stereoscopic proximity measurement, and live streaming — mounted directly on the machine.";

export const metadata: Metadata = buildMetadata({
  title: "Heavy Equipment Cameras — 360° View & Proximity Detection",
  description: DESCRIPTION,
  path: "/cameras",
});

export default function CamerasPage() {
  return (
    <>
      <ProductJsonLd
        name="Dozer.ai Cameras"
        description={DESCRIPTION}
        path="/cameras"
      />

      {/* Hero */}
      <Section tone="light" spacing="lg" aria-labelledby="cameras-heading">
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker">Cameras</p>
          <h1
            id="cameras-heading"
            className="mt-4 text-4xl font-bold leading-[1.1] text-darker-grey sm:text-5xl"
          >
            Durable cameras with wide fields of view, proximity measurement, and
            360° of vision
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-dark-grey">
            Rugged, machine-mounted construction equipment safety cameras built
            to survive the jobsite — and see everything around the machine, all
            the time.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaLink href="/demo" variant="primary" trackId="cameras_hero_intro">
              Book a 15-min intro
            </CtaLink>
            <CtaLink href="/demo#pricing" variant="secondary" trackId="cameras_hero_pricing">
              Get pricing
            </CtaLink>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-md border border-medium-grey/30 bg-black">
          <SafeVideo
            src={ASSETS.camerasHeroVideo}
            label="Dozer cameras mounted on heavy equipment, showing 360° coverage in the field."
            trackId="cameras_hero_video"
            ambient
            className="aspect-video w-full object-cover"
          />
        </div>
      </Section>

      {/* Features */}
      <Section tone="white" spacing="lg" aria-label="Camera capabilities">
        <div className="space-y-20">
          <FeatureRow
            kicker="360° awareness"
            title="Spherical field of view + live streaming"
            body="A 360° view sees the cabin, the bucket, and everything around the machine — streamed live and recorded for later."
            points={[
              "Survey productivity across the whole work area",
              "Dispute rework with a complete record of what happened",
              "Review safety events from every angle",
              "IP-6/7-rated housing withstands harsh jobsite elements",
            ]}
            media={{
              type: "image",
              src: ASSETS.fieldOfView,
              alt: "360-degree field of view around an excavator captured by Dozer cameras.",
            }}
          />

          <FeatureRow
            reverse
            kicker="Virtual spotters"
            title="Stereoscopic vision constantly watches blind spots"
            body="Perimeter-mounted proximity cameras act as virtual spotters — stereoscopic depth sensing watches the blind spots so nothing is missed."
            points={[
              "Continuous coverage of pinch points and swing zones",
              "Centimeter-level proximity measurement in real time",
              "Built for excavators, dozers, loaders, haul trucks, and graders",
            ]}
            media={{
              type: "video",
              src: ASSETS.proximityVideo,
              label: "Stereoscopic proximity measurement watching a machine's blind spots.",
              trackId: "cameras_prox_video",
            }}
          />
        </div>
      </Section>

      <CtaBand location="cameras" />
    </>
  );
}

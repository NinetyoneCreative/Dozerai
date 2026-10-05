import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { AssetSlot } from "@/components/AssetSlot";
import { BrowserChrome } from "@/components/BrowserChrome";
import { CtaLink } from "@/components/CtaLink";
import { WalkthroughCta } from "@/components/WalkthroughCta";
import { buildMetadata } from "@/lib/seo";
import { ASSETS } from "@/content/assets";
import { PLATFORM } from "@/content/platform";

export const metadata: Metadata = buildMetadata({
  title: "Command Center, The Web Dashboard for Jobsite Operations",
  description:
    "The Dozer AI Command Center gives supervisors live equipment tracking, utilization and production versus plan, automated site summaries, and safety events, all in one web dashboard.",
  path: "/platform",
});

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <Section tone="light" spacing="lg" aria-labelledby="platform-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="kicker">{PLATFORM.eyebrow}</p>
            <h1 id="platform-heading" className="mt-5 text-4xl font-bold leading-[1.05] text-darker-grey sm:text-5xl">
              {PLATFORM.h1}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-dark-grey">{PLATFORM.opening}</p>
            <div className="mt-8">
              <CtaLink href="/demo" variant="primary" trackId="platform_hero_demo">
                Book a walkthrough
              </CtaLink>
            </div>
          </div>
          <BrowserChrome>
            <AssetSlot {...ASSETS.platformDashboard} priority className="object-cover" />
          </BrowserChrome>
        </div>
      </Section>

      {/* Features */}
      <Section tone="white" spacing="lg" aria-labelledby="feat-heading" className="reveal">
        <div className="max-w-3xl">
          <p className="kicker">What you get</p>
          <h2 id="feat-heading" className="mt-4 text-3xl font-bold text-darker-grey sm:text-4xl">
            One dashboard for the whole operation
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PLATFORM.features.map((f) => (
            <div key={f.title} className="rounded-md border border-medium-grey/30 bg-white p-6">
              <h3 className="text-lg font-bold text-darker-grey">{f.title}</h3>
              <p className="mt-2 text-sm text-dark-grey">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Live map + reporting screenshots */}
      <section className="bg-surface-dark py-20 sm:py-28" aria-label="Inside the Command Center">
        <div className="mx-auto grid max-w-container gap-8 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <BrowserChrome url="app.dozer.ai/map">
              <AssetSlot {...ASSETS.platformMap} className="object-cover" />
            </BrowserChrome>
            <p className="mt-3 text-center font-mono text-xs uppercase tracking-wide text-dozer-white/50">
              Live operations map
            </p>
          </div>
          <div>
            <BrowserChrome url="app.dozer.ai/reports">
              <AssetSlot {...ASSETS.platformReport} className="object-cover" />
            </BrowserChrome>
            <p className="mt-3 text-center font-mono text-xs uppercase tracking-wide text-dozer-white/50">
              Automated site summary
            </p>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <Section tone="light" spacing="lg" aria-labelledby="int-heading" className="reveal">
        <div className="max-w-3xl">
          <p className="kicker">Integrations</p>
          <h2 id="int-heading" className="mt-4 text-3xl font-bold text-darker-grey sm:text-4xl">
            Your data, in the systems you already run
          </h2>
          <p className="mt-4 text-lg text-dark-grey">
            Utilization and cost-code data exports to the tools your team works in every day.
          </p>
        </div>
        <ul className="mt-8 flex flex-wrap gap-3">
          {PLATFORM.integrations.map((name) => (
            <li key={name} className="rounded-md border border-medium-grey/40 bg-white px-5 py-3 font-mono text-sm text-darker-grey">
              {name}
            </li>
          ))}
        </ul>
      </Section>

      <WalkthroughCta trackId="platform_cta" />
    </>
  );
}

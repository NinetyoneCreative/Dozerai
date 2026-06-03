import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Dozer.ai collects, uses, and protects your information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <Section tone="white" spacing="lg" aria-labelledby="privacy-heading">
      <div className="mx-auto max-w-3xl">
        <p className="kicker">Legal</p>
        <h1 id="privacy-heading" className="mt-3 text-4xl font-bold">
          Privacy Policy
        </h1>
        {/* TODO: replace this stub with the real, legally-reviewed policy before launch. */}
        <p className="mt-3 rounded-md bg-dozer-white px-4 py-3 text-sm text-dark-grey">
          <strong>Placeholder.</strong> This is a stub page wired into the site
          structure. Replace with the approved Privacy Policy before launch.
        </p>
        <div className="mt-8 space-y-6 text-dark-grey">
          <p>
            Dozer.ai (&ldquo;Dozer,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
            respects your privacy. This policy explains what information we
            collect, how we use it, and the choices you have.
          </p>
          <h2 className="text-xl font-medium text-darker-grey">Information we collect</h2>
          <p>
            We collect the information you provide when you request a demo (such
            as your name, work email, company, and optional phone and fleet size)
            and standard analytics data about how you use our site.
          </p>
          <h2 className="text-xl font-medium text-darker-grey">How we use it</h2>
          <p>
            We use your information to respond to demo requests, provide our
            services, and improve our products. We do not sell your personal
            information.
          </p>
          <h2 className="text-xl font-medium text-darker-grey">Contact</h2>
          <p>
            Questions about this policy? Email{" "}
            <a className="underline" href="mailto:privacy@dozer.ai">
              privacy@dozer.ai
            </a>
            . {/* TODO: confirm contact address */}
          </p>
        </div>
      </div>
    </Section>
  );
}

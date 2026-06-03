import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "The terms that govern your use of Dozer.ai and our services.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <Section tone="white" spacing="lg" aria-labelledby="terms-heading">
      <div className="mx-auto max-w-3xl">
        <p className="kicker">Legal</p>
        <h1 id="terms-heading" className="mt-3 text-4xl font-bold">
          Terms of Service
        </h1>
        {/* TODO: replace this stub with the real, legally-reviewed terms before launch. */}
        <p className="mt-3 rounded-md bg-dozer-white px-4 py-3 text-sm text-dark-grey">
          <strong>Placeholder.</strong> This is a stub page wired into the site
          structure. Replace with the approved Terms of Service before launch.
        </p>
        <div className="mt-8 space-y-6 text-dark-grey">
          <p>
            These Terms of Service govern your access to and use of the Dozer.ai
            website and services. By using our site, you agree to these terms.
          </p>
          <h2 className="text-xl font-medium text-darker-grey">Use of the site</h2>
          <p>
            You agree to use the site lawfully and not to misuse or interfere
            with it. All content is provided for informational purposes.
          </p>
          <h2 className="text-xl font-medium text-darker-grey">Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a className="underline" href="mailto:legal@dozer.ai">
              legal@dozer.ai
            </a>
            . {/* TODO: confirm contact address */}
          </p>
        </div>
      </div>
    </Section>
  );
}

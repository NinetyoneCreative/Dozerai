import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";
import { buildMetadata } from "@/lib/seo";
import { TERMS_OF_SERVICE } from "@/lib/legal";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "The terms that govern your use of Dozer.ai and our services.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return <LegalDoc doc={TERMS_OF_SERVICE} />;
}

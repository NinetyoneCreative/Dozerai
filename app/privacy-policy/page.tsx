import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";
import { buildMetadata } from "@/lib/seo";
import { PRIVACY_POLICY } from "@/lib/legal";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Dozer AI, Inc. collects, uses, discloses, and safeguards your personal information, in compliance with GDPR and CCPA/CPRA.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <LegalDoc doc={PRIVACY_POLICY} />;
}

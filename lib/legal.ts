/**
 * Legal copy — Terms of Service and Privacy Policy.
 *
 * Reproduced verbatim from the canonical Dozer marketing site. Do not edit the
 * wording here without legal sign-off; update the effectiveDate when the source
 * document changes.
 */

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "lines"; lines: string[] };

export interface LegalSection {
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalDocument {
  title: string;
  effectiveDate: string;
  intro: string[];
  sections: LegalSection[];
  closing?: string;
}

export const TERMS_OF_SERVICE: LegalDocument = {
  title: "Terms of Service",
  effectiveDate: "June 1, 2025",
  intro: [
    'These Terms of Service ("Terms") govern your use of the website located at https://www.dozer.ai ("Site") and any hardware, software, dashboards, and services (collectively, the "Services") provided by Dozer AI, Inc. ("Dozer," "we," "us," or "our"). By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, you must not use our Services.',
  ],
  sections: [
    {
      heading: "1. Eligibility",
      blocks: [
        {
          type: "p",
          text: "You may use the Services only if you are legally capable of forming a binding contract and are not barred under applicable law from doing so. By using the Services on behalf of a company, you represent that you have the authority to bind that company.",
        },
      ],
    },
    {
      heading: "2. Use of Services",
      blocks: [
        {
          type: "p",
          text: "Dozer provides a safety monitoring system installed on construction equipment, which includes AI-enabled video cameras, GPS tracking, and a cloud-based dashboard. You agree to:",
        },
        {
          type: "ul",
          items: [
            "Use the Services only for lawful purposes",
            "Ensure compliance with all applicable laws and regulations (e.g., labor laws, surveillance notice requirements)",
            "Not attempt to reverse-engineer, decompile, or tamper with the Services",
          ],
        },
        {
          type: "p",
          text: "Enterprise customers are solely responsible for obtaining any necessary consent or providing appropriate notice to individuals (e.g., equipment operators) whose data may be collected by the Dozer system.",
        },
      ],
    },
    {
      heading: "3. Account Registration",
      blocks: [
        {
          type: "p",
          text: "To access certain Services, you may be required to register an account. You agree to:",
        },
        {
          type: "ul",
          items: [
            "Provide accurate, complete, and current information",
            "Maintain the confidentiality of your login credentials",
            "Notify us immediately of any unauthorized use of your account",
          ],
        },
        { type: "p", text: "You are responsible for all activities under your account." },
      ],
    },
    {
      heading: "4. Intellectual Property",
      blocks: [
        {
          type: "p",
          text: "All content and technology provided by Dozer, including software, documentation, graphics, video, and trademarks, are owned by or licensed to Dozer and are protected under applicable intellectual property laws.",
        },
        {
          type: "p",
          text: "You may not copy, modify, distribute, sell, or lease any part of the Services without our written permission.",
        },
      ],
    },
    {
      heading: "5. Data & Privacy",
      blocks: [
        {
          type: "p",
          text: "Your use of the Services is subject to our Privacy Policy, which describes how we collect and use data, including video, GPS, and telemetry from construction equipment. You are responsible for ensuring your own compliance with privacy laws when using our Services.",
        },
      ],
    },
    {
      heading: "6. Service Availability & Modifications",
      blocks: [
        {
          type: "p",
          text: "We strive to provide reliable Services but do not guarantee uninterrupted availability. We may suspend or modify features of the Services at any time for maintenance, upgrades, or other reasons. We will provide notice where practicable.",
        },
      ],
    },
    {
      heading: "7. Fees and Payment",
      blocks: [
        {
          type: "p",
          text: "If your use of the Services is subject to a paid subscription or enterprise agreement, fees and billing terms will be governed by your separate contract with Dozer. You agree to pay all applicable fees on time and in accordance with the agreed terms.",
        },
      ],
    },
    {
      heading: "8. Termination",
      blocks: [
        {
          type: "p",
          text: "We may suspend or terminate your access to the Services at our discretion, including for:",
        },
        {
          type: "ul",
          items: [
            "Violations of these Terms",
            "Fraudulent or unlawful activity",
            "Nonpayment under a service agreement",
          ],
        },
        {
          type: "p",
          text: "You may also terminate your use of the Services at any time. Upon termination, your rights to access or use the Services will immediately cease.",
        },
      ],
    },
    {
      heading: "9. Disclaimers",
      blocks: [
        {
          type: "p",
          text: 'THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." DOZER DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. DOZER DOES NOT GUARANTEE THAT THE SERVICES WILL BE ERROR-FREE OR THAT SAFETY EVENTS WILL ALWAYS BE IDENTIFIED OR ALERTED.',
        },
      ],
    },
    {
      heading: "10. Limitation of Liability",
      blocks: [
        {
          type: "p",
          text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, DOZER SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS, OR REVENUE, ARISING OUT OF OR RELATING TO THE SERVICES.",
        },
        {
          type: "p",
          text: "OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS RELATING TO THE SERVICES IS LIMITED TO THE GREATER OF $100 OR THE AMOUNT YOU PAID TO DOZER FOR THE SERVICES IN THE SIX MONTHS PRECEDING THE CLAIM.",
        },
      ],
    },
    {
      heading: "11. Indemnification",
      blocks: [
        {
          type: "p",
          text: "You agree to indemnify and hold harmless Dozer and its affiliates from and against any claims, liabilities, damages, and expenses arising from your use of the Services, violation of these Terms, or infringement of any third-party rights.",
        },
      ],
    },
    {
      heading: "12. Governing Law",
      blocks: [
        {
          type: "p",
          text: "These Terms are governed by the laws of the State of California, without regard to conflict of laws principles. Any dispute shall be resolved in the state or federal courts located in Alameda County, California.",
        },
      ],
    },
    {
      heading: "13. Updates to Terms",
      blocks: [
        {
          type: "p",
          text: 'We may revise these Terms from time to time. When we do, we will update the "Effective Date" above. Your continued use of the Services after any update constitutes your acceptance of the revised Terms.',
        },
      ],
    },
    {
      heading: "14. Contact Us",
      blocks: [
        { type: "p", text: "For questions about these Terms, contact us at:" },
        {
          type: "lines",
          lines: ["Dozer AI, Inc.", "6775 Skyview Drive", "Oakland, CA 94605", "Email: support@dozer.ai"],
        },
      ],
    },
  ],
  closing: "Thank you for using Dozer to improve jobsite safety and equipment performance.",
};

export const PRIVACY_POLICY: LegalDocument = {
  title: "Privacy Policy",
  effectiveDate: "June 1, 2025",
  intro: [
    'This Privacy Policy explains how Dozer AI, Inc. ("Dozer," "we," "our," or "us") collects, uses, discloses, and safeguards your Personal Information when you visit our website (https://www.dozer.ai), interact with us online or offline, or use our safety platform ("Dozer") installed on construction equipment. This Policy is compliant with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA).',
  ],
  sections: [
    {
      heading: "1. Information We Collect",
      blocks: [
        { type: "h3", text: "A. Website & Online Interactions" },
        { type: "p", text: "We collect Personal Information when you:" },
        {
          type: "ul",
          items: [
            "Visit our website",
            "Request a demo or submit a contact form",
            "Download resources (e.g., eBooks, whitepapers)",
            "Subscribe to newsletters or marketing emails",
            "Interact with us via social media, webinars, or events",
          ],
        },
        { type: "p", text: "Collected Data:" },
        {
          type: "ul",
          items: [
            "Name, email address, phone number",
            "Company name and role",
            "IP address and browser/device information",
            "Communications and inquiries",
          ],
        },
        { type: "h3", text: "B. Product Use (Construction Equipment)" },
        {
          type: "p",
          text: "We collect data through our hardware/software system installed on construction equipment.",
        },
        { type: "p", text: "Collected Data:" },
        {
          type: "ul",
          items: [
            "Video footage (in-cab and/or exterior cameras)",
            "GPS location and telemetry data",
            "Equipment usage metrics (e.g., speed, location, runtime)",
            "Event logs and alerts generated by the Dozer system",
          ],
        },
        {
          type: "p",
          text: "Dozer does not collect biometric data (e.g., facial recognition, fingerprints) or in-cab audio.",
        },
        { type: "h3", text: "C. Job Applicants" },
        { type: "p", text: "When you apply for a job at Dozer, we collect:" },
        {
          type: "ul",
          items: [
            "Contact information",
            "Resume/CV and work history",
            "Interview notes and assessments",
            "References and background check details (if applicable)",
          ],
        },
      ],
    },
    {
      heading: "2. How We Use Personal Information",
      blocks: [
        { type: "p", text: "We use the data we collect to:" },
        {
          type: "ul",
          items: [
            "Provide and operate the Dozer platform and services",
            "Deliver customer support and resolve technical issues",
            "Monitor and improve jobsite safety and equipment performance",
            "Develop product improvements and analytics",
            "Communicate with you about our services and updates",
            "Manage recruitment and evaluate candidates",
            "Comply with legal obligations",
          ],
        },
      ],
    },
    {
      heading: "3. Legal Bases for Processing (GDPR)",
      blocks: [
        {
          type: "p",
          text: "We rely on the following legal bases to process your Personal Information:",
        },
        {
          type: "ul",
          items: [
            "Consent (e.g., for marketing communications)",
            "Contract (e.g., to fulfill service agreements with clients)",
            "Legitimate interests (e.g., system improvement, fraud prevention)",
            "Legal obligations (e.g., regulatory compliance)",
          ],
        },
      ],
    },
    {
      heading: "4. When We Act as a Service Provider / Processor",
      blocks: [
        {
          type: "p",
          text: "When Dozer provides services to enterprise customers (e.g., subcontractors, general contractors), we may process data on their behalf. In such cases, the customer is the data controller, and we are a service provider or processor.",
        },
        {
          type: "p",
          text: "We require all enterprise clients to obtain appropriate consent or provide notice to their employees, subcontractors, or operators whose data is processed through our system.",
        },
      ],
    },
    {
      heading: "5. Sharing and Disclosure",
      blocks: [
        { type: "p", text: "We may share your Personal Information with:" },
        {
          type: "ul",
          items: [
            "Cloud hosting and storage providers",
            "System integrators and analytics vendors",
            "Contractors performing work on our behalf",
            "Enterprise customers (for whom we process operator data)",
            "Legal or regulatory authorities when required",
            "Potential acquirers during business transitions",
          ],
        },
        { type: "p", text: "We do not sell personal information." },
      ],
    },
    {
      heading: "6. Data Retention",
      blocks: [
        { type: "p", text: "We retain Personal Information only as long as necessary to:" },
        {
          type: "ul",
          items: [
            "Provide our services",
            "Fulfill the purposes outlined in this policy",
            "Comply with legal and contractual obligations",
          ],
        },
      ],
    },
    {
      heading: "7. Your Privacy Rights",
      blocks: [
        { type: "h3", text: "Under GDPR (EEA, UK, Switzerland):" },
        {
          type: "ul",
          items: [
            "Right to access, correct, or delete your data",
            "Right to restrict or object to processing",
            "Right to data portability",
            "Right to lodge a complaint with your supervisory authority",
          ],
        },
        { type: "h3", text: "Under CCPA/CPRA (California residents):" },
        {
          type: "ul",
          items: [
            "Right to know what data we collect and how we use it",
            "Right to access and delete your data",
            "Right to correct inaccurate data",
            "Right to opt out of sale or sharing (if applicable)",
            "Right to limit use of sensitive data (not applicable in our case)",
          ],
        },
        {
          type: "p",
          text: "To exercise your rights, contact us at support@dozer.ai. We may verify your identity before fulfilling your request.",
        },
      ],
    },
    {
      heading: "8. Cookies and Tracking",
      blocks: [
        { type: "p", text: "Our website may use cookies and similar technologies to:" },
        {
          type: "ul",
          items: [
            "Improve site performance",
            "Measure traffic and usage",
            "Personalize user experiences",
          ],
        },
        {
          type: "p",
          text: "You can manage cookie preferences via your browser settings or opt-out tools linked in our Cookie Policy [coming soon].",
        },
      ],
    },
    {
      heading: "9. Data Transfers",
      blocks: [
        {
          type: "p",
          text: "We store and process Personal Information primarily in the United States. Where required, we use safeguards like Standard Contractual Clauses for international data transfers.",
        },
      ],
    },
    {
      heading: "10. Children's Privacy",
      blocks: [
        {
          type: "p",
          text: "Dozer is not intended for children under 16, and we do not knowingly collect data from them. If we become aware of such data, we will delete it promptly.",
        },
      ],
    },
    {
      heading: "11. Updates to This Policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the effective date above and posting a notice on our website.",
        },
      ],
    },
    {
      heading: "12. Contact Us",
      blocks: [
        {
          type: "p",
          text: "If you have questions about this Privacy Policy or your data, contact:",
        },
        {
          type: "lines",
          lines: [
            "Dozer AI, Inc.",
            "6775 Skyview Drive",
            "Oakland, CA 94605",
            "Email: support@dozer.ai",
            "Website: https://www.dozer.ai",
          ],
        },
      ],
    },
  ],
  closing: "Thank you for trusting Dozer to help keep your job sites safe and efficient.",
};

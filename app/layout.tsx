import type { Metadata } from "next";
import "./globals.css";
import { gotham, shareTechMono } from "./fonts";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Analytics } from "@/components/Analytics";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Dozer.ai: AI Perceptual Intelligence for Heavy Job Sites",
    template: "%s | Dozer.ai",
  },
  description: SITE.description,
  applicationName: "Dozer.ai",
  keywords: [
    "excavator blind spot camera",
    "heavy equipment backup camera",
    "proximity detection system",
    "construction equipment safety camera",
    "dozer backover prevention",
    "heavy equipment safety system",
  ],
  robots: { index: true, follow: true },
  icons: { icon: "/dozer-logo.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${gotham.variable} ${shareTechMono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-dozer-yellow focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <OrganizationJsonLd />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}

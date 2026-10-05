/**
 * Central site configuration: canonical URL, nav, external links, and the
 * remote brand-asset URLs. Keeping these in one place makes the TODO swaps
 * (login URL, social links, asset hosts) easy to find before launch.
 */

export const SITE = {
  name: "Dozer.ai",
  // TODO: confirm production domain before launch.
  url: "https://www.dozer.ai",
  tagline:
    "An intelligent system of cameras and sensors that monitors heavy equipment in the field.",
  description:
    "Dozer is an AI perceptual intelligence system for heavy job sites. Cameras and sensors on your equipment see the people, machines, and conditions across complex sites, and turn that into safer, more productive operations.",
};

export interface NavChild {
  label: string;
  href: string;
}
export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/product" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export const EXTERNAL = {
  // Login goes to the customer beta app (kept from current site).
  login: "https://beta.app.dozer.ai",
  // HubSpot meetings link for the 15-minute intro call.
  booking: "https://meetings-na2.hubspot.com/mike-valdez/dozer-intro-call",
};

/** Direct contact details. */
export const CONTACT = {
  email: "support@dozer.ai",
  responseTime: "within one business day",
};

/** Social profiles for the footer. Only LinkedIn is live today. */
export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/dozer-ai/" },
] as const;

/** Remote brand assets (existing S3 / dozer.ai hosts). */
export const ASSETS = {
  logoHeader: "/dozer-logo.svg", // self-hosted brand wordmark (public/dozer-logo.svg)
  logoFooter:
    "https://dozer-public-assets.s3.us-east-2.amazonaws.com/dozer-logo-footer.png",
  footerVehicles: "https://www.dozer.ai/footer-vehicles.png",
  camerasHeroVideo:
    "https://dozer-public-assets.s3.us-east-2.amazonaws.com/cameras_hero.mp4",
  intelligenceHeroVideo:
    "https://dozer-public-assets.s3.us-east-2.amazonaws.com/intelligence_hero.mp4",
  importantObjectsVideo:
    "https://dozer-public-assets.s3.us-east-2.amazonaws.com/important_objects.mp4",
  proximityVideo:
    "https://dozer-public-assets.s3.us-east-2.amazonaws.com/prox_measurements.mp4",
  inCabAlert:
    "https://dozer-public-assets.s3.us-east-2.amazonaws.com/in_cab_ui_alert.png",
  fieldOfView: "https://www.dozer.ai/ai_sees_everything.png",
  pointCloudGif: "https://www.dozer.ai/pointcloud_trimmed.gif",
  dashboardCarousel: "https://www.dozer.ai/carousel-1.png",
} as const;

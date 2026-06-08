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
    "Dozer.ai mounts AI depth-sensing cameras on excavators, dozers, wheel loaders, and haul trucks for real-time blind-spot alerts, proximity detection, and backover prevention.",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
] as const;

export const EXTERNAL = {
  // Login goes to the customer beta app (kept from current site).
  login: "https://beta.app.dozer.ai",
  // TODO: replace with the real Calendly / Chili Piper booking link before launch.
  booking: "https://calendly.com/dozer-ai/intro", // PLACEHOLDER
};

/** Direct contact details. TODO: confirm real values before launch. */
export const CONTACT = {
  email: "hello@dozer.ai", // TODO: confirm address
  sales: "sales@dozer.ai", // TODO: confirm address
  phone: "+1 (555) 555-0100", // PLACEHOLDER — replace with real number
  phoneHref: "tel:+15555550100", // PLACEHOLDER
  responseTime: "within one business day",
};

/** Social profiles for the footer. TODO: replace "#" with real URLs before launch. */
export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#" }, // TODO: real LinkedIn URL
  { label: "YouTube", href: "#" }, // TODO: real YouTube URL
  { label: "Instagram", href: "#" }, // TODO: real Instagram URL
  { label: "Facebook", href: "#" }, // TODO: real Facebook URL
] as const;

/** Remote brand assets (existing S3 / dozer.ai hosts). */
export const ASSETS = {
  logoHeader: "https://www.dozer.ai/dozer-logo-public.png",
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

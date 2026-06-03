/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static HTML export. Every route in this app is static/SSG (no API routes,
  // server actions, or ISR), so `next build` emits a self-contained `out/`
  // folder of plain HTML/CSS/JS that any web server (Hostinger Apache/LiteSpeed,
  // VPS, etc.) serves directly — no Node.js process required.
  output: "export",

  // Generate /cameras/index.html instead of /cameras.html so static file
  // servers resolve clean URLs (e.g. /cameras/) without rewrite rules.
  trailingSlash: true,

  images: {
    // The static export has no Next.js image-optimization server, so images
    // are served as-is. All brand assets are remote (dozer.ai / public S3),
    // so this just renders a plain <img> pointing at the source URL.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "www.dozer.ai" },
      { protocol: "https", hostname: "dozer.ai" },
      { protocol: "https", hostname: "dozer-public-assets.s3.us-east-2.amazonaws.com" },
    ],
  },
};

export default nextConfig;

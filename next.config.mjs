/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Remote brand assets live on dozer.ai and the public S3 bucket.
    // next/image needs these whitelisted; <video> tags are unaffected.
    remotePatterns: [
      { protocol: "https", hostname: "www.dozer.ai" },
      { protocol: "https", hostname: "dozer.ai" },
      { protocol: "https", hostname: "dozer-public-assets.s3.us-east-2.amazonaws.com" },
    ],
  },
};

export default nextConfig;

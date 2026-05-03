/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    // Static export cannot run the optimizer, so images stay as-is.
    // formats is kept here so a future switch to a hosted runtime
    // (Vercel/Node) automatically prefers AVIF then WebP.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;

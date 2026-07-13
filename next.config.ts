import type { NextConfig } from "next";

const siteUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL: siteUrl ? `https://${siteUrl}` : "http://localhost:3000",
  },
};

export default nextConfig;

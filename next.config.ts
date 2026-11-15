import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    qualities: [75, 90],
    deviceSizes: [640, 828, 1080, 1280, 1536, 1920, 2560, 3840],
  },
};

export default nextConfig;

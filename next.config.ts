import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Default quality (75) — visually the same as 90 but far smaller files.
    qualities: [75],
    // Largest source photos are 2560px wide; 3840 only produced oversized files.
    deviceSizes: [640, 828, 1080, 1280, 1536, 1920, 2560],
    // Images are static imports with content-hashed URLs, so cache them long.
    minimumCacheTTL: 2678400, // 31 days
  },
};

export default nextConfig;

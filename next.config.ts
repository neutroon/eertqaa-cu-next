import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["www.asu.edu.eg"],
  },
  eslint: {
    ignoreDuringBuilds: true, // ignore ESLint errors/warnings during build
  },
};

export default nextConfig;

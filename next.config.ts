import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typedRoutes: true,
  experimental: {
    viewTransition: true
  }
};

export default nextConfig;

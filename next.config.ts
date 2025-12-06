import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  experimental: {
  },
  
  poweredByHeader: false,
  distDir: '.next',
  reactStrictMode: true,
  output: 'standalone',
};

export default nextConfig;

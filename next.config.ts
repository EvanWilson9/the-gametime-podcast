import type { NextConfig } from "next";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Specify the project root directory to resolve the multiple lockfiles warning
  experimental: {
    typedRoutes: true,
  },
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },
  // Set the project root directory
  poweredByHeader: false,
  distDir: '.next',
  reactStrictMode: true,
  output: 'standalone',
};

export default nextConfig;

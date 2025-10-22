import type { NextConfig } from "next";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Specify the project root directory to resolve the multiple lockfiles warning
  typedRoutes: true,
  experimental: {
    // other experimental options can go here
  },
  // Removed custom webpack config for Turbopack compatibility
  // Set the project root directory
  poweredByHeader: false,
  distDir: '.next',
  reactStrictMode: true,
  output: 'standalone',
};

export default nextConfig;

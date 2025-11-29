import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Personal_portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

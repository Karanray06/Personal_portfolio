import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Personal_portfolio',
  assetPrefix: '/Personal_portfolio',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Add basePath if deploying to a subdirectory (e.g. /my-repo)
  // basePath: '/repo-name',
};

export default nextConfig;

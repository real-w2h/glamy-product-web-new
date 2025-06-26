import type { NextConfig } from "next";

const baseApiUrl = process.env.API_URL;

const nextConfig: NextConfig = {
  /* config options here */
  // proxy base api url
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${baseApiUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;

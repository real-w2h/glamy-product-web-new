import type { NextConfig } from "next";

const baseApiUrl = process.env.API_URL;

console.log("baseApiUrl", baseApiUrl);

const nextConfig: NextConfig = {
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

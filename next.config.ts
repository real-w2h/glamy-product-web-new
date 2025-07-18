import type { NextConfig } from "next";

const baseApiUrl = process.env.API_URL;

console.log("baseApiUrl", baseApiUrl);

const nextConfig: NextConfig = {
  output: 'standalone',
  // ignore build errors
  typescript: {
    ignoreBuildErrors: true,
  },
  // ignore lint errors
  eslint: {
    ignoreDuringBuilds: true,
  },
  // proxy base api url
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${baseApiUrl}/api/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

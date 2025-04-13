import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "remoteok.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

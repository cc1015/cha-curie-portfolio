import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/photos", destination: "/other/photos", permanent: true }];
  },
};

export default nextConfig;

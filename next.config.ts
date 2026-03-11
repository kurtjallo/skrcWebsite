import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // All images are now served locally from public/images/
  },
};

export default nextConfig;

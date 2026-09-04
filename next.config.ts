import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/airsoft-assocation-site",
  images: { unoptimized: true },
};

export default nextConfig;

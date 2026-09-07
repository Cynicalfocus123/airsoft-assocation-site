import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "/airsoft-assocation-site",
  env: { NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH ?? "/airsoft-assocation-site" },
  trailingSlash: true,
  productionBrowserSourceMaps: false,
  images: { loader: "custom", loaderFile: "./data/image-loader.ts", deviceSizes: [768, 1280, 1920], imageSizes: [384] },
};

export default nextConfig;

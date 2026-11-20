import type { NextConfig } from "next";

const basePath = "/shipyard"; // must match the repo name

const nextConfig: NextConfig = {
  output: "export", // static HTML in out/ for GitHub Pages
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath }, // for unoptimized image paths
  trailingSlash: true,
  images: { unoptimized: true }, // no image server on a static host
};

export default nextConfig;

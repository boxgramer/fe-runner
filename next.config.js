const { debug } = require("console");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  // distDir: "dist",
  // assetPrefix: process.env.NODE_ENV === "production" ? "/fe-runner" : undefined,
  images: {
    unoptimized: true,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

module.exports = nextConfig;

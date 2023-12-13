/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require("next-compose-plugins");
const nextPwa = require("next-pwa");
const nextBundleAnalyzer = require("@next/bundle-analyzer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const withBundleAnalyzer = nextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withPwa = nextPwa({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPlugins([
  [withBundleAnalyzer],
  [withPwa],
  nextConfig,
  // your other plugins here
]);

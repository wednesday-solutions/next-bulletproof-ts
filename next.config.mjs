/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
import withPlugins from "next-compose-plugins";
import nextPwa from "next-pwa";
import nextBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = {
  reactStrictMode: true,
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

export default withPlugins([
  [withBundleAnalyzer, withPwa],
  nextConfig,
  // your other plugins here
]);

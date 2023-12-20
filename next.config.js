/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require("next-compose-plugins");
const nextPwa = require("@ducanh2912/next-pwa").default;
const nextBundleAnalyzer = require("@next/bundle-analyzer");
const linguiConfig = require("./lingui.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    swcPlugins: [["@lingui/swc-plugin", {}]],
  },
  i18n: {
    locales: linguiConfig.locales,
    defaultLocale: linguiConfig.sourceLocale,
  },
};

const withAnalyzer = nextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withPwa = nextPwa({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  swcMinify: true,
});

module.exports = withPlugins(
  [withAnalyzer, withPwa],
  nextConfig
  // your other plugins here
);

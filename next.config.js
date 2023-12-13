/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require("next-compose-plugins");
const nextPwa = require("next-pwa");
const nextBundleAnalyzer = require("@next/bundle-analyzer");
const linguiConfig = require("./lingui.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    swcPlugins: [["@lingui/swc-plugin", {}]],
  },
  i18n: {
    locales: linguiConfig.locales,
    defaultLocale: linguiConfig.sourceLocale,
  },
};

module.exports = withPlugins([
  [
    nextBundleAnalyzer,
    {
      enabled: process.env.ANALYZE === "true",
    },
  ],
  [
    nextPwa,
    {
      dest: "public",
      disable: process.env.NODE_ENV === "development",
    },
  ],
  nextConfig,
  // your other plugins here
]);

/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const sass = require("@zeit/next-sass");
const css = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
});

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

const svgLoader = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
        and: [/\.(js|ts)x?$/],
      },

      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withPlugins(
  [[withBundleAnalyzer]],
  nextConfig,
  // your other plugins here
  [css],
  [
    sass,
    {
      cssModules: true,
    },
  ],
  svgLoader
);

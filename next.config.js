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
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]",
        },
      },
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

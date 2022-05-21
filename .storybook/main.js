const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@containers": path.resolve(__dirname, "../containers/"),
      "@common": path.resolve(__dirname, "../common/"),
      "@themes": path.resolve(__dirname, "../themes/"),
      "@features": path.resolve(__dirname, "../features/"),
      "@utils": path.resolve(__dirname, "../utils/"),
      "@slices": path.resolve(__dirname, "../store/slices/"),
    };

    return config;
  },
};

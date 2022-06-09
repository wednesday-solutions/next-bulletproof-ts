const getPresets = (options = {}) => {
  /**
   * Styled-component prop to SSR so as to prevent className mismatch
   */
  const plugins = [["styled-components", { ssr: true }], ...(options.plugins || [])];

  if (process.env.NODE_ENV !== "production") {
    plugins.push("babel-plugin-typescript-to-proptypes");
  }

  return {
    presets: options.presets || ["next/babel"],
    plugins,
  };
};

module.exports = {
  env: {
    production: getPresets({
      plugins: [
        /**
         * Remove `data-testid` from production build that is used while testing
         * <div data-testid="some-component-header" /> => <div />
         */
        ["react-remove-properties", { properties: ["data-testid"] }],

        /**
         * Remove random console.log from production build, remember that
         * if you need console in production use ONLY console.error or console.warn
         */
        ["transform-remove-console", { exclude: ["error", "warn"] }],
      ],
    }),
    development: getPresets({
      presets: [
        [
          "next/babel",
          {
            "preset-react": {
              /**
               * Amazing plugin as it can suggest you potential fixes or things that causes
               * useless rerenders, potentially saving you extra rerenders.
               */
              importSource: "@welldone-software/why-did-you-render",
            },
          },
        ],
      ],
    }),
    test: getPresets({
      plugins: [
        /**
         * Removes react propTypes in testing environment
         */
        "transform-react-remove-prop-types",

        /**
         * Transpile import() to deferred require(), spec for reference
         * @refer https://github.com/tc39/proposal-dynamic-import
         */
        "transform-dynamic-import",

        /**
         * Rewrites all calls to require.context into calls to this global function,
         * passing in __dirname as the extra parameter.
         */
        "require-context-hook",
      ],
      presets: [["next/babel"]],
    }),
  },
  /**
   * These plugins are loaded regardless of what environment you're using
   */
  plugins: [
    [
      "babel-plugin-module-resolver",
      {
        root: ["."],
        alias: {
          "@features": "./features",
          "@slices": "./store/slices",
          "@store": "./store",
          "@common": "./common",
          "@themes": "./themes",
          "@utils": "./utils",
          "@containers": "./containers",
        },
      },
    ],
  ],
};

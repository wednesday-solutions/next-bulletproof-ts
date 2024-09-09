import globals from "globals";
import pluginJs from "@eslint/js";
import sonarJs from "eslint-plugin-sonarjs";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginSecurity from "eslint-plugin-security";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  sonarJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  pluginSecurity.configs.recommended,
  {
    ignores: [
      ".next/",
      "node_modules/",
      "out/",
      "**/*.min.js",
      "**/vendor/*.js",
      "public/*",
      ".storybook/",
      "**/*.test.ts",
      "**/*.styles.ts",
      "src/themes/**",
      "*.setup.js",
      "*.config.js",
      "lighthouserc.js",
      "coverage/**",
    ],
  },
];

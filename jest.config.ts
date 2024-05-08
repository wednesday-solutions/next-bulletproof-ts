import { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "./" });

const jestConfig: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "src/common/**/*.{js,jsx,ts,tsx}",
    "src/containers/**/*.{js,jsx,ts,tsx}",
    "src/features/**/*.{js,jsx,ts,tsx}",
    "src/pages/**/*.{js,jsx,ts,tsx}",
    "src/store/**/*.{js,jsx,ts,tsx}",
    "src/styles/**/*.{js,jsx,ts,tsx}",
    "src/themes/**/*.{js,jsx,ts,tsx}",
    "src/utils/**/*.{js,jsx,ts,tsx}",
  ],
  reporters: [
    "default",
    [
      "jest-sonar",
      {
        outputDirectory: "reports",
        outputName: "test-report.xml",
        relativeRootDir: "./",
        reportedFilePath: "relative",
      },
    ],
  ],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

    // Map lodash-es to lodash
    "^lodash-es(.*)": "lodash$1",

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$": `<rootDir>/__mocks__/fileMock.js`,
    "@styles(.*)": "<rootDir>/src/styles",
    "@logger(.*)": "<rootDir>/src/logger",
    "@constants(.*)": "<rootDir>/src/constants",
    "services(.*)": "<rootDir>/src/services",
    "^@features(.*)": "<rootDir>/src/features/$1",
    "^@store(.*)": "<rootDir>/src/store/$1",
    "^@containers(.*)": "<rootDir>/src/containers/$1",
    "^@hooks(.*)": "<rootDir>/src/hooks/$1",
    "^@shared(.*)": "<rootDir>/src/features/sharedComponents/$1",
    "^@themes(.*)": "<rootDir>/src/themes/$1",
    "^@utils(.*)": "<rootDir>/src/utils/$1",
    "^@slices(.*)": "<rootDir>/src/store/slices/$1",
    "^@app(.*)": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/coverage/",
    "<rootDir>/babel.config.js",
    "<rootDir>/lingui.config.js",
    "<rootDir>/jest.config.js",
    "<rootDir>/jest.setup.js",
    "<rootDir>/next-env.d.ts",
    "<rootDir>/next.config.js",
  ],
  transform: {
    "node_modules/lodash-es/.+\\.(j|t)sx?$": "ts-jest",
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": [
      "babel-jest",
      { presets: ["next/babel", "@babel/preset-typescript"] },
    ],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
    "/node_modules/(?!lodash-es/*)",
  ],
  passWithNoTests: true,
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  snapshotSerializers: ["@emotion/jest/serializer"],
};

export default createJestConfig(jestConfig);

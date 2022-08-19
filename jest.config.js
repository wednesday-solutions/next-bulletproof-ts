module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "./common/**/*.{js,jsx,ts,tsx}",
    "./containers/**/*.{js,jsx,ts,tsx}",
    "./features/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./store/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.{js,jsx,ts,tsx}",
    "./themes/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}",
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
    "^store(.*)": "<rootDir>/store/$1",
    "@styles(.*)": "<rootDir>/styles",
    "@store(.*)": "<rootDir>/store/$1",
    "@app(.*)": "<rootDir>/$1",
    // "common(.*)": "<rootDir>/common",
    "^common(.*)": "<rootDir>/common",
    "@logger(.*)": "<rootDir>/logger",
    "@constants(.*)": "<rootDir>/constants",
    "services(.*)": "<rootDir>/services",
    "^@features(.*)": "<rootDir>/features/$1",
    "^@hooks(.*)": "<rootDir>/hooks/$1",
    "^@shared(.*)": "<rootDir>/features/sharedComponents/$1",
    "^@themes(.*)": "<rootDir>/themes/$1",
    "^@utils(.*)": "<rootDir>/utils/$1",
    "^@slices(.*)": "<rootDir>/store/slices/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/coverage/",
    "<rootDir>/babel.config.js",
    "<rootDir>/jest.config.js",
    "<rootDir>/jest.setup.js",
    "<rootDir>/next-env.d.ts",
    "<rootDir>/next.config.js",
  ],
  transform: {
    "node_modules/lodash-es/.+\\.(j|t)sx?$": "ts-jest",
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
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
};

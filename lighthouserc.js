module.exports = {
  ci: {
    collect: {
      startServerCommand: "yarn start",
      url: ["http://localhost:3000"],
      numberOfRuns: 3,
      // default value is mobile
      // settings: {
      //   preset: "desktop",
      // },
    },
    assert: {
      // preset: "lighthouse:recommended",
      assertions: {
        "first-contentful-paint": ["warn", { maxNumericValue: 2000 }],
        "categories:performance": ["warn", { minScore: 0.95 }],
        "categories:accessibility": ["warn", { minScore: 0.95 }],
        "categories:best-practices": ["warn", { minScore: 0.95 }],
        "categories:seo": ["warn", { minScore: 0.95 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};

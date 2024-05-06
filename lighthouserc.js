module.exports = {
  ci: {
    collect: {
      startServerCommand: "yarn start",
      url: ["http://localhost:3000"],
      numberOfRuns: 2,
      // headful: true,
      // default value is mobile
      // settings: {
      //   preset: "desktop",
      // },
    },
    assert: {
      // Using loose settings for now. Should be tightened for production builds.
      assertions: {
        'first-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'categories:performance': ['error', { minScore: 0.90 }],
        'categories:accessibility': ['error', { minScore: 0.90 }],
        'categories:best-practices': ['error', { minScore: 0.90 }],
        'categories:seo': ['error', { minScore: 0.90 }]
      }
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};

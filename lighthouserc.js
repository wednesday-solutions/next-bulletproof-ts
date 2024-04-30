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
      assertions: {
        'first-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.95 }]
      }
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};

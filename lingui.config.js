/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["en","hi"],
  sourceLocale: "en",
  fallbackLocales: {
    default: "en",
  },
  catalogs: [
    {
      path: "src/translations/{locale}",
      include: ["**/!(*.test).tsx"],
    },
  ],
};

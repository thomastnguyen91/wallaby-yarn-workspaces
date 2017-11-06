const path = require("path");

module.exports = function(wallaby) {
  return {
    files: [
      "tsconfig.json",
      {
        pattern: "packages/**",
      },
      {
        pattern: "packages/**/__tests__/**",
        ignore: true,
      },
      '!packages/**/node_modules/**',
    ],

    tests: [
      {
        pattern: "packages/**/__tests__/**",
      },
      '!packages/**/node_modules/**',
    ],

    testFramework: "jest",

    env: {
      type: "node",
    },

    loose: true,

    debug: true,

    reportConsoleErrorAsError: true,

    setup: w => {
      const jestConfig = require('./package.json').jest;
      jestConfig.moduleNameMapper = {
        '^@private-package/foo-foo': w.projectCacheDir + '/packages/foo',
        '^@private-package/(.+)': w.projectCacheDir + '/packages/$1',
      };
      wallaby.testFramework.configure(jestConfig);
    },
  };
};

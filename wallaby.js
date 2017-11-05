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
    ],

    tests: [
      {
        pattern: "packages/**/__tests__/**",
      },
    ],

    testFramework: "jest",

    env: {
      type: "node",
    },

    loose: true,

    debug: true,

    reportConsoleErrorAsError: true,
  };
};

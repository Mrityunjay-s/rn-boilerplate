// commitlint.config.js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-empty": [2, "never"], // Prevent empty subjects
    "type-empty": [2, "never"], // Prevent empty types
    "type-enum": [
      2,
      "always",
      [
        "feat", // Features
        "fix", // Bug fixes
        "docs", // Documentation changes
        "style", // Formatting changes
        "refactor", // Refactoring code
        "perf", // Performance improvements
        "test", // Adding tests
        "chore", // Maintenance
        "revert", // Reverting changes
      ],
    ],
  },
};

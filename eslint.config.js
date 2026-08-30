// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const prettierConfig = require("eslint-config-prettier");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
  },
  {
    // Additional rules layered on top of eslint-config-expo/flat, which already
    // registers the react/react-hooks plugins for all files — no need to
    // re-declare them here, flat config merges matching config objects.
    rules: {
      /***********************
       * React
       ***********************/
      "react/self-closing-comp": "warn",
      "react/jsx-boolean-value": "warn",
      "react/jsx-no-useless-fragment": "warn",
      "react/jsx-pascal-case": "warn",
      "react/jsx-curly-brace-presence": ["warn", { props: "never", children: "never" }],

      /***********************
       * General
       ***********************/
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "warn",
      eqeqeq: ["error", "smart"], // allow `== null` / `!= null` to catch both null and undefined
      curly: "error",
      "no-fallthrough": "error",
      "no-param-reassign": "warn",
    },
  },
  {
    // @typescript-eslint is only registered by eslint-config-expo/flat for ts/tsx
    // files, so these rules must stay scoped here to avoid "plugin not found"
    // errors when linting plain .js config files (eslint.config.js, etc).
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }],
      "@typescript-eslint/ban-ts-comment": ["warn", { "ts-ignore": "allow-with-description" }],
    },
  },
  // Must stay last: turns off ESLint stylistic rules that would conflict with Prettier.
  prettierConfig,
]);

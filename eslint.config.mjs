import { ESLint } from "eslint";

export default new ESLint({
  baseConfig: {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
    rules: {
      "prefer-const": "off",
      "no-const-assign": "error",
    },
  },
});

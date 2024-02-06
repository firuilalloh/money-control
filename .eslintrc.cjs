/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node:true,
    es2021: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", '@vue/eslint-config-prettier/skip-formatting', "@vue/prettier"],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    "prettier/prettier": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};

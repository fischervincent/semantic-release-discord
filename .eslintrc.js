module.exports = {
  env: {
    es6: true,
    browser: true,
    es2021: true,
  },
  extends: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    semi: ["error", "never"],
  },
  plugins: ["prettier"],
}

module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-deprecated": "off",
    "no-underscore-dangle": "off",
    "func-names": ["error", "never"],
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "max-len": [1, 180, 4, { ignoreComments: true, ignoreUrls: true }],
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard",
    "airbnb",
  ],
};

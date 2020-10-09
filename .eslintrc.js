module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "@vue/typescript"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    "parser": "@typescript-eslint/parser"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "class-methods-use-this": 0,
    "import/prefer-default-export": "off",
    "eslint global-require": "off",
    "linebreak-style": [
        "error",
        "unix"
    ],
    "indent": [
        "error",
        4
    ]
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};

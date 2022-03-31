/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true, //解决vue单文件 的全局变量未定义 比如defineProps
  },
  globals: {
    uni: true,
  },
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": [
      "warn",
      {
        html: {
          void: "always",
          normal: "never",
        },
        svg: "never",
        math: "never",
      },
    ],
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
  },
};

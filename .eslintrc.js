module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:vue/vue3-recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    uni: true,
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}

/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    browser: true,
    node: true
  },
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}

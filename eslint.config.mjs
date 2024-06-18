import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
  .prepend() // Ensure this method is correctly implemented in withNuxt
  .override('nuxt/typescript/setup', {
    rules: {
      '@typescript-eslint/ban-types': 'off',
    },
  })
  .override('nuxt/vue/rules', {
    rules: {
      'vue/html-self-closing': 'off',
      'comma-dangle': 'off', // Disable the comma-dangle rule
      'vue/singleline-html-element-content-newline': 'off', // Disable the Vue singleline HTML element content newline rule
      'vue/max-attributes-per-line': 'off',
    },
  })
  .override('nuxt/vue/single-root', {
    rules: {
      'vue/no-multiple-template-root': 'off',
    },
  })
// .extend(['plugin:prettier/recommended'])

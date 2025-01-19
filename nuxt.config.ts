// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'


// run 'npm run generate' to generate the static site
// run 'npm run deploy' to deploy the site to GitHub Pages
export default defineNuxtConfig({
  // Ensure static site generation
  nitro: {
    preset: 'static', // Ensures static site generation
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/avatar.svg' },
      ],
    },
  },

  devtools: { enabled: true },

  postcss: {  
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: [
    '~/assets/main.scss',
    'vuetify/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css',
  ],

  build: {
    transpile: ['vuetify'],
  },

  typescript: {
    typeCheck: false,
  },

  modules: [
    '@nuxt/eslint',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error The config object is of type UserConfig.
        config.plugins.push(
          vuetify({
            autoImport: true,
          }),
        )
      })
    },
  ],

  compatibilityDate: '2025-01-16',
})
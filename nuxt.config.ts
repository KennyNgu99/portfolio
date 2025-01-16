// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'


// run 'npm run generate' to generate the static site
// run 'npm run deploy' to deploy the site to GitHub Pages
export default defineNuxtConfig({
  target: 'static', // Ensure static site generation
  app: {
    baseURL: '/portfolio/', 
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
})
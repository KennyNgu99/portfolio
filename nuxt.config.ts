// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    "~/assets/main.scss",
    "vuetify/styles/main.sass",
    "@mdi/font/css/materialdesignicons.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  typescript: {
    typeCheck: true,
  },
  modules: [
    "@nuxt/eslint",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error The config object is of type UserConfig.
        config.plugins.push(
          vuetify({
            autoImport: true,
          })
        );
      });
    },
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
});

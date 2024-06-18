import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: 'myCustomTheme',
      themes: {
        myCustomTheme: {
          colors: {
            primary: '#01579b',
            secondary: '#00bcd4',
            tertiary: '#630e81',
            background: '#fbfbfb',

            success: '#006064',
            warning: '#f5c344',
            error: '#e63946',
          },
        },
      },
    },
    components,
    directives,
  })
  nuxt.vueApp.use(vuetify)
})

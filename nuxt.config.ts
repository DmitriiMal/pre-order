// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: !true },
  css: ['~/assets/styles/css/style.css', 'vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],

  // modules: ['@nuxtjs/google-fonts'],
  build: {
    transpile: ['vuetify'],
  },

  compatibilityDate: '2024-07-30',
});
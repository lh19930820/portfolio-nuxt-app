// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  css: [
    '~/assets/scss/main.scss',
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Hien Le — Senior Frontend Engineer',
      meta: [
        { name: 'description', content: 'Portfolio of Hien Le - Frontend Engineer' }
      ],
    }
  }
})
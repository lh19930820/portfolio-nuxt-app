export default defineNuxtConfig({
    ssr: true,

    compatibilityDate: '2025-07-15',

    modules: ['@nuxtjs/tailwindcss'],

    devtools: { enabled: false },

    css: ['~/assets/scss/main.scss'],

    app: {
        head: {
            htmlAttrs: { lang: 'en' },
            title: 'Hien Le — Senior Frontend Engineer',
            meta: [
                { name: 'description', content: 'Portfolio of Hien Le - Frontend Engineer' }
            ]
        }
    }
})
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    router: {
        base: '/c101-landing/',
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ]
})

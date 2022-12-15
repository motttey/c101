// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    target: "static",
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@100;200;300;400;500;600;700;800;900&display=swap' }
     
    ],
    meta: {
        title: '藤子不二雄オマージュマガジン フジコ・スピリット'
    }
})

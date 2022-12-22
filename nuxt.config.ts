// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  target: "static",
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@100;200;300;400;500;600;700;800;900&display=swap' }
  ],
  render: {
    resourceHints: false
  },
  app:{
    head: {
      htmlAttrs: {
        lang: 'ja',
      },
      title: '藤子不二雄オマージュマガジン フジコ・スピリット',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'copyright', content: '2020 SAMPLE Co., Ltd.' },
        { hid: 'tw-card', name: 'twitter:card', content: 'summary_large_image'},
        { hid: 'tw-site', name: 'twitter:site', content: '@mt_tg' },
        { hid: 'og:url', property: 'og:url', content: 'https://motttey.github.io/c101/' },
        { hid: 'og:site-name', property: 'og:site_name', content: '藤子不二雄オマージュマガジン フジコ・スピリット' },
        { hid: 'og:title', property: 'og:title', content: '藤子不二雄オマージュマガジン フジコ・スピリット' },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:description', property: 'og:description', content: 'コミックマーケット101 サークル「カンヅメカン」によるドラえもんや一次創作合同の紹介ページ' },
        { hid: 'og:image', property: 'og:image', content: 'https://motttey.github.io/c101/_nuxt/hyoushi.d0bb9595.jpg' },
        { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'robots', name: 'robots', content: 'index, follow'},
        { hid: 'author', property: 'author', content: '望月田吾作' },
        { hid: 'keywords', property: 'keywords', content: 'C101,コミックマーケット101,合同誌,ドラえもん,藤子不二雄,コミケ,矢島ともあき,望月田吾作' },
        { hid: 'description', name: 'description', content: 'コミックマーケット101 サークル「カンヅメカン」によるドラえもんや一次創作合同の紹介ページ' }
      ],
    },
  }
})

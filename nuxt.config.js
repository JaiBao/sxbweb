// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      gtagId: 'G-GLVRYX5KEN',
      gtmId: 'GTM-NJ22N47F' //  GTM ID
      // quantityApiBaseUrl: process.env.QUANTITY_API_BASE_URL || 'https://www.dtstw.com/api',
      // posApiBaseUrl: process.env.POS_API_BASE_URL || 'http://tods.dtstw.com/api',
      // bingApiBaseUrl: process.env.BING_API_BASE_URL || 'https://www.chinabing.net/tods'
    }
  },
  // head: {
  //   title: '',
  //   meta: [
  //     {
  //       name: 'description',
  //       content: ''
  //     }
  //   ]
  // },
  head: {
    title: '少小白',
    meta: [
      {
        name: 'description',
        content: '少小白'
      }
    ]
  },
  // 開發者工具
  devtools: { enabled: true },
  // 使用的模块
  modules: ['@pinia/nuxt', 'nuxt-quasar-ui', 'nuxt-simple-sitemap', '@nuxt/image'],
  // 全局 CSS
  css: ['~/assets/global.scss'],
  // Quasar 插件配置
  quasar: {
    plugins: ['Notify', 'Loading', 'QCard'],
    config: {
      lang: 'zh-tw'
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/cookie', '/soy', '/aboutUs', '/recommend', 'sitemap.xml'],
      ignore: []
    }
  },
  // 網站訊息
  site: {
    url: 'https://www.imsxb.com.tw'
  },
  // 路由配置
  router: {
    trailingSlash: false
    // middleware: ['agreeCollection']
  }
})

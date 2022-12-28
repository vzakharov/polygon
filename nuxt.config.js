export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  router: {
    base: '/almostmagic-demo',
  },

  env: {
    // POLYGON_API_URL: process.env.SERVER_URL || 'http://localhost:3700/api/polygon', // for local development
    POLYGON_API_URL: process.env.SERVER_URL || 'https://ideality.app/api/polygon', // for production
    POLYGON_TEMPLATES_DB_ID: process.env.POLYGON_TEMPLATES_DB_ID || '068baa7841324cc682aa3eb7cad4bd8c',
    MIXPANEL_TOKEN: process.env.MIXPANEL_TOKEN || 'c8582487f9e7686276f47de40ab7a5a2'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'AlmostMagic · Add AI 🪄 to your app with one line of code',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './almostmagic.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/highlight.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    ['bootstrap-vue/nuxt', { icons: true }],
    'nuxt-coffeescript-module',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    port: process.env.PORT || 7300,
  },
}

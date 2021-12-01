export default {
  components: false,
  loading: {
    color: '#979797',
    failedColor: '#d32125',
    height: '3px'
  },
  css: [
    '~/assets/scss/style.scss'
  ],
  plugins: [
    { src: '~/mixins/global' },
    { src: '~/plugins/components' },
    { src: '~/plugins/functions' },
    { src: '~/plugins/axios' }
  ],
  modules: [
    '@nuxtjs/axios',
    ['nuxt-env', {
      keys: [
        { key: 'BASE_URL', default: process.env.APP_BASE_URL },
        { key: 'API_URL', default: process.env.APP_API_URL }
      ]
    }]
  ],
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
  },
  axios: {
    baseURL: process.env.APP_API_URL
  },
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0'
  },
  buildModules: [
  ],
  build: {
    postcss: {
      plugins: {
        autoprefixer: {},
        cssnano: {}
      }
    }
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        if (type === 'script' || type === 'style') {
          return true
        } else if (type === 'font') {
          // only preload woff2 fonts
          return /\.woff2$/.test(file)
        }
      }
    }
  }
}

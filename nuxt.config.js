module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Kevin Henriquez; Designer, Frontend Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#ffc40d'},
      { name: 'theme-color', content: '#ffc40d'},
      { name: 'google-site-verification', content: 'fgYo5oDQhtKQx9LAe06zajMPUoZ_4nOnEHIONLF7ojo'}
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32',href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16',href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', color: '#0F0F13', href: '/safari-pinned-tab.svg' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ffc40d' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-75328737-3'
    }]
  ]
}

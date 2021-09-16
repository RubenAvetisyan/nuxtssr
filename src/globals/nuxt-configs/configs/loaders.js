module.exports = (isDev) => {
  const loaders = {
    vue: {
      prettify: !isDev,
    },
    'vue-svg-loader': {
      loader: 'vue-svg-loader',
      options: {
        svgo: false,
      },
    },
    'worker-loader': {
      test: /\.worker\.js$/,
      use: { loader: 'worker-loader' },
      exclude: /(node_modules)/,
    },
    'eslint-loader': {
      enforce: 'pre',
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      exclude: /(node_modules)/,
    },
    'url-loader': (propName = 'query', limit = 40, type = 'fonts') => {
      const name = {
        img: isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
        fonts: 'fonts/[name].[hash:7].[ext]',
      }

      const loader = {
        loader: 'url-loader',
        [propName]: { limit, name: name[type] },
      }

      return loader
    },
  }
  return loaders
}

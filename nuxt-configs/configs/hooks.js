// const LogRocket = require('logrocket')

module.exports = (isDev) => {
  const hooks = {
    hooks: {
      'build:done'() {
        const modulesToClear = [
          'vue',
          'vue/dist/vue.runtime.common.prod',
          'vuetify/es5/util/colors',
          'path',
          'fs',
          'require-all',
          'imagemin-webpack-plugin',
          'imagemin-mozjpeg',
          'imagemin-webp',
          'express',
          'compression',
          'murmurhash-native',
          'glob',
        ]
        modulesToClear.forEach((entry) => {
          delete require.cache[require.resolve(entry)]
        })
        // if (!isDev) {
        //   LogRocket.init('ghqds6/podarok-na-veka')
        // }
      },
    },
  }
  return !isDev && hooks
}

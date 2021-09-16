module.exports = (nuxtConfigs) => {
  return {
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
    },
  }
}

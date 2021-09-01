module.exports = {
  purgeCSS: {
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'node_modules/@nuxtjs/vuetify/**/*.ts',
      'node_modules/@nuxt/vue-app/template/**/*.html',
      'node_modules/@nuxt/vue-app/template/**/*.vue',
    ],
    extractors: [
      {
        extractor: (content) => content.match(/[A-z0-9-:\\/]+/g) || [],
        extensions: ['html', 'vue', 'js'],
      },
    ],
    styleExtensions: ['.css'],
    whitelist: ['v-application', 'v-application--wrap'],
    whitelistPatterns: [
      /^v-((?!application).)*$/,
      /^\.theme--dark*/,
      /.*-transition/,
    ],
    whitelistPatternsChildren: [
      /^v-((?!application).)*$/,
      /^theme--dark.*/,
      /.*-transition/,
    ],
  },
}

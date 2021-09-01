module.exports = (isDev) => {
  // const rules = require('../utils/purgeUnusedCss.js')
  return isDev
    ? {}
    : {
        // 'postcss-custom-media': {},
        // 'postcss-hexrgba': {},
        // 'postcss-mixins': {},
        // 'postcss-nested': {},
        // 'postcss-responsive-type': {},
        // 'postcss-sorting': {},
        // 'postcss-url': {},
        // 'postcss-utilities': {},
        // precss: {},
        '@fullhuman/postcss-purgecss': {
          content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'node_modules/vuetify/src/**/*.ts',
          ],
          styleExtensions: ['.css'],
          safelist: {
            standard: [
              'body',
              'html',
              'nuxt-progress',
              /col-*/, // enable if using v-col for layout
            ],
            deep: [
              /page-enter/,
              /page-leave/,
              /dialog-transition/,
              /tab-transition/,
              /tab-reversetransition/,
            ],
          },
          keyframes: true,
          fontFace: true,
        },
        'css-byebye': {
          rulesToRemove: [
            // ...rules,
            /.*\.v-application--is-rtl.*/,
            /.*\.theme--dark.*/,
          ],
        },
      }
}

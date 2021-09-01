import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'
// import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import nuxtConfigs from './nuxt-configs/index'

const isDev = process.env.NODE_ENV !== 'production'
let last = []

const port = isDev ? 3000 : 8080

if (isDev) {
  setInterval(() => {
    const { heapUsed, rss, heapTotal, external: ext } = process.memoryUsage()
    const f = (value) => (!value ? '-' : `${Math.round(value / 1048576)} MB`)

    const fUsed = f(heapUsed)
    const fRss = f(rss)
    const total = f(heapTotal)
    const current = [fUsed, fRss, total]

    if (last.every((stat, i) => stat === current[i])) return

    last = [fUsed, fRss, total]

    // eslint-disable-next-line no-console
    console.log(
      `[${new Date()
        .toTimeString()
        .substr(
          0,
          8
        )}] Memory usage: ${fUsed} (RSS: ${fRss}) - total heap: ${total} - external: ${f(
        ext
      )}`
    )
  }, 10000)
}

// const features = ['fetch', 'Object.entries', 'IntersectionObserver'].join('%2C')
export default {
  dev: isDev,
  rootDir: process.cwd(),
  srcDir: 'src/',
  telemetry: false,
  server: {
    port: process.env.PORT || port,
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },
  watch: ['~/nuxt-configs/**/*.js', '~/src/**/*.js'],
  modern: false, //! isDev,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: nuxtConfigs.head,
  webfontloader: nuxtConfigs.webfontloader,

  styleResources: nuxtConfigs.styleResources,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css',
    '~/assets/css/fonts.css',
    '~/assets/css/animations.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: nuxtConfigs.plugins,

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    'nuxt-purgecss',
    'nuxt-seo',
    '@nuxtjs/robots',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-ssr-cache',
    'nuxt-polyfill',
    '@luxdamore/nuxt-prune-html',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],

  ...nuxtConfigs.hooks,

  // pruneHtml module - default config
  ...(!isDev && {
    pruneHtml: nuxtConfigs.pruneHtml,
  }),
  polyfill: nuxtConfigs.polyfill,

  // seo: nuxtConfigs.seo,

  robots: nuxtConfigs.robots,
  ...nuxtConfigs.sitemap,

  serverMiddleware: {
    '/_ipx': '~/server-middleware/ipx.js',
    '/v1': '~/server-middleware/index.js',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // nuxt-ssr-cache https://www.npmjs.com/package/nuxt-ssr-cache
  cache: nuxtConfigs.cache,

  loading: '@/components/Loading.vue',

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: nuxtConfigs.vuetify,

  // etag https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-render
  render: nuxtConfigs.render,

  ...nuxtConfigs.purgecss,

  ...nuxtConfigs.image,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: nuxtConfigs.nuxtBabel,
    ...nuxtConfigs.loaders.vue,
    transpile: [/^vuetify/, 'vue-cli-plugin-vuetify-preset-rally'],
    optimizeCss: false,
    ...nuxtConfigs.html,
    ...nuxtConfigs.optimization,
    ...nuxtConfigs.extractCSS,
    ...nuxtConfigs.filenames,
    ...nuxtConfigs.splitChunks,
    ...(!isDev && {
      loaders: {
        cssModules: {
          modules: {
            localIdentName: '[hash:base64:4]',
          },
        },
      },
    }),
    postcss: isDev
      ? false
      : {
          plugins: {
            'postcss-import': {},
            'postcss-url': {},
            precss: {},
            ...nuxtConfigs.postcssPlugins,
            ...nuxtConfigs.cssnano,
          },
          preset: {
            features: {
              'nesting-rules': true,
              'custom-media-queries': true,
            },
            ...nuxtConfigs.preset,
          },
          order: (names, presets) => presets.cssnanoLast(names),
        },
    devtools: isDev,
    // cache: true,
    extend(config, ctx) {
      // config.plugins.push(new VuetifyLoaderPlugin())
      config.plugins.unshift(new LodashModuleReplacementPlugin())
      config.module.rules[2].use[0].options.plugins = ['lodash']

      const ORIGINAL_TEST = '/\\.(png|jpe?g|gif|svg|webp)$/i'

      // config.plugins.push(new VuetifyLoaderPlugin())

      if (!ctx.isDev) {
        config.plugins.push(nuxtConfigs.imageMinPlugin)

        const tagAttributesForTesting = ['data-e2e']
        ctx.loaders.vue.compilerOptions = {
          modules: [
            {
              preTransformNode(astEl) {
                const { attrsMap, attrsList } = astEl
                tagAttributesForTesting.forEach((attribute) => {
                  if (attrsMap[attribute]) {
                    delete attrsMap[attribute]
                    const index = attrsList.findIndex(
                      (x) => x.name === attribute
                    )
                    attrsList.splice(index, 1)
                  }
                })
                return astEl
              },
            },
          ],
        }
      } else {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }

      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === ORIGINAL_TEST) {
          rule.test = /\.(png|jpe?g|gif|webp)$/i
          // console.log(
          //   'nuxtConfigs.loaders.url-loader: ',
          //   nuxtConfigs.loaders['url-loader']('options', 100, 'img')
          // )
          rule.use = [nuxtConfigs.loaders['url-loader']('options', 100, 'img')]
        }

        if (rule.test.toString() === '/\\.(woff2?|eot|ttf|otf)(\\?.*)?$/') {
          rule.use = [nuxtConfigs.loaders['url-loader']('query', 40, 'fonts')]
        }
      })

      //  Create the custom SVG rule
      const vueSvgLoader = [nuxtConfigs.loaders['vue-svg-loader']]
      config.module.rules.push(nuxtConfigs.svgRule.get(vueSvgLoader)) // Actually add the rule

      if (ctx.isClient) {
        config.module.rules.push(nuxtConfigs.loaders['worker-loader'])
      }

      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push(nuxtConfigs.loaders['eslint-loader'])
      }
    },
  },
}

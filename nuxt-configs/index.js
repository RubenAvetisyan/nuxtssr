const path = require('path')
const inject = require('require-all')
const configs = inject({
  dirname: path.join(__dirname, '/configs'),
  recursive: true,
})

const isDev = process.env.NODE_ENV !== 'production'

const configObjects = {
  styleResources: {
    // your settings here '~/assets/scss/main.scss'
    scss: [], // alternative: scss as './assets/scss/global-variables.scss'
    less: [],
    stylus: [],
  },
  css: [
    'reset-css',
    'normalize.css',
    'normalize.css/normalize.css',
    '~/assets/scss/styles.scss',
    // '~/assets/scss/main.scss',
  ],
  server: {
    timing: {
      total: true,
    },
  },
  transpile: [
    'vue-lazy-hydration',
    // 'vue2-filters',
    // 'three/examples/jsm/loaders/GLTFLoader',
    // 'three/examples/jsm/controls/OrbitControls',
    // '~/plugins/three.js',
    'vuetify/lib',
    '~/plugins/vuetify.js',
  ],
}

for (const name in configs) {
  configObjects[name] =
    configs[name] instanceof Function ? configs[name](isDev) : configs[name]
  // console.log(`${name}: `, configObjects[name])
}
module.exports = configObjects

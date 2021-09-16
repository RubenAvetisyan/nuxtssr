module.exports = (isDev) =>
  [
    '~/plugins/vuetify.js',
    '~/plugins/api.js',
    { src: '~/plugins/api', mode: 'client' },
    // '~/plugins/jsonld',
    { src: '~/plugins/polyfills', mode: 'client' },
    // { src: '~/plugins/device', mode: 'client' },
    // '~/plugins/mobile',
    { src: '~/plugins/console-dev', mode: 'client' },
  ].filter((item) => {
    if (!isDev) {
      const src = typeof item === 'string' ? item : item.src
      return !src.includes('-dev')
    }

    return item
  })

const { filter } = require('compression')
const { murmurHash128 } = require('murmurhash-native')

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return filter(req, res)
}

module.exports = (isDev) => {
  return {
    compressor: isDev ? false : { filter: shouldCompress },
    asyncScripts: !isDev,
    ssrLog: isDev ? 'collapsed' : false,
    http2: {
      push: !isDev,
      pushAssets: isDev
        ? null
        : (req, res, publicPath, preloadFiles) =>
            preloadFiles
              .filter((f) => f.asType === 'script' && f.file === 'runtime.js')
              .map(
                (f) => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`
              ),
    },
    resourceHints: !isDev,
    etag: isDev
      ? false
      : {
          hash: (html) => murmurHash128(html),
        },
    static: {
      etag: !isDev,
      maxAge: 60 * 60 * 24 * 365 * 1000,
    },
    // csp: !isDev,
  }
}

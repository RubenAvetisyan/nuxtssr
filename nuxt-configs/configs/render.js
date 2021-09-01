module.exports = (isDev) => {
  const compression = require('compression')
  const { murmurHash128 } = require('murmurhash-native')
  function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
      // don't compress responses with this request header
      return false
    }

    // fallback to standard filter function
    return compression.filter(req, res)
  }
  return {
    compressor: { filter: shouldCompress },
    asyncScripts: true,
    ssrLog: isDev,
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) =>
        preloadFiles
          .filter((f) => f.asType === 'script' && f.file === 'runtime.js')
          .map((f) => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`),
    },
    resourceHints: !isDev,
    etag: {
      hash: (html) => murmurHash128(html),
    },
    static: {
      etag: !isDev,
      maxAge: 60 * 60 * 24 * 365 * 1000,
    },
    // csp: !isDev,
  }
}

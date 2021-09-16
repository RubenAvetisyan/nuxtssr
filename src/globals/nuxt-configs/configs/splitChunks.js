module.exports = (isDev) =>
  !isDev && {
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
  }

module.exports = (isDev) => {
  const optimization = {
    minimize: !isDev,
    runtimeChunk: !isDev,
    ...(!isDev && {
      splitChunks: {
        name: true,
        minSize: 10000,
        maxSize: 244000,
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(scss|css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    }),
  }
  return { optimization }
}

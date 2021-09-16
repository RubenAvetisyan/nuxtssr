module.exports = (isDev) => {
  const filenames = {
    app: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
    chunk: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
    css: ({ isDev }) => (isDev ? '[name].css' : 'css/[contenthash].css'),
    img: ({ isDev }) =>
      isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
    images: ({ isDev }) =>
      isDev ? '[path][name].[ext]' : 'images/[contenthash:7].[ext]',
    font: ({ isDev }) =>
      isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
    video: ({ isDev }) =>
      isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]',
  }
  return { filenames }
}

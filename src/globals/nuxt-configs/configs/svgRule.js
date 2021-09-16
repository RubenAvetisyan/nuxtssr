const svgRule = (vueSvgLoader) => ({
  test: /\.svg$/,
  oneOf: [
    {
      resourceQuery: /inline/,
      use: vueSvgLoader,
    },
    {
      resourceQuery: /data/,
      loader: 'url-loader',
    },
    {
      resourceQuery: /raw/,
      loader: 'raw-loader',
    },
    {
      loader: 'file-loader', // By default, always use file-loader
    },
  ],
})

module.exports = { get: svgRule }

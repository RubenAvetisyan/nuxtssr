module.exports = {
  presets({ isServer }) {
    const options = {
      // useBuiltIns: "usage",
      targets: isServer
        ? { node: 'current' }
        : {
            browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
          },
    }
    return [
      [
        require.resolve('@nuxt/babel-preset-app'),
        {
          buildTarget: isServer ? 'server' : 'client',
          corejs: { version: 3 },
          loose: true,
          ...options,
        },
      ],
    ]
  },
  plugins: [
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
  ],
}

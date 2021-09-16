module.exports = (isDev) =>
  !isDev && {
    browsers: 'cover 99.5%',
    autoprefixer: true,
    stage: 2,
  }

module.exports = (isDev) => {
  const extractCSS = {
    extractCSS: true,
  }
  return !isDev && extractCSS
}

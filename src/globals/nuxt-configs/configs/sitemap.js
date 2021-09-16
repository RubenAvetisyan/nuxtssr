const axios = require('axios')

const routes = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  if (!data && !data.length) return []
  return data.map((user) => {
    const result = {
      url: `/users/${user.username}`,
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    }
    return result
  })
}

module.exports = (isDev, baseUrl) => {
  const result = isDev
    ? false
    : {
        sitemap: {
          path: 'sitemap.xml',
          hostname: baseUrl,
          cacheTime: 1000 * 60 * 15,
          gzip: false,
          etag: true,
          trailingSlash: false,
          exclude: ['/user/**', '/admin/**'],
          routes,
          defaults: {
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date(),
            lastmodrealtime: true,
          },
        },
      }

  return result
}

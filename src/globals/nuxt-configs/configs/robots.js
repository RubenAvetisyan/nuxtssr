const { join } = require('path')

module.exports = (_, baseUrl) => {
  return [
    {
      UserAgent: 'Googlebot',
      Disallow: ['/user', '/admin'],
    },
    {
      UserAgent: '*',
      Disallow: '/admin',
      Sitemap: join(baseUrl, '/', 'sitemap.xml'),
    },
  ]
}

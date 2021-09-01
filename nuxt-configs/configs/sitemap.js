module.exports = {
  sitemap: {
    hostname: process.env.BASE_URL || 'http://localhost:3000',
    gzip: true,
    exclude: ['/user/**', '/admin/**'],
    routes: [
      // '/page/1',
      // '/page/2',
      // {
      //   url: '/page/3',
      //   changefreq: 'daily',
      //   priority: 1,
      //   lastmod: '2017-06-30T13:30:00.000Z',
      // },
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
  },
}

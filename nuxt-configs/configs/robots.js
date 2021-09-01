module.exports = [
  {
    UserAgent: 'Googlebot',
    Disallow: ['/user', '/admin'],
  },
  {
    UserAgent: '*',
    Disallow: '/admin',
  },
]

module.exports = {
  events: true,
  google: {
    // api: 'https://fonts.googleapis.com/css2',
    families: [
      'Merriweather+Sans:300,400,500,600,700:latin,cyrillic&display=swap',
    ],
    text: 'abcdefghijklmnopqrstuvwxyz!',
  },
  custom: {
    families: ['Comfortaa', 'CyrillicOldBold'],
    urls: [
      'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&subset=latin,cyrillic&display=swap',
      '/cyrillicold.css',
      // 'https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;600;700&display=swap',
    ],
    text: 'abcdefghijklmnopqrstuvwxyz!',
  },
  timeout: 2000,
}

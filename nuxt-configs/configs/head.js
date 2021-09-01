module.exports = {
  titleTemplate: '%s - Подарок на века',
  // title: 'Подарок на века',
  htmlAttrs: {
    lang: 'ru',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'theme-color', content: '#8b0404' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '' },
    { name: 'format-detection', content: 'telephone=no' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    // https://csswizardry.com/2020/05/the-fastest-google-fonts/
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'crossorigin',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    // {
    //   rel: 'preload',
    //   as: 'font',
    //   href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap',
    // },
    // {
    //   rel: 'stylesheet',
    //   as: 'font',
    //   href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap',
    //   media: 'print',
    //   onload: "this.media='all'",
    // },
    // {
    //   rel: 'preload',
    //   as: 'font',
    //   href: 'https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;600;700&display=swap',
    // },
    // {
    //   rel: 'stylesheet',
    //   as: 'font',
    //   href: 'https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;600;700&display=swap',
    //   media: 'print',
    //   onload: "this.media='all'",
    // },
  ],
}

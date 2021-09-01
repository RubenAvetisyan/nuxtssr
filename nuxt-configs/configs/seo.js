module.exports = {
  // Module options
  baseUrl: 'http://localhost:3000', // TODO: change the baseUrl into process.env.NODE_ENV_BASE_USRL
  name: 'Подарок на века',
  title: 'Подарок на века',
  templateTitle: '%name% - podarok-na-veka',
  description:
    'Подарок на века involving legal or law related matters like issue of legal opinion, filing, pleading and defending of law suits etc by a lawyer or attorney practicing law related services.',
  image: {
    url: 'http://localhost:3000/static/og-image.jpg',
    alt: 'Подарок на века',
    width: 1200,
    height: 574,
  },
  og: {
    image: {
      url: 'http://localhost:3000/static/og-image.jpg',
      alt: 'Подарок на века',
      width: 1200,
      height: 574,
    },
  },
  openGraph: {
    url: 'http://localhost:3000',
    locale: 'ru',
    type: 'website',
    site_name: 'Подарок на века',
    image: {
      url: 'http://localhost:3000/static/og-image.jpg',
      alt: 'Подарок на века',
      width: 1200,
      height: 574,
    },
  },
}

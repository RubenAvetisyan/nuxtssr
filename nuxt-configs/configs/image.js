module.exports = () => {
  const screens = {
    xs: 320,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
    '2xl': 1536,
  }

  const avatar = {
    modifiers: {
      format: 'webp',
      width: 50,
      height: 50,
    },
  }

  const logo = {
    modifiers: {
      fit: 'contain',
      format: 'webp',
      height: 128,
      sizes: 'xs: 20vw sm:25vw md:50vw lg:75vw xl:100vw',
    },
  }
  const productItem = {
    modifiers: {
      fit: 'contain',
      format: 'webp',
      width: 210,
      height: 167,
      sizes: 'xs: 20vw sm:25vw md:50vw lg:75vw xl:100vw',
    },
  }

  const top = {
    modifiers: {
      fit: 'outside',
      format: 'webp',
      sizes: 'xs: 100vw sm:100vw md:100vw lg:100vw xl:100vw',
      width: '100vw',
      height: 128,
    },
  }

  const domains = ['https://images.unsplash.com', 'https://source.unsplash.com']

  return {
    image: {
      domains,
      screens,
      presets: {
        avatar,
        logo,
        'product-item': productItem,
        top,
      },
    },
  }
}

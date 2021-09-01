import { createIPX, createIPXMiddleware } from 'ipx'

// https://github.com/unjs/ipx
const ipx = createIPX({
  dir: './src/assets/images', // absolute path to images dir
  domains: ['www.podarok-na-veka.ru', 'images.unsplash.com'], // allowed external domains (should match domains option in nuxt.config)
  alias: {
    pvn: 'http://www.podarok-na-veka.ru/image/',
    unsplash: 'https://images.unsplash.com',
  }, // base alias
  sharp: {}, // sharp options
})

export default createIPXMiddleware(ipx)

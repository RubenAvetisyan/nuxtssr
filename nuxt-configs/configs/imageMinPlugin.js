const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminWebp = require('imagemin-webp')

const imageMinPlugin = new ImageminPlugin({
  minFileSize: 102400,
  pngquant: {
    quality: '5-30',
    speed: 7,
    strip: true,
  },
  jpegtran: {
    progressive: true,
  },
  gifsicle: {
    interlaced: true,
  },
  plugins: [
    imageminMozjpeg({
      quality: 70,
      arithmetic: true,
      // progressive: true,
    }),
    imageminWebp({
      preset: 'photo',
      quality: 80,
      // size: 102400,
      autoFilter: true,
    }),
  ],
})

module.exports = imageMinPlugin

import { Device } from './utils/mobile/device.class.js'
import { Mql } from './utils/mql.class.js'

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.

  inject('isMobile', () => {
    if (process.browser) {
      const opts = {
        size: 36,
        bold: true,
        italic: true,
        color: 'yellow',
        backgroundColor: 'blue',
        padding: 6,
      }
      const { isMobile, isMobileTablet, isTablet } = new Device()
      const mql = new Mql(app)
      app.$log(`isMobile: ${isMobile}`, opts)
      app.$log(`isMobileTablet: ${isMobileTablet}`, opts)
      app.$log(`isTablet: ${isTablet}`, opts)

      return mql.mathch
    }

    return undefined
  })
}

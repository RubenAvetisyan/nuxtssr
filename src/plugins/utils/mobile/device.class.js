import { Mobile } from './mobile.class.js'
import { MobileTablet } from './mobile-tablet.class.js'
import { Tablet } from './tablet.class.js'

export class Device {
  get isMobile() {
    const mobile = new Mobile(this.getAgent())
    return mobile.device
  }

  set isMobile(value) {
    throw new Error('Not implemented')
  }

  get isMobileTablet() {
    const mobileTablet = new MobileTablet(this.getAgent())
    return mobileTablet.device
  }

  set isMobileTablet(value) {
    throw new Error('Not implemented')
  }

  get isTablet() {
    const tablet = new Tablet(this.getAgent())
    return tablet.device
  }

  set isTablet(value) {
    throw new Error('Not implemented')
  }

  getAgent() {
    return window.navigator.userAgent || window.navigator.vendor || window.opera
  }
}

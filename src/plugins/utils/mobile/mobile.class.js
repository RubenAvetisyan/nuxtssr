import { Pattern } from './pattern.class.js'

export class Mobile extends Pattern {
  constructor(agent) {
    super()
    this.agent = agent
  }

  get device() {
    const mobilePatterns = this.getPattern('mobile')
    const isMobile = mobilePatterns.some((rex) => rex.test(this.agent) === true)
    return isMobile
  }
}

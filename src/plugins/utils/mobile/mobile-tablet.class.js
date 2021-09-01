import { Pattern } from './pattern.class.js'

export class MobileTablet extends Pattern {
  constructor(agent) {
    super(agent)
    this.agent = agent
  }

  get device() {
    const mobileTabletPatterns = this.getPattern('mobileTablet')
    const isMobile = mobileTabletPatterns.some(
      (rex) => rex.test(this.agent.substr(0, 4)) === true
    )
    return isMobile
  }
}

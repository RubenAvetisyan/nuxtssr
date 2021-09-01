import { Pattern } from './pattern.class.js'

export class Tablet extends Pattern {
  constructor(agent) {
    super()
    this.agent = agent
  }

  get device() {
    const tabletPatterns = this.getPattern('tablet')
    const isMobile = tabletPatterns.some(
      (rex) => rex.test(rex.test(this.agent)) === true
    )
    return isMobile
  }
}

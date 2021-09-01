export class Mql {
  constructor(app) {
    this.app = app
    this._mql = window.matchMedia('(max-width: 600px)')
    this._mathch = false
    this.opts = {
      size: 36,
      bold: true,
      italic: true,
      color: 'yellow',
      backgroundColor: 'blue',
      padding: 6,
    }
    // console.log('this._mql: ', this._mql)
    this.setMathch(this._mql)
    this.addOnChangeListener()
  }

  get mathch() {
    return this._mathch
  }

  setMathch(value) {
    this.app.$log(`setMathch: ${value.matches}`, this.opts)
    this.app.$resize()
    this._mathch = value.matches
  }

  get mql() {
    return this._mql.matches
  }

  set mql(value) {
    this._mql = value
  }

  addOnChangeListener() {
    this._mql.addEventListener('change', this.setMathch)
  }

  removeOnChangeListener() {
    this._mql.removeEventListener('change', this.setMathch)
  }
}

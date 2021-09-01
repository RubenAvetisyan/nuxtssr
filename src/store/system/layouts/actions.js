/* eslint-disable prefer-const */
/* eslint-disable no-console */
export default {
  async setWidth({ state, commit }) {
    let application = () => this.app.vuetify.framework.application
    if (!process.browser || !window) return
    let vuetify = application()
    let { left, right } = vuetify || {}
    let { name, thresholds, width } = vuetify
      ? vuetify.framework.breakpoint
      : {}
    console.log('name: ', name)

    let { xs, sm, md, lg } = thresholds
    console.log('xs, sm, md, lg: ', xs, sm, md, lg)

    let exact = {
      xs,
      sm: (xs + sm) / 2,
      md: (xs + sm + md) / 3,
      lg: (xs + sm + md + lg) / 4,
      xl: (xs + sm + md + lg) / 4,
    }

    let min = xs - 40 - left - right
    let max = width - 40 - left - right
    let avg = exact[name] - 40 - left - right

    let size = {
      min: min <= xs ? min : xs,
      max: max >= width ? width : max,
      avg: avg <= max ? avg : max,
      name,
      width,
    }

    await commit('setWidth', size)

    xs = null
    sm = null
    md = null
    lg = null
    left = null
    right = null
    name = null
    thresholds = null
    width = null
    exact = null
    size = null
    vuetify = null
    application = null
  },
}

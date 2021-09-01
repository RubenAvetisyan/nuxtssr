/* eslint-disable prefer-const */
export default function ({ app, $vuetify }, inject) {
  function main() {
    let timeout = setTimeout(() => {
      let application = () => $vuetify.application
      if (!process.browser || !window) return
      let vuetify = application()
      let { left, right } = vuetify || {}
      let { name, thresholds, width } = vuetify
        ? vuetify.framework.breakpoint
        : {}

      let { xs, sm, md, lg } = thresholds

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

      app.store.commit('system/layouts/setWidth', size)

      clearTimeout(timeout)
      let variablesArray = [
        xs,
        sm,
        md,
        lg,
        left,
        right,
        name,
        thresholds,
        width,
        exact,
        size,
        vuetify,
        application,
        timeout,
      ]
      variablesArray.forEach((variable) => (variable = null))
      variablesArray = null
    })
  }
  main()
  inject('resize', main)
}

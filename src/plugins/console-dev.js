/* eslint-disable no-console */
export default ({ app }, inject) => {
  inject('log', (fn, options = {}) => {
    const response = typeof fn === 'function' ? fn() : fn
    if (typeof response === 'string') {
      const font =
        'size' in options && typeof +options.size === 'number'
          ? `font-size: ${options.size}px`
          : ''
      const bold =
        'bold' in options && typeof options.bold === 'boolean'
          ? 'font-weight: bold'
          : ''
      const color =
        'color' in options && typeof options.color === 'string'
          ? `color: ${options.color}`
          : ''
      const italic =
        'italic' in options && typeof options.italic === 'boolean'
          ? 'font-style: italic'
          : ''
      const padding =
        'padding' in options && typeof options.padding === 'number'
          ? `padding: ${options.padding}px`
          : ''
      const backgroundColor =
        'backgroundColor' in options &&
        typeof options.backgroundColor === 'string'
          ? `background-color: ${options.backgroundColor}`
          : ''

      console.log(
        `%c ${response}`,
        [font, bold, color, italic, padding, backgroundColor]
          .filter((str) => str.length > 0)
          .join('; ')
      )
    }

    if (typeof response === 'object' && !(response instanceof Array)) {
      const type =
        'type' in options && options.type === 'dir' ? options.type : 'table'
      console[type](response, type === 'dir' ? { depth: null } : null)
    }

    if (response instanceof Array) {
      console.table(response)
    }
  })
}

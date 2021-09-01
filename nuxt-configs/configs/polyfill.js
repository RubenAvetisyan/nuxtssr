module.exports = {
  features: [
    /*
          Feature with detect:

          Detection is better because the polyfill will not be
          loaded, parsed and executed if it's not necessary.
      */
    {
      require: 'intersection-observer',
      detect: () => 'IntersectionObserver' in window,
    },
  ],
}

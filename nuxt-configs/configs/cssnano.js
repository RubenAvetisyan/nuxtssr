module.exports = (isDev) =>
  !isDev && {
    cssnano: {
      preset: [
        'advanced',
        {
          autoprefixer: true,
          cssDeclarationSorter: false,
          zindex: false,
          discardComments: {
            removeAll: true,
          },
          discardDuplicates: true,
          discardUnused: true,
          normalizeWhitespace: true,
        },
      ],
    },
  }

module.exports = (isDev) => {
  // const colors = require('vuetify/es5/util/colors').default
  // const {
  //   VApp,
  //   VAppBar,
  //   VToolbarTitle,
  //   VFooter,
  //   VContainer,
  //   VResponsive,
  //   VLayout,
  //   VBtn,
  //   VIcon,
  //   VNavigationDrawer,
  //   VList,
  //   VListItem,
  //   VListItemAction,
  //   VListItemContent,
  //   VListItemTitle,
  //   VOverlay,
  //   VSnackbar,
  //   VProgressCircular,
  //   VCol,
  //   VRow,
  //   VCard,
  //   VCardTitle,
  //   VCardText,
  //   VCardActions,
  //   VRating,
  // } = require('vuetify/lib/components')

  // const { Intersect } = require('vuetify/lib/directives')

  return {
    defaultAssets: {
      font: {
        family: 'Merriweather',
        size: 22,
      },
      icons: false,
    },
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        options: { variations: !isDev, cspNonce: 'dQw4w9WgXcQ' },
        dark: {
          primary: '#E81212',
          accent: '#FFE5DA',
          secondary: '#c68946',
          info: '#54B9CC',
          warning: '#C34F72',
          error: '#A72F87',
          success: '#008F19',
        },
        light: {
          primary: '#8b0404',
          accent: '#F2ECEA',
          secondary: '#522D05',
          info: '#661a00',
          warning: '#72043B',
          error: '#340500',
          success: '#56C000',
        },
      },
    },
    treeShake: true,
    // {
    //   components: [
    //     'VApp',
    //     'VAppBar',
    //     'VToolbarTitle',
    //     'VFooter',
    //     'VContainer',
    //     'VResponsive',
    //     'VLayout',
    //     'VBtn',
    //     'VIcon',
    //     'VNavigationDrawer',
    //     'VList',
    //     'VListItem',
    //     'VListItemAction',
    //     'VListItemContent',
    //     'VListItemTitle',
    //     'VOverlay',
    //     'VSnackbar',
    //     'VProgressCircular',
    //     'VCol',
    //     'VRow',
    //     'VCard',
    //     'VCardTitle',
    //     'VCardText',
    //     'VCardActions',
    //   ],
    //   // directives: ['ClickOutside', 'Resize', 'Ripple'],
    //   // loaderOptions: {
    //   //   match(originalTag, { kebabTag, camelTag, path, component }) {
    //   //     if (kebabTag.startsWith('v-')) {
    //   //       console.log('camelTag: ', camelTag)
    //   //       console.log('sliced: ', camelTag.replace(camelTag[0], ''))
    //   //       const name =
    //   //         camelTag[0].toUpperCase() + camelTag.replace(camelTag[0], '')
    //   //       console.log('name: ', name)
    //   //       return [camelTag, `import ${camelTag} from 'vuetify/lib'`]
    //   //     }
    //   //   },
    //   // },
    // },
  }
}

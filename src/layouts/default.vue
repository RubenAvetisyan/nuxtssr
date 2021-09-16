<template v-if="connected">
  <v-app>
    <Drawer :items="items" />

    <v-system-bar
      v-if="$vuetify.breakpoint.mobile && isMobile"
      color="deep-purple darken-3"
    ></v-system-bar>

    <v-app-bar
      v-else
      v-show="drawer !== undefined && drawer !== null"
      :clipped-left="clipped"
      fixed
      :src="require('~/assets/images/top.webp').default"
      :height="topHeight"
      :class="{ left: drawer && !clipped && !miniVariant }"
      app
    >
      <!-- <template #img="">
        <v-img
          :contenteditable="false"
          :draggable="false"
          alt="top bar image"
          :src="$img('/top.webp', { width: '100vw', height: 128, quality: 75 })"
          :sizes="_srcset('/top.webp', { height: 128 }, 'top').sizes"
          :srcset="_srcset('/top.webp', { height: 128 }, 'top').srcset"
          :lazy-src="
            $img('/top.webp', { width: '100vw', height: 128, quality: 25 })
          "
          min-width="100vw"
          min-height="11.25rem"
          max-width="100vw"
          max-height="11.25rem"
          itemscope
          itemprop="image"
        ></v-img>
      </template> -->
      <v-responsive
        max-height="64px"
        :max-width="!$vuetify.breakpoint.smAndDown ? 256 - 16 : null"
        :min-width="!$vuetify.breakpoint.smAndDown ? 256 - 16 : null"
      >
        <AppBarBtn
          v-for="btn in appBtns"
          :key="btn.name"
          :fn="btn.fn"
          :icon="btn.icon"
          :name="btn.name"
        />
      </v-responsive>
      <v-responsive
        max-height="128px"
        content-class="text-center justify-center align-center"
        class="ma-0"
      >
        <nuxt-img
          src="/logo-dark.webp"
          :height="topHeight - 8"
          :draggable="false"
          :contenteditable="false"
          alt="Подарок на века Logo"
          loading="lazy"
          itemscope
          itemtype="https://schema.org/Service"
          itemprop="logo"
        />
        <!-- <v-img
          id="logo"
          :contenteditable="false"
          :draggable="false"
          alt="Подарок на века Logo"
          :src="$img('/logo-dark.webp', { height: 120 }, 'logo')"
          :sizes="_srcset('/logo-dark.webp', {}, 'logo').sizes"
          :srcset="_srcset('/logo-dark.webp', {}, 'logo').srcset"
          :src-placeholder="
            $img('/logo-stamp 64.webp', { width: 64, height: 64, quality: 70 })
          "
          itemscope
          itemtype="https://schema.org/Service"
          itemprop="logo"
          aspect-ratio="attr(325) / attr(180)"
          min-width="4rem"
          min-height="4rem"
          max-width="20.31rem"
          max-height="11.25rem"
          class="logo mb-0"
        ></v-img> -->
      </v-responsive>
      <v-responsive max-height="64px" :max-width="48">
        <AppBarBtn
          :fn="() => setDrawer('rightDrawer')"
          :icon="rightDrawerIcon"
          name="right drawer"
        />
      </v-responsive>
    </v-app-bar>

    <v-main>
      <v-layout wrap fill-height>
        <v-container>
          <Nuxt v-if="!$nuxt.isOffline" />
          <div v-else>isOffline!!!</div>
        </v-container>
      </v-layout>
    </v-main>

    <Drawer :left="false" />

    <LazyHydrate when-idle>
      <v-footer :absolute="fixed" app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </LazyHydrate>
  </v-app>
</template>

<script async="">
import { mapActions } from 'vuex'
import LazyHydrate from 'vue-lazy-hydration'
import {
  mdiMenu,
  mdiChevronLeft,
  mdiChevronRight,
  mdiToggleSwitchOff,
  mdiToggleSwitch,
  mdiApps,
  mdiChartBubble,
} from '@mdi/js'
const { parseURL } = require('ufo')
export default {
  components: {
    LazyHydrate,
    AppBarBtn: () => import('../components/AppBarBtn.vue'),
    Drawer: () => import('../components/Drawer.vue'),
  },
  data() {
    return {
      src: '',
      isMobile: false,
      start: Date.now(),
      end: Date.now(),
      timeout: {},
      items: [
        {
          icon: mdiApps,
          title: 'Welcome',
          to: '/',
        },
        {
          icon: mdiChartBubble,
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      appBtns: [
        {
          fn: () => this.setDrawer('drawer'),
          name: 'drawer',
          icon: this.drawerIcon,
        },
        {
          fn: () => this.setDrawer('miniVariant'),
          name: 'mini variant',
          icon: this.miniVariantIcon,
        },
      ],
      rightDrawerIcon: mdiMenu,
      title: 'Подарок на века',
      loadingPercent: 0,
      loadTime: 0,
      log: '',
      name: 'Подарок на века',
      descripion:
        'Подарок на века involving legal or law related matters like issue of legal opinion, filing, pleading and defending of law suits etc by a lawyer or attorney practicing law related services.',
    }
  },
  head(ctx) {
    const { $route, headProps, name, description } = ctx
    const baseURL = process.env.baseUrl
    return {
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: baseURL + $route.path,
        },
      ],
      ...this.$seo({
        copyright: 'Ruben Avetisyan',
        language: 'ru',
        lang: 'ru',
        charset: 'utf-8',
        name,
        title: 'Подарок на века',
        templateTitle: '%name% - Подарок на века',
        description,
        image: {
          url: headProps.ogImage,
          alt: name + ' og image',
          width: 1200,
          height: 574,
        },
        og: {
          image: {
            url: headProps.ogImage,
            alt: name + ' og image',
            width: 1200,
            height: 574,
          },
          description,
        },
        openGraph: {
          url: '',
          locale: 'ru',
          type: 'website',
          site_name: name,
          description,
          image: {
            url: headProps.ogImage,
            alt: name + ' og image',
            width: 1200,
            height: 574,
          },
        },
      }),
      // __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name,
            description,
            url: baseURL + '/',
            email: headProps.email,
            legalName: 'Organization',
            logo: headProps.logo,
            address: {
              '@type': 'postalAddress',
              addressCountry: 'Ru',
              addressLocality: 'Москва',
              addressRegion: 'Московский Область',
              postalCode: '',
              streetAddress: 'Комсомольская пл. д. 1а',
              telephone: '+8-926-266-71-98',
              sameAs: [
                'https://instagram.com/podaroknaveka',
                'https://www.facebook.com/podaroknaveka/',
                'https://vk.com/podaroknaveka',
              ],
            },
          },
          pbody: true,
        },
      ],
    }
  },
  computed: {
    drawer() {
      return this.getDrawerProp('drawer')
    },
    clipped() {
      return this.getDrawerProp('clipped')
    },
    fixed() {
      return this.getDrawerProp('fixed')
    },
    topHeight() {
      return this.$vuetify.breakpoint.smAndDown ? 64 : 128
    },
    headProps() {
      const baseURL = process.env.baseUrl

      return {
        logo: baseURL + '/logo.png',
        ogImage: baseURL + '/og-image.jgp',
        email:
          'mailto:info@' +
          parseURL('https://online-shop-324618-bpyxxgs6la-uc.a.run.app').host,
      }
    },
  },
  methods: {
    ...mapActions({
      setDrawer: 'system/VNavigationDrawer/manageVNavigationDrawer',
    }),
    getDrawerProp(prop) {
      return this.$store.getters['system/VNavigationDrawer/getDrawerProp'](prop)
    },
    miniVariantIcon() {
      return this.getDrawerProp('miniVariant')
        ? mdiChevronRight
        : mdiChevronLeft
    },
    drawerIcon() {
      return this.getDrawerProp('drawer') ? mdiToggleSwitch : mdiToggleSwitchOff
    },
    _srcset(
      src,
      { width, height, quality } = {
        width: null,
        height: null,
        quality: 100,
      },
      preset = 'default'
    ) {
      if (this.$isServer) return { src }
      const presetHeights = {
        top: {
          xl: '128',
          lg: '128',
          md: '128',
          sm: '64',
          xs: '64',
        },
        logo: {
          xl: '128',
          lg: '128',
          md: '78',
          sm: '64',
          xs: '64',
        },
      }
      const breakpoints = {
        xl: { w: 231.111, h: presetHeights[preset].xl },
        lg: { w: 231.111, h: presetHeights[preset].lg },
        md: { w: 231.111, h: presetHeights[preset].md },
        sm: { w: 115.56, h: presetHeights[preset].sm },
        xs: { w: 115.56, h: presetHeights[preset].xs },
      }
      const breakpointName = this.$vuetify.breakpoint.name

      const modifiers = {
        default: {
          format: 'webp',
          quality,
          height,
          width,
        },
        logo: {
          fit: 'outside',
          format: 'webp',
          width: breakpoints[breakpointName].w,
          height: breakpoints[breakpointName].h,
        },
        avatar: {
          format: 'webp',
          width: 50,
          height: 50,
        },
      }
      const result = this.$img.getSizes(src, {
        sizes: 'xs:20vw sm:40vw md:50vw lg:75vw xl:100vw',
        modifiers: modifiers[preset] || {},
        // options: { preset },
      })
      //
      return result
    },
  },
}
</script>

<style scoped>
html,
body {
  margin: 0;
  height: 100%;
  width: 100%;
}

#app {
  background: url('/white_leather.avif') fixed !important;
  background-size: cover;
}

.logo {
  max-height: 128px;
}

/* .v-toolbar__title {
  font-size: 3rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
} */
</style>

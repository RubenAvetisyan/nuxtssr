<template>
  <!-- <v-row justify="center" align="center" class="mx-auto">
    <v-col cols="12" sm="8" md="6" lg="10" xl="12" class="full-width"> -->

  <v-card elevation="0" class="mx-auto full-width justify-center transparent">
    <!-- <v-card flat class="py-4 d-flex justify-center mx-auto">
          <NuxtLogo />
          <div itemtype="https://schema.org/LocalBusiness">
            <VuetifyLogo />
          </div>
        </v-card> -->
    <v-row
      v-if="items.length"
      justify="center"
      align="center"
      class="mx-auto overflow-y-auto"
      no-gutters
      align-content="center"
      style="min-height: 500px"
    >
      <v-col
        v-for="(item, i) in items"
        :key="i"
        align-self="center"
        cols="12"
        mobile="12"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
        style="height: 500px; min-height: 500px; min-width: 227px"
        class="item mx-auto justify-center align-center text-center pa-0 my-3"
      >
        <Product
          :ref="`item-${i}`"
          :item="item"
          :items-length="results.length"
        />
      </v-col>
    </v-row>
    <v-card
      ref="observer"
      v-intersect.quiet="{
        handler: onIntersect,
        options: {
          threshold: [0, 0.5, 1.0],
        },
      }"
      flat
      class="mx-auto my-2 full-width justify-center"
    >
      <v-card-title class="headline small-caps"> Мои Книги: </v-card-title>
      <v-card-text class="flex-column" itemscope>
        <p>
          Vuetify is a progressive Material Design component framework for
          Vue.js. It was designed to empower developers to create amazing
          applications.
        </p>
        <p>
          For more information on Vuetify, check out the
          <a
            href="https://vuetifyjs.com"
            target="_blank"
            rel="noopener noreferrer"
            itemprop="url"
          >
            documentation </a
          >.
        </p>
        <p>
          If you have questions, please join the official
          <a
            href="https://chat.vuetifyjs.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="chat"
            itemprop="url"
          >
            discord </a
          >.
        </p>
        <p>
          Find a bug? Report it on the github
          <a
            href="https://github.com/vuetifyjs/vuetify/issues"
            target="_blank"
            rel="noopener noreferrer"
            title="contribute"
            itemprop="url"
          >
            issue board </a
          >.
        </p>
        <p>
          Thank you for developing with Vuetify and I look forward to bringing
          more exciting features in the future.
        </p>
        <div class="text-xs-right">
          <em><small>&mdash; John Leider</small></em>
        </div>
        <hr class="my-3" />
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          itemprop="url"
        >
          Nuxt Documentation
        </a>
        <br />
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          itemprop="url"
        >
          Nuxt GitHub
        </a>
      </v-card-text>

      <!-- <nuxt-picture
          v-for="result in results"
          :key="result.id"
          :src="result.urls.regular"
          :height="167"
          fit="outside"
          class="mr-2"
        /> -->
      <v-card-actions itemscope class="justify-center">
        <v-btn
          color="primary"
          nuxt
          to="/inspire"
          :disabled="disabled"
          itemprop="url"
          @click.stop="disabled = !disabled"
        >
          Continue
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
  <!-- </v-col>
  </v-row> -->
</template>

<script>
// import { runCleanUp } from '../utils/run-clean-up.js'
export default {
  components: {
    // NuxtLogo: () => import('../components/NuxtLogo.vue'),
    // VuetifyLogo: () => import('../components/VuetifyLogo.vue'),
    Product: () => import('../components/Product.vue'),
  },
  data() {
    return {
      isIntersecting: false,
      results: [],
      items: [],
      disabled: false,
      itemsCount: 0,
      observer: null,
    }
  },
  head({ $route }) {
    return this.$seo({
      name: 'Подарок на века',
      title: ' БЕСПЛАТНАЯ ДОСТАВКА ПО МОСКВЕ (В ПРЕДЕЛАХ МКАД).',
      templateTitle: '%name% - %title%',
      description:
        'Книги в авторском кожаном переплете ручной работы. изготовление в кратчайшие сроки. Бесплатная доставка по москве (в пределах мкад). Работаем в режиме 24/7.',
      openGraph: {
        url: process.env.baseUrl + $route.path,
      },
    })
  },
  computed: {
    breakpoint() {
      const bPoints = { mobile: 12, xs: 12, sm: 6, md: 6, lg: 4, xl: 2 }
      return bPoints[this.$vuetify.breakpoint.name]
    },
  },
  mounted() {
    this.$nextTick(async () => {
      // const { response } = await this.$api.unsplash.getPhotos('books')
      try {
        const data = () =>
          import(
            /* webpackChunkName "catalog-pics" */ '../utils/moched-pics-data'
          )
        const response = await data()
        this.results = [...this.results, ...response.default]

        this.addItems()
      } catch (error) {}
    })
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect()
    }
  },
  methods: {
    addItems() {
      const itemsToAdd = Math.ceil(12 / this.breakpoint)
      this.itemsCount =
        this.itemsCount +
        (this.results.length - this.itemsCount >= itemsToAdd
          ? itemsToAdd
          : this.results.length - this.itemsCount)
      if (!this.itemsCount) return
      this.items = [...this.items, ...this.results.slice(0, this.itemsCount)]
    },
    onIntersect(entries, observer) {
      this.observer = observer

      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      // if (this.results.length === this.itemsCount) observer.disconnect()
      this.isIntersecting = entries[0].intersectionRatio >= 0.2
      if (this.isIntersecting && this.results[this.itemsCount]) this.addItems()
    },
  },
}
</script>

<style scoped>
.prod--image {
  /* max-width: 10.4rem; */
  position: relative;
  overflow: auto;
}

.item {
  width: 10.4rem;
  height: 31.3rem;
}

.footer--color {
  background-color: #985c41;
}

.card--outlined {
  border-color: #efebe9 !important;
}
</style>

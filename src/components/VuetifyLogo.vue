<template>
  <!-- <v-img
    v-cloak
    :lazy-src="
      $img('/vuetify-logo.svg', {
        formats: 'svg',
        width: 120,
        quality: 30,
      })
    "
    :src="
      $img('/vuetify-logo.svg', {
        formats: 'svg',
        height: 60,
        quality: 80,
        provider: 'static',
      })
    "
    :srcset="_srcset.srcset"
    :height="167"
    :sizes="_srcset.size"
    eager
    alt="Vuetify Logo"
    max-width="180"
    transition="transition-fast-in-fast-out"
    contain
    class="logo"
    style="position: absolute; top: 0; left: 0; width: 100%"
    itemscope
    itemtype="https://schema.org/Service"
    itemprop="logo"
  ></v-img> -->
  <nuxt-picture src="/vuetify-logo.svg" width="120px" sizes="sm:100vw md:50vw lg:120px"></nuxt-picture>
</template>

<script>
export default {
  head() {
    const baseURL = this.$axios.defaults.baseURL
    return this.$seo({
      openGraph: {
        image: {
          url: baseURL + 'vuetify-logo.svg',
          width: '180px',
          alt: 'Vuetify Logo',
        },
      },
    })
  },
  methods: {
    _srcset() {
      return this.$img.getSizes(this.imgSrc, {
        sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
        modifiers: {
          format: 'webp',
          quality: 80,
          height: 167,
          fit: 'outside',
        },
      })
    },
  },
}
</script>

<style scoped>
.logo {
  height: 180px;
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>

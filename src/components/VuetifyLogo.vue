<template>
  <!-- <v-img
    v-cloak
    :lazy-src="
      $img('v.png', {
        format: 'avif',
        width: '20vw',
        sizes: 'xs:20vw sm:20vw md:10vw',
      })
    "
    :src="
      $img('v.png', {
        format: 'avif',
        height: 137,
        quality: 80,
        sizes: 'xs:20vw sm:20vw md:10vw',
      })
    "
    :srcset="_srcset.srcset"
    :sizes="_srcset.size"
    eager
    alt="Vuetify Logo"
    max-width="180"
    transition="transition-fast-in-fast-out"
    contain
    itemscope
    itemtype="https://schema.org/Service"
    itemprop="logo"
  ></v-img> -->
  <!-- <v-img :src="require('~/assets/images/logo.avif').default"></v-img> -->
  <nuxt-picture
    src="/logo-stamp.webp"
    height="137px"
    sizes="xs:37px md:137px"
  ></nuxt-picture>
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
        sizes: 'xs:90vw sm:90w md:20vw lg:10vw xl:7vw',
        modifiers: {
          format: 'avif',
          quality: 80,
          height: 137,
          fit: 'outside',
        },
      })
    },
  },
}
</script>

<style scoped>
/* .logo {
  height: 180px;
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
} */

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>

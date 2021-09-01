<template>
  <v-lazy-image
    class="logo"
    alt="Vuetify Logo"
    src="/vuetify-logo.svg"
    sizes="(max-width: 180px) 120px"
    :src-placeholder="require('static/vuetify-logo.svg')"
    itemscope
    itemtype="https://schema.org/Service"
    itemprop="logo"
  ></v-lazy-image>
</template>

<script>
export default {
  components: {
    VLazyImage: () => import(/* webpackChunkName: "v-lazy-image" */ 'v-lazy-image'),
  },
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

.v-lazy-image {
  opacity: 0;
  transition: opacity 2s;
}
.v-lazy-image-loaded {
  opacity: 1;
}
</style>

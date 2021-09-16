<template>
  <!-- <v-responsive
      height="100vh"
      aspect-ratio="16/9"
      content-class="align-self-center lign-content-center"
    > -->
  <first-page></first-page>
  <!-- </v-responsive> -->
</template>

<script>
export default {
  components: {
    FirstPage: () =>
      import(/* webpachChunkName "First page" */ '~/components/FirstPage.vue'),
  },
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'starter'),
}
</script>

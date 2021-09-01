<template>
  <v-overlay v-if="loading" :z-index="zIndex" :value="loading">
    <Spinner :value="progress" />
    {{ loading }}
  </v-overlay>
</template>

<script>
export default {
  components: {
    Spinner: () => import('~/components/Spinner.vue'),
  },
  props: {
    value: { type: Boolean, default: false },
    spinnerValue: { type: Number, default: 0 },
  },
  data: () => ({
    zIndex: 1,
    loading: false,
    progress: 0,
  }),
  methods: {
    start() {
      this.loading = true
    },
    changeLoadingValue(value) {
      this.loading = value
      this.progress = 0
    },
    finish() {
      this.loading = false
      // const changeLoadingValue = this.changeLoadingValue
      // this.timeout = setTimeout(() => {
      //   changeLoadingValue(false)
      // }, 125)
    },
    increase(num) {
      this.progress = num
      return num
    },
  },
}
</script>

<style lang="sass">
.loading-page
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: rgba(255, 255, 255, 0.8)
  text-align: center
  padding-top: 200px
  font-size: 30px
  font-family: sans-serif
</style>

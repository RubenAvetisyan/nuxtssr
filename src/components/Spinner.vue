<template>
  <div class="text-center">
    <v-progress-circular
      :indeterminate="indeterminate"
      :rotate="-90"
      :size="100"
      :width="15"
      :value="value"
      color="teal"
    >
      {{ value }}
    </v-progress-circular>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: Number, default: 0 },
  },
  computed: {
    indeterminate() {
      return !this.value
    },
  },
}
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>

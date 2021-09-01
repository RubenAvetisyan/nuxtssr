<template>
  <v-btn
    icon
    :aria-label="name"
    max-width="48"
    min-width="48"
    width="48"
    height="48"
    max-height="48"
    min-height="48"
    @click.stop="fn"
  >
    <v-icon size="24">{{ exactIcon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    fn: { type: null, requied: true, default: () => {} },
    icon: { type: null, default: '' },
    name: { type: String, default: '' },
  },
  computed: {
    exactIcon() {
      if (typeof this.icon === 'function') {
        return this.icon()
      }
      return this.icon
    },
  },
}
</script>

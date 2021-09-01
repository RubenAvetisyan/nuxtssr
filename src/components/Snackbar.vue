<template>
  <v-snackbar v-model="show" :color="color" :timeout="6000" top>
    {{ message }}
    <template #action="{ attrs }">
      <v-btn dark text v-bind="attrs" @click="show = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: '',
      color: '',
    }
  },

  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'snackbar/showMessage') {
        this.message = state.snackbar.content
        this.color = state.snackbar.color
        this.show = true
      }
    })
  },
}
</script>

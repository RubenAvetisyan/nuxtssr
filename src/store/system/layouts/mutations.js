/* eslint-disable no-console */
import Vue from 'vue'

export default {
  setWidth(state, payloads) {
    // Object.assign(state.width, payloads)
    Vue.set(state, 'width', payloads)
  },
}

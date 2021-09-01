/* eslint-disable no-console */
import Vue from 'vue'
// Vue.set(state, 'products', payload)

export default {
  SET_PRODUCTS(state, payload) {
    state.products.push(payload)
  },
  SET_INTERSECTION(state, payload) {
    Vue.set(state, 'isIntersecting', payload)
  },
}

/* eslint-disable no-console */
import Vue from 'vue'

export default {
  setVNavigationDrawer(state, payloads = {}) {
    // Object.assign(state.width, payloads)
    for (const prop in payloads) {
      Vue.set(state, prop, payloads[prop])
    }
    // Vue.set(state, 'drawer', payloads.drawer)
    // Vue.set(state, 'miniVariant', payloads.miniVariant)
    // Vue.set(state, 'clipped', payloads.clipped)
    // Vue.set(state, 'fixed', payloads.fixed)
    // Vue.set(state, 'left', payloads.left)
    // Vue.set(state, 'expandOnHover', payloads.expandOnHover)
    // Vue.set(state, 'temporary', payloads.temporary)
  },
}

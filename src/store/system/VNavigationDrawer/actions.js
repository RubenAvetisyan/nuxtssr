export default {
  manageVNavigationDrawer({ state, commit }, payloads) {
    commit('setVNavigationDrawer', { [payloads]: !state[payloads] })
  },
}

/* eslint-disable no-console */
export default {
  showMessage(state, payload) {
    state.content = payload.content
    state.color = payload.color
  },
}

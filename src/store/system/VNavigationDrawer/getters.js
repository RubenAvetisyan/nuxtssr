export default {
  getDrawerProp(state) {
    return (prop) => {
      return state[prop]
    }
  },
}

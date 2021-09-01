export default ($axios) => ({
  async register(payload) {
    return await $axios.$post(`api/sessions/register`, { payload })
  },
  async login(payload) {
    return await $axios.$post(`api/sessions/`, payload)
  },
  async getAll() {
    return await $axios.$get('api/sessions')
  },
  async getById(id) {
    return await $axios.$get(`api/sessions/${id}`)
  },
  async getByEmail(email) {
    return await $axios.$get(`api/sessions/email/${email}`)
  },
})

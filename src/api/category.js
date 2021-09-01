/* eslint-disable no-console */
export default ($axios) => ({
  async main(lang) {
    return await $axios.$get(`api/catalog/parent?lang=${lang}`)
  },
  async getAll(lang) {
    return await $axios.$get(`api/catalog?lang=${lang}`)
  },
  async relatedSubCategories(parentId, lang) {
    return await $axios.$get(`api/catalog/sub/${parentId}&lang=${lang}`)
  },
})

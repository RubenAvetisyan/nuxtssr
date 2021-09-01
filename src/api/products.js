/* eslint-disable no-console */
export default ($axios) => ({
  async byParentId({ parentId = '', limit, page }, lang) {
    console.log('lang: ', lang)
    const url = `api/product/limited?parentId=${parentId}&limit=${limit}&page=${page}&lang=${lang}`
    console.log('url: ', url)
    return await $axios.$get(url)
  },
  async byId(id = '', lang) {
    const { data } = await $axios.get(`api/product/${id}?lang=${lang}`)
    return data
  },
  async relatedProducts(id, lang) {
    console.log('id: ', id)
    const data = await $axios.$get(`api/product/related/${id}?lang=${lang}`)
    console.log('data: ', data)
    return data
  },
})

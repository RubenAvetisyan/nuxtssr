import { createApi } from 'unsplash-js'
const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: 'xnpvqxVXPr_55uCxOomQeT16Z-PvLy0Mpw-Pk1JT_m4',
})
export default ($) => ({
  async getPhotos(query, { orientation } = { orientation: 'landscape' }) {
    return await api.search.getPhotos({
      query,
      orientation,
    })
  },
})

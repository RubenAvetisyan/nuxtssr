/* eslint-disable no-console */
// PROJECT: API
import Category from '@/api/category'
import Products from '@/api/products'
import User from '@/api/user'
import Unsplash from '@/api/unsplash'

export default ({ app, $axios }, inject) => {
  // if (process.client) {
  //   const token = localStorage.getItem('token')
  //   // Set token when defined
  //   if (token) {
  //     $axios.setToken(token, 'Bearer')
  //   }
  // }
  // Initialize API repositories
  const repositories = {
    category: Category($axios),
    products: Products($axios),
    user: User($axios),
    unsplash: Unsplash(),
  }
  inject('api', repositories)
}

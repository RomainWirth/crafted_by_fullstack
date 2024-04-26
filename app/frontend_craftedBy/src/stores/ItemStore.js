import { defineStore } from 'pinia'
import api from '@/services/api'

export const useItemStore = defineStore('ItemStore', {
  state: () => ({
    items: [],
    item: {},
    categories: [],
    category: {}
  }),
  actions: {
    async fetchItems() {
      try {
        const response = await api.get('/items/')
        console.log(response.data.data)
        this.items = response.data.data
      } catch (error) {
        alert(error)
        console.error('erreur lors de la récupération des produits', error)
      }
    },
    async fetchOneItem(id) {
      try {
        const response = await api.get('/items/' + id)
        console.log(response.data)
        this.item = response.data.item
      } catch (error) {
        alert(error)
        console.error('erreur lors de la récupération du produit', error)
      }
    },
    async fetchCategories() {
      try {
        const response = await api.get('/categories/')
        console.log(response.data)
        this.categories = response.data
      } catch (error) {
        alert(error)
        console.error('erreur lors de la récupération des produits', error)
      }
    },
    async fetchItemsInCategory(categoryId) {
      try {
        const response = await api.get('/items/category/' + categoryId)
        console.log(response.data)
        this.items = response.data
      } catch (error) {
        alert(error)
        console.error('erreur lors de la récupération des produits', error)
      }
    }
  }
})

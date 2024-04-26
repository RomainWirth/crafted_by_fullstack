import { defineStore } from 'pinia'
import api from '@/services/api'

export const useArtisanStore = defineStore('ArtisanStore', {
  state: () => ({
    artisans: [],
    artisan: {},
    artisanItems: [],
    specialties: [],
    artisanUser: {}
  }),
  actions: {
    async fetchArtisans() {
      try {
        const response = await api.get('/artisans/')
        console.log(response.data.data)
        this.artisans = response.data.data
      } catch (error) {
        alert(error)
        console.error('erreur lors de la récupération des données artisans', error)
      }
    },
    async fetchOneArtisan(id) {
      try {
        const response = await api.get('/artisans/' + id)
        console.log(response.data)
        this.artisan = response.data
      } catch (error) {
        alert(error)
        console.error("erreur lors de la récupération de l'artisan", error)
      }
    },
    async fetchArtisanItem(id) {
      try {
        const response = await api.get('/items/artisan/' + id)
        console.log(response.data)
        this.artisanItems = response.data
      } catch (error) {
        alert(error)
        console.error('No items for this artisan')
      }
    }
  },
  getters: {
    getArtisans: (state) => {
      console.log(state.artisans)
      return state.artisans
    },
    getArtisan: (state) => {
      console.log(state.artisan)
      return state.artisan
    },
    getArtisanItems: (state) => {
      console.log(state.artisanItems)
      return state.artisanItems
    },
    getArtisanUser: (state) => {
      console.log(state.artisanUser)
      return state.artisanUser
    }
  }
})

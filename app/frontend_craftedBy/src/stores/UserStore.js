import { defineStore } from 'pinia'
import api from '@/services/api'
import router from '@/router/index'

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    users: [],
    token: localStorage.getItem('token') || null,
    user: localStorage.getItem('user') || null
  }),
  actions: {
    async register(formData) {
      try {
        const response = await api.post('/register', formData)
        console.log(response)
        if (response.status === 201) {
          this.user = localStorage.setItem('user', JSON.stringify(response.data.user))
          this.token = localStorage.setItem('token', response.data.token)
          router.push('/')
          return true
        }
      } catch (error) {
        console.error("erreur lors de l'inscription : ", error)
      }
    },
    async login(formData) {
      try {
        const response = await api.post('/login', {
          email: formData.email,
          password: formData.password
        })
        console.log(response)
        if (response.status === 200) {
          this.user = localStorage.setItem('user', JSON.stringify(response.data.user))
          this.token = localStorage.setItem('token', response.data.accessToken)
          router.push('/')
        }
      } catch (error) {
        // console.error('erreur lors du login : ', error)
        this.errors = []
        if (error.status === 403) {
          this.errors.push('Utilisateur déjà connecté')
        }
        if (error.status === 404) {
          this.errors.push('Utilisateur inconnu')
        }
        if (error.status === 401) {
          this.errors.push('Mot de passe incorrect')
        }
      }
    },
    async logout() {
      try {
        const response = await api.post('/logout')
        console.log(response)
        if (response.status === 200) {
          this.token = localStorage.removeItem('token')
          this.user = localStorage.removeItem('user')
          router.push('/')
        }
      } catch (error) {
        console.error('Erreur lors du logout', error)
      }
    }
  }
})

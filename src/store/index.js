import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './auth'
import Profile from './modules/profile'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    Profile
  },
  plugins: [
    createPersistedState({
      paths: ['Auth.userLogin'],
      storage: window.sessionStorage
    })
  ]
})

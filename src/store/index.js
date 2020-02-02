import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedRepo: ""
  },
  mutations: {
    setSelectedRepo(state, newValue) {
      state.selectedRepo = newValue
    },
  },
  actions: {
    setSelectedRepo(context, newValue) {
      context.commit('setSelectedRepo', newValue)
      // nom de la mutation + valeur qu'on envoi a la mutation
    },
  },
  modules: {
  }
})

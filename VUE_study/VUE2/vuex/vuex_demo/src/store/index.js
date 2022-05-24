// store视为仓库
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 0
  },
  getters: {
    getNum (state) {
      return state.num
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

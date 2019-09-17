import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabbarIsShow: true,
    imgHeight:200
  },
  mutations: {
    tabbarTrue (state, payload) {
      state.tabbarIsShow = true
    },
    tabbarFalse (state, payload) {
      state.tabbarIsShow = false
    }
  },
  actions: {

  }
})

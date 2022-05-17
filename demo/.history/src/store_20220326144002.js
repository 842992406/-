import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    getLoginFromLogin: false
  },
  mutations: {
    changeLogin(state) {
      state.getLoginFromLogin = true
    }
  },
  actions: {

  }
})
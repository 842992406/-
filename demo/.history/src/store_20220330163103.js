import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登录界面判定数据
    getLoginFromLogin: false,
  },
  mutations: {
    // 登录界面判定函数
    changeLogin(state) {
      state.getLoginFromLogin = !state.getLoginFromLogin
    },

  },
  // 通过异步操作变更数据
  actions: {
    getList(context) {
      axios.get('/list.json').then(({ data }) => {
        console.log(data);
      })
    }
  }
})
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登录界面判定数据
    getLoginFromLogin: false,
    // 购物车中的所有商品
    list: [],
  },
  mutations: {
    // 登录界面判定函数
    changeLogin(state) {
      state.getLoginFromLogin = !state.getLoginFromLogin
    },
    // 将所选的商品添加到购物车中
    initList(state, list) {
      state.list = list
    }

  },
  // 通过异步操作变更数据
  actions: {
    // 通过异步操作，请求购物车中的数据
    getList(context) {
      axios.get('/list.json').then(({ data }) => {
        console.log(type(data[0].num));
        context.commit('initList', data)
      })
    }
  }
})
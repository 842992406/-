import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登录界面判定数据
    getLoginFromLogin: false,
    // 购物车中的详细数据
    goods_shopping: [],
    // 商品的总价值
    goods_sum: 0
  },
  mutations: {
    // 登录界面判定函数
    changeLogin(state) {
      state.getLoginFromLogin = !state.getLoginFromLogin
    }
  },
  // 通过异步操作变更数据
  actions: {

  }
})
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
    // 购物车中商品的总价值
    GoodsListSum: 0,
    // 下一个ID
    nextId: 0
  },
  mutations: {
    // 登录界面判定函数
    changeLogin(state) {
      state.getLoginFromLogin = !state.getLoginFromLogin
    },
    // 将所选的商品添加到购物车中
    initList(state, val) {
      // 将添加的商品变成数组，存到list数组中
      const obj = {
        id: state.nextId,
        name: val.name,
        price: val.price,
        num: val.num
      }
      // 将数据存到数组中
      state.list.push(obj)
      // 将Id加一
      state.nextId++
    },
    // 计算全部商品的总价值
    GoodsListSum(state, list) {

    }
  },
  // 通过异步操作变更数据
  actions: {
    // 通过异步操作，请求购物车中的数据
    getList(context) {
      axios.get('/list.json').then(({ data }) => {
        // console.log(data);
        context.commit('initList', data)
      })
    }
  }
})
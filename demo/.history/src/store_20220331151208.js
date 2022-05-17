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
    // 增加计算全部商品的总价值
    addGoodsListSum(state) {
      state.GoodsListSum += state.list[state.list.length - 1].price * state.list[state.list.length - 1].num
    },
    // 根据Id删除对应的列表数据
    removeItem(state, id) {
      // 根据Id查找对应的索引
      const i = state.list.findIndex(x => x.id === id)
      // 根据索引删除对应的元素
      if (i !== -1) {
        // 当购物车中的商品删除的时候，将其对应的商品价值也删除
        state.GoodsListSum -= state.list[i].price * state.list[i].num
        // 将购物车中的商品删除
        state.list.splice(i, 1)
      }
    },
    removeAllItem(state) {
      for (var i = 0; i <= state.list.length; i++) {
        state.list.splice(i, 1)
      }
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
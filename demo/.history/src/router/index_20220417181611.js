import Vue from 'vue';
import VueRouter from 'vue-router'
// 导入数据库


// 引入
import Login from '@/components/login/Login.vue'
import Index from '@/components/index.vue'
import Home from '@/components/Home.vue'
import User from '@/components/User.vue'


// 引入后台子组件
import MyUsers from '@/components/menus/MyUsers.vue';
import MyGoods from '@/components/menus/MyGoods.vue';
import MyOrders from '@/components/menus/MyOrders.vue';
import MyAssess from '@/components/menus/MyAssess.vue';
import MyEmployee from '@/components/menus/MyEmployee.vue';
import Report from '@/components/report/report.vue';

// 引入用户子组件
import UserOrder from '@/components/userInterface/UserOrder.vue';
import UserMessage from '@/components/userInterface/UserMessage.vue';

// 引入前端子组件
import Goods from '@/components//menus/Goods.vue';

Vue.use(VueRouter)


const router = new VueRouter({
  // mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
    // 管理员管理界面
    { path: '/', redirect: '/index' },
    {
      path: '/home', component: Home, redirect: "/home/users", children: [
        { path: 'users', component: MyUsers },
        { path: 'goods', component: MyGoods },
        { path: 'orders', component: MyOrders },
        { path: "assess", component: MyAssess },
        { path: "employee", component: MyEmployee },
        { path: "report", component: Report },
      ]
    },
    // 登录、注册界面
    { path: '/login', component: Login },
    {
      path: '/index', component: Index, redirect: "/index/goods", children: [
        { path: 'goods', component: Goods },
      ]
    },
    // 用户信息管理界面
    {
      path: '/user', component: User, redirect: "/user/message", children: [
        { path: 'orders', component: UserOrder },
        { path: 'message', component: UserMessage },
      ]
    },
  ]
})

// 避免冗余导航到当前位置
const routerRePush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
  return routerRePush.call(this, location).catch(error => error)
}


export default router
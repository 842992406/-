import Vue from 'vue';
import VueRouter from 'vue-router'
// 导入数据库


// 引入
import Login from '@/components/login/Login.vue'
import Index from '@/components/index.vue'
import Home from '@/components/Home.vue'

// 引入子组件
import MyUsers from '@/components/menus/MyUsers.vue';
import MyGoods from '@/components/menus/MyGoods.vue';
import MyOrders from '@/components/menus/MyOrders.vue';
import MySettings from '@/components/menus/MySettings.vue';
import MyAssess from '@/components//menus/MyAssess.vue';


Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home', component: Home, redirect: "/home/users", children: [
        { path: 'users', component: MyUsers },
        { path: 'goods', component: MyGoods },
        { path: 'orders', component: MyOrders },
        { path: 'settings', component: MySettings },
        { path: "assess", component: MyAssess }
      ]
    },
    { path: '/login', component: Login },
    { path: '/index', component: Index },
  ]
})

// 避免冗余导航到当前位置
const routerRePush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
  return routerRePush.call(this, location).catch(error => error)
}

export default router
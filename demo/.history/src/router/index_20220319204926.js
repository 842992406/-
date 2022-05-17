import Vue from 'vue';
import VueRouter from 'vue-router'
// 导入数据库


// 引入
import Login from '@/components/login/Login.vue'
import Index from '@/components/index.vue'
import Home from '@/components/Home.vue'

// 引入子组件
import MyUsers from '@/components/menus/MyUsers.vue';


Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home', component: Home, children: [
        { path: 'users', component: MyUsers },
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
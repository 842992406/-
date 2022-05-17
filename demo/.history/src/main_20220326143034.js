import Vue from 'vue'
import store from './store';
import App from './App.vue'
import router from '@/router/index.js'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
// 引人 ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入字体
import './components/fonts/iconfont.css';

// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.use(VueResource)


new Vue({
  render: h => h(App),
  router,
  template: "",
  store,
  components: { App },

}).$mount('#app')

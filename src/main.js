// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import store from '@/store/index.js';
import 'lib-flexible/flexible.js'   //移动端屏幕适配
import router from './router/index.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {post,fetch,patch,put} from './utils/http'
import '@/assets/js/uiScript.js'
//引入 Vant
// import Vant from 'vant';
import 'vant/lib/vant-css/index.css';


Vue.use(VueAxios, axios,VueRouter)
Vue.config.productionTip = false
new Vue({
  router,
  store,
    render: h => h(App)
}).$mount('#app-box')

Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;


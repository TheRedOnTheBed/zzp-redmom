/*
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-09-18 16:49:25
 * @LastEditors: zzp
 * @LastEditTime: 2020-09-25 00:28:32
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

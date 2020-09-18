/*
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-09-18 16:49:25
 * @LastEditors: zzp
 * @LastEditTime: 2020-09-18 16:49:25
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

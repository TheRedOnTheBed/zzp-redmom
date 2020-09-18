/*
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-09-18 17:15:01
 * @LastEditors: zzp
 * @LastEditTime: 2020-09-18 17:15:02
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouter from './home'
import LoginRouter from './login'
import RegisterRouter from './register'
Vue.use(VueRouter)

const routes = [
  HomeRouter,
  LoginRouter,
  RegisterRouter,
  {
    path: '/*',
    redirect: '/login',
  },
]

const router = new VueRouter({
  routes,
})

export default router

/*
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-09-18 17:15:01
 * @LastEditors: zzp
 * @LastEditTime: 2020-09-19 16:46:06
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouter from './home'
import LoginRouter from './login'
import RegisterRouter from './register'
import SetinfoRouter from './newinfo'
Vue.use(VueRouter)

const routes = [
  HomeRouter,
  LoginRouter,
  RegisterRouter,
  SetinfoRouter,
  {
    path: '/*',
    redirect: '/login',
  },
]

const router = new VueRouter({
  routes,
})

export default router

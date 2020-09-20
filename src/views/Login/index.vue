<!--
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-04-14 02:36:03
 * @LastEditors: zzp
 * @LastEditTime: 2020-09-19 16:17:15
 -->
<!-- 登录视图 -->
<template>
  <div id="main">
    <div class="container">
      <LoginForm></LoginForm>
      <div class="material-button"
           @click="gotoRegister">
        <span class="shape"></span>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
export default {
  name: 'Login',
  methods: {
    /**路由跳转到注册界面 */
    gotoRegister () {
      this.$router.push({ path: 'register' })
    }
  },
  components: {
    LoginForm
  }
}

</script>
<style scoped>
@import "../../../public/css/base.css";
#main {
  background-image: url("../../../public/images/loginbg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  -webkit-background-size: cover; /* 兼容Webkit内核浏览器如Chrome和Safari */
  -o-background-size: cover; /* 兼容Opera */
  background-attachment: fixed;
}
</style>

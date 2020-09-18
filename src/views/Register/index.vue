<!--
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-04-24 02:29:57
 * @LastEditors: zzp
 * @LastEditTime: 2020-09-18 20:59:23
 -->
<!-- 注册视图 -->
<template>
  <div id="main">
    <div class="container">
      <RegisterForm></RegisterForm>
      <div class="back-button"
           @click="prev">
        <span class="shape"></span>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm'
export default {
  name: 'Register',
  components: {
    RegisterForm
  },
  methods: {
    prev () {
      this.$router.go(-1)
    }
  }
}

</script>
<style scoped>
@import "../../../public/css/login.css";
#main {
  background-image: url("../../../public/images/loginbg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}
</style>

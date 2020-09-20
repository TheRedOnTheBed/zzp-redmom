<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-09-19 16:09:22
 * @LastEditors: zzp
 * @LastEditTime: 2020-09-20 13:29:16
-->
<!-- 新用户填写信息视图 -->
<template>
  <el-container>
    <el-header style="height: 150px;">
      <a href=""><img src="../../../public/images/title.png"
             alt="青春不常在，抓紧谈恋爱"
             class="title"></a>
    </el-header>
    <el-main>
      <NewInfoForm></NewInfoForm>
    </el-main>
  </el-container>
</template>

<script>
import NewInfoForm from '@/components/NewInfoForm'
export default {
  name: 'NewInfo',
  components: {
    NewInfoForm
  }
}
</script>
<style scoped>
@import "../../../public/css/base.css";
.el-container {
  background-image: url("../../../public/images/loginbg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  -webkit-background-size: cover; /*兼容Webkit内核浏览器如Chrome和Safari*/
  -o-background-size: cover; /*兼容Opera*/
  background-attachment: fixed;
}
.title {
  /* display: inline-block; */
  position: absolute;
  top: 20px;
  left: 260px;
  transform: scale(0.7);
}
</style>

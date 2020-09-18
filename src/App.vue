<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-09-18 16:47:49
 * @LastEditors: zzp
 * @LastEditTime: 2020-09-18 16:49:00
-->
<template>
  <transition mode="out-in"
              name="custom"
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut">
    <router-view />
  </transition>
</template>

<style>
.animated {
  animation-duration: 0.7s;
}
</style>

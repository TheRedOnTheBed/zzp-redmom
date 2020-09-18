<!--
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-04-14 02:37:44
 * @LastEditors: zzp
 * @LastEditTime: 2020-05-27 00:26:49
 -->
<!-- 登录框 -->
<template>
  <div class="box">
    <div class="title">登录</div>
    <el-form ref="userRef1"
             :model="user"
             class="input demo-ruleForm"
             status-icon
             :rules="rules">
      <label for="name"
             :class="this.keep[0]||this.focusing[0]||this.user.name!=''?focusClass[0]:''">用户名</label>
      <el-form-item prop="name">
        <el-input v-model="user.name"
                  @focus="isFocus(0)"
                  @blur="isBlur(0)"></el-input>
      </el-form-item>
      <span class="spin"
            :class="this.keep[0]||this.focusing[0]||this.user.name!=''?focusClass[1]:''"></span>
    </el-form>
    <el-form ref="userRef2"
             :model="user"
             class="input demo-ruleForm"
             status-icon
             :rules="rules">
      <label for="pwd"
             :class="this.keep[1]||this.focusing[1]||this.user.pwd!=''?focusClass[0]:''">密码</label>
      <el-form-item prop="pwd">
        <el-input auto-complete="off"
                  type="password"
                  v-model="user.pwd"
                  @focus="isFocus(1)"
                  @blur="isBlur(1)"></el-input>
      </el-form-item>
      <span class="spin"
            :class="this.keep[1]||this.focusing[1]||this.user.pwd!=''?focusClass[1]:''"></span>
    </el-form>
    <div class="button login"
         @click="submit">
      <button>
        <span>登录</span>
        <i class="fas fa-check"></i>
      </button>
    </div>
    <a href="javascript:"
       class="pass-forgot">忘记密码？</a>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'LoginFrom',
  data () {
    //用户名选择器，对结果进行筛选
    var validateName = (rule, value, callback) => {
      if (value === '') {
        this.keep[0] = true
        callback(new Error('请输入用户名'))
      } else {
        this.keep[0] = false
        callback()
      }
    }
    //密码选择器，对结果进行筛选
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        this.keep[1] = true
        callback(new Error('请输入密码'))
      } else {
        this.keep[1] = false
        callback()
      }
    }
    return {
      isLogin: false,//是否成功登录
      keep: [false, false],//是否保持原来样式
      user: {
        name: '',
        pwd: ''
      },
      rules: {
        name: [
          { validator: validateName, trigger: 'blur' }
        ],
        pwd: [
          { validator: validatePass, trigger: 'blur' }
        ]
      },
      focusing: [false, false],//是否获取焦点
      focusClass: ['label-focus', 'spin-focus']
    }
  },
  mounted () {
    this.$nextTick(function () {
      const _this = this
      $('.button').click(function (e) {
        if (_this.isLogin) {
          var pX = e.pageX
          var pY = e.pageY
          var oX = parseInt($(this).offset().left)
          var oY = parseInt($(this).offset().top)

          $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>')
          $('.x-' + oX + '.y-' + oY + '').animate({
            width: '500px',
            height: '500px',
            top: '-250px',
            left: '-250px'

          }, 600)
          $('button', this).addClass('active')
        }
      })
    })
  },
  methods: {
    isFocus (num) {
      this.focusing[num] = true
      // console.log(this.focusing[num])
      this.$forceUpdate()
    },
    isBlur (num) {
      this.focusing[num] = false
      // console.log(this.focusing)
      this.$forceUpdate()
    },
    /**
     * 登录事件
     */
    submit () {
      let flag1, flag2
      this.$refs.userRef1.validate(valid => {
        flag1 = valid
      })
      this.$refs.userRef2.validate(valid => {
        flag2 = valid
      })
      if (flag1 && flag2) {
        console.log(1)
      } else {
        console.log(2)
      }
    },
  }
}
</script>
<style scoped>
@import "../../../public/css/login.css";
.label-focus {
  line-height: 18px;
  font-size: 18px;
  font-weight: 100;
  top: 0px;
}
.spin-focus {
  width: 100%;
}
</style>

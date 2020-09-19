<!--
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-04-24 02:10:39
 * @LastEditors: zzp
 * @LastEditTime: 2020-09-18 23:39:34
 -->
<!-- 注册框 -->
<template>
  <div class="box"
       style="padding: 50px 50px 15px 50px;">
    <div class="title">注册</div>
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
    <el-form ref="userRef3"
             :model="user"
             class="input demo-ruleForm"
             status-icon
             :rules="rules">
      <label for="checkPwd"
             :class="this.keep[2]||this.focusing[2]||this.user.checkPwd!=''?focusClass[0]:''">确认密码</label>
      <el-form-item prop="checkPwd">
        <el-input auto-complete="off"
                  type="password"
                  v-model="user.checkPwd"
                  @focus="isFocus(2)"
                  @blur="isBlur(2)"></el-input>
      </el-form-item>
      <span class="spin"
            :class="this.keep[2]||this.focusing[2]||this.user.checkPwd!=''?focusClass[1]:''"></span>
    </el-form>
    <div class="button register">
      <button>
        <span>注册</span>
        <i class="fas fa-check"></i>
      </button>
    </div>
    <div class="button reset"
         @click="reset">
      <button>
        <span>重置</span>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RegisterFrom',
  data () {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        this.keep[0] = true
        callback(new Error('请输入用户名'))
      } else {
        this.keep[0] = false
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        this.keep[1] = true
        callback(new Error('请输入密码'))
      } else {
        if (this.user.checkPwd !== '') {
          this.$refs.user.validateField('checkPwd')
        }
        this.keep[1] = false
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (this.user.pwd !== '' && value === '') {
        this.keep[2] = true
        callback(new Error('请再次输入密码'))
      } else if (this.user.pwd !== '' && value !== this.user.pwd) {
        this.keep[2] = true
        callback(new Error('两次输入密码不一致!'))
      } else if ((this.user.pwd === '' && value !== '') || (this.user.pwd === '' && value === '')) {
        this.keep[2] = true
        callback(new Error('请输入密码'))
      }
      else {
        this.keep[2] = false
        callback()
      }
    }
    return {
      isRegister: false,
      keep: [false, false, false],
      focusing: [false, false, false],
      user: {
        name: '',
        pwd: '',
        checkPwd: ''
      },
      rules: {
        name: [
          { validator: validateName, trigger: 'blur' }
        ],
        pwd: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPwd: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      },
      // 输入框获得焦点时保持的样式
      focusClass: ['label-focus', 'spin-focus']
    }
  },
  methods: {
    isFocus (num) {
      this.focusing[num] = true
      // console.log(this.focusing[num])
      this.$forceUpdate()//更新页面，重新渲染
    },
    isBlur (num) {
      this.focusing[num] = false
      // console.log(this.focusing)
      this.$forceUpdate()
    },
    /**初始化 */
    init () {
      for (let i = 0; i < this.keep.length; i++) {
        this.keep[i] = false
        this.focusing[i] = false
      }
      this.$forceUpdate()
    },
    /**重置 */
    reset () {
      this.init()
      this.$refs.userRef1.resetFields()
      this.$refs.userRef2.resetFields()
      this.$refs.userRef3.resetFields()
    }
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

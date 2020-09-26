<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-09-19 16:38:25
 * @LastEditors: zzp
 * @LastEditTime: 2020-09-27 00:52:19
-->
<!-- 新用户注册使用填写信息框 -->
<template>
  <div class="box">
    <h5 style="text-align:center;margin-bottom:30px;color:red">
      花点时间填写真实信息，我们会让结果更合您的心意。
    </h5>
    <el-form :model="user"
             :rules="rules"
             ref="user"
             label-width="100px"
             class="demo-user">
      <el-form-item label="我是"
                    prop="sex">
        <el-radio-group v-model="user.sex">
          <el-radio label="男"><i class="fa fa-mars-stroke"
               style="font-size:18px"></i>&nbsp;
            男</el-radio>
          <el-radio label="女"><i class="fa fa-mercury"
               style="font-size:18px"></i>&nbsp;
            女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="出生日期"
                    required>
        <el-col :span="11">
          <el-form-item prop="date">
            <el-date-picker type="date"
                            placeholder="选择日期"
                            v-model="user.date"
                            style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="常住地"
                    prop="region">
        <el-select v-model="user.provincial"
                   placeholder="请选择省(直辖市)">
          <el-option v-for="item in provincial"
                     :key="item.pid"
                     :label="item.provincial"
                     :value="item.pid"></el-option>
        </el-select>
        <el-select v-model="user.city"
                   placeholder="请选择市"
                   id="citybox"
                   style="margin-left:20px">
          <el-option v-for="item in city"
                     :key="item.cid"
                     :label="item.city"
                     :value="item.cid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="婚姻状况"
                    prop="marital">
        <el-radio-group v-model="user.marital">
          <el-radio label="未婚">未婚</el-radio>
          <el-radio label="离异">离异</el-radio>
          <el-radio label="丧偶">丧偶</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="身高"
                    prop="height">
        <el-input v-model.number="user.height"
                  style="width:228px"
                  placeholder="单位：cm"></el-input>
      </el-form-item>
      <el-form-item label="学历"
                    prop="academic">
        <el-select v-model="user.academic"
                   placeholder="请选择学历">
          <el-option v-for="item in academic"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="月薪"
                    prop="salary">
        <el-select v-model="user.salary"
                   placeholder="请选择月薪">
          <el-option v-for="item in salary"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <hr style="border:1px dashed #000; height:1px; margin-bottom:20px">
      <el-form-item label="邮箱"
                    prop="email">
        <el-input v-model="user.email"
                  style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="验证码"
                    prop="verification_code">
        <el-input placeholder="请输入验证码"
                  clearable
                  style="width:150px"></el-input>
        <el-button style="margin-left:20px;"
                   type="info"
                   :disabled="buttonChange"
                   @click="sendCode"
                   id="codebtn">获取验证码</el-button>
      </el-form-item>
      <el-form-item label="昵称"
                    prop="name">
        <el-input v-model="user.name"
                  style="width:228px"></el-input>
      </el-form-item>
      <el-form-item label="自我介绍"
                    prop="desc">
        <el-input type="textarea"
                  v-model="user.desc"
                  :rows="6"
                  style="width:400px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="submitForm('user')">立即创建</el-button>
        <el-button @click="resetForm('user')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
export default {
  name: 'NewInfoFrom',
  mounted () {
    this.getProvince()
  },
  watch: {
    getUserprovince (newVal, oldVal) {
      this.getCity(this.user.provincial)
    }
  },
  computed: {
    getUserprovince () {
      return this.user.provincial
    }
  },
  data () {
    var checkHeight = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('身高不能为空'))
      }
      else if (!Number.isInteger(value)) {
        callback(new Error('请输入整数值'))
      }
      else {
        if (value < 130 || value > 250) {
          callback(new Error('必须在130cm-250cm之间'))
        } else {
          callback()
        }
      }
    }
    var checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮箱不能为空'))
      }
      else {
        if (!this.testEmail(value)) {
          callback(new Error('请输入正确的邮箱'))
        } else {
          callback()
        }
      }
    }
    var checkRegion = (rule, value, callback) => {
      if (this.user.provincial === '') {
        return callback(new Error('常住地不能为空'))
      }
      else {
        if (this.user.city === '') {
          return callback(new Error('请选择市（区）'))
        }
      }
    }
    return {
      user: {
        sex: '',
        region: '',
        date: '',
        marital: '',
        height: '',
        provincial: '',
        city: '',
        academic: '',
        email: '',
        desc: [],
        name: ''
      },
      provincial: [],
      city: [],
      buttonChange: false,//验证码按钮是否可选
      time: 60,//间隔时间
      timer: '',//定时器
      academic: [{
        value: 1,
        label: '高中中专及以下'
      }, {
        value: 2,
        label: '大专'
      }, {
        value: 3,
        label: '本科'
      }, {
        value: 4,
        label: '双学士'
      }, {
        value: 5,
        label: '硕士'
      }, {
        value: 6,
        label: '博士'
      }],
      salary: [{
        value: 1,
        label: '2000元以下'
      }, {
        value: 2,
        label: '2000-5000元'
      }, {
        value: 3,
        label: '5000-10000元'
      }, {
        value: 4,
        label: '10000-20000元'
      }, {
        value: 5,
        label: '20000元以上'
      }],
      rules: {
        height: [{ required: true, trigger: 'blur', validator: checkHeight }],
        region: [
          { required: true, trigger: 'blur', validator: checkRegion },
        ],
        date: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change',
          },
        ],
        sex: [{ required: true, message: '请选择性别', trigger: 'change' }],
        marital: [
          { required: true, message: '请选择婚姻状况', trigger: 'change' },
        ],
        academic: [{ required: true, message: '请选择学业状况', trigger: 'change' },],
        salary: [{ required: true, message: '请选择月薪状况', trigger: 'change' },],
        email: [{
          required: true, trigger: 'blur', validator: checkEmail
        }],
        verification_code: [{ required: true, message: '请填写验证码', trigger: 'blur' }],
        name: [{ required: true, message: '请填写昵称', trigger: 'blur' },],
      },
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    testEmail (mail) {
      var isMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      var flag = isMail.test(mail)
      return flag
    },
    doLoop () {
      this.time--;
      if (this.time > 0) {
        $('#codebtn').text(this.time + '秒后可重新获取')
      } else {
        clearInterval(this.timer) //清除js定时器
        this.buttonChange = false
        $('#codebtn').text('获取验证码')
        this.time = 60 //重置时间
      }
    },
    sendCode () {
      if (this.testEmail(this.user.email)) {
        this.buttonChange = true
        this.timer = setInterval(this.doLoop, 1000);
      }
      else if (this.user.email == '') {
        this.$message({
          message: '邮箱不能为空',
          type: 'warning'
        })
      }
      else {
        this.$message.error('请填写正确的邮箱')
      }
    },
    getProvince () {
      this.axios.get('api/getprovince').then((res) => {
        // console.log(res)
        var msg = res.data.msg
        if (msg === 'ok') {
          this.provincial = res.data.province
          // console.log(res.data.province)
        }
      })
    },
    getCity (userpid) {
      this.axios.get('api/getcity', {
        params: {
          pid: userpid
        }
      }).then((res) => {
        console.log(res)
        var msg = res.data.msg
        if (msg === 'ok') {
          this.city = res.data.city
          // console.log(res.data.province)
        }
      })
    }

  },
}
</script>
<style scoped>
.box {
  position: relative;
  top: 0;
  left: 425px;
  opacity: 1;
  float: left;
  padding: 60px 50px 40px 50px;
  width: 600px;
  min-width: 600px;
  max-width: 600px;
  background: rgb(255, 255, 255, 0.9);
  border-radius: 10px;
}
</style>

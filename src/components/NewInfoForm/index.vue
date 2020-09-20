<!--
 * @Descripttion: 
 * @version: 
 * @Author: zzp
 * @Date: 2020-09-19 16:38:25
 * @LastEditors: zzp
 * @LastEditTime: 2020-09-21 01:04:25
-->
<!-- 新用户注册使用填写信息框 -->
<template>
  <div class="box">
    <h5 style="text-align:center;margin-bottom:30px;color:red">花点时间填写真实信息，我们会让结果更合您的心意。</h5>
    <el-form :model="user"
             :rules="rules"
             ref="user"
             label-width="100px"
             class="demo-user">
      <el-form-item label="我是"
                    prop="sex">
        <el-radio-group v-model="user.sex">
          <el-radio label="男"><i class="fa fa-mars-stroke"
               style="font-size:18px"></i>&nbsp; 男</el-radio>
          <el-radio label="女"><i class="fa fa-mercury"
               style="font-size:18px"></i>&nbsp; 女</el-radio>
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
                   placeholder="请选择省">
          <el-option v-for="item in provincial"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value"></el-option>
        </el-select>
        <el-select v-model="user.city"
                   placeholder="请选择市">
          <el-option v-for="item in city"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value"></el-option>
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
      <el-form-item label="活动性质"
                    prop="type">
        <el-checkbox-group v-model="user.type">
          <el-checkbox label="美食/餐厅线上活动"
                       name="type"></el-checkbox>
          <el-checkbox label="地推活动"
                       name="type"></el-checkbox>
          <el-checkbox label="线下主题活动"
                       name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光"
                       name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="我是"
                    prop="resource">
        <el-radio-group v-model="user.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式"
                    prop="desc">
        <el-input type="textarea"
                  v-model="user.desc"></el-input>
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
  data () {
    return {
      user: {
        sex: '',
        region: '',
        date: '',
        marital: '',
        type: [],
        resource: '',
        desc: '',
        provincial: '',
        city: '',
      },
      provincial:[],
      city:[],
      rules: {
        region: [
          { required: true, message: '请选择常住地', trigger: 'change' },
        ],
        date: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change',
          },
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change',
          },
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' },
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
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
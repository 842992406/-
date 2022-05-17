<template>
  <el-form
    :model="userForm"
    :rules="rules"
    ref="userForm"
    class="demo-userForm"
  >
    <el-form-item label="" prop="name"
      ><el-input
        type="text"
        autocomplete="off"
        v-model.trim="userForm.name"
        prefix-icon="el-icon-user-solid"
        placeholder="请输入用户名"
      ></el-input
    ></el-form-item>
    <!-- 手机号 -->
    <el-form-item label="" prop="tel"
      ><el-input
        type="text"
        autocomplete="off"
        v-model.trim="userForm.tel"
        prefix-icon="el-icon-user-solid"
        placeholder="请输入手机号"
      ></el-input
    ></el-form-item>
    <el-form-item label="" prop="pass"
      ><el-input
        type="password"
        autocomplete="off"
        v-model.trim="userForm.pass"
        prefix-icon="el-icon-lock"
        placeholder="请输入密码"
        show-password
      ></el-input
    ></el-form-item>
    <el-form-item label="" prop="checkPass"
      ><el-input
        type="password"
        autocomplete="off"
        v-model.trim="userForm.checkPass"
        prefix-icon="el-icon-lock"
        placeholder="请输入密码"
        show-password
        @keyup.enter.native="submitForm('userForm')"
      ></el-input
    ></el-form-item>
    <el-form-item class="btns">
      <!-- 所在寝室选择 -->
      <el-select
        v-model.trim="userForm.buildingNum"
        clearable
        placeholder="请选择"
        style="margin-right: 30px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.label"
        >
        </el-option>
      </el-select>
      <!-- 重置按钮 -->
      <el-button @click="reset">重置</el-button>
      <!-- 注册按钮 -->
      <el-button type="primary" @click="addUser">注册</el-button>
    </el-form-item>
  </el-form>
</template>
 
<script>
import { Dialog } from 'element-ui'
// import axios from "axios";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.userForm.checkPass !== '') {
          this.$refs.userForm.validateField('checkPass')
        }
        callback()
      }
    }

    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.userForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }

    return {
      activeName: 'second',
      userForm: {
        name: '',
        pass: '',
        checkPass: '',
        tel: '',
        buildingNum: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入您的名称', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' },
        ],
        pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' },
        ],
      },
      // 楼层选择
      options: [
        {
          value: '选项1',
          label: '新1楼',
        },
        {
          value: '选项2',
          label: '新2楼',
        },
        {
          value: '选项3',
          label: '新3楼',
        },
        {
          value: '选项4',
          label: '新4楼',
        },
        {
          value: '选项5',
          label: '新5楼',
        },
        {
          value: '选项6',
          label: '新6楼',
        },
        {
          value: '选项7',
          label: '新7楼',
        },
        {
          value: '选项8',
          label: '新8楼',
        },
        {
          value: '选项9',
          label: '新9楼',
        },
        {
          value: '选项10',
          label: '新10楼',
        },
        {
          value: '选项11',
          label: '新11楼',
        },
        {
          value: '选项12',
          label: '新12楼',
        },
        {
          value: '选项13',
          label: '新13楼',
        },
        {
          value: '选项14',
          label: '新14楼',
        },
        {
          value: '选项15',
          label: '新15楼',
        },
      ],
      value: '',
    }
  },

  methods: {
    // 添加
    addUser() {
      const name = this.userForm.name
      const password = this.userForm.pass
      const tel = this.userForm.tel
      const buildingNum = this.userForm.buildingNum
      this.$refs['userForm'].validate((valid) => {
        console.log(valid)
        if (valid) {
          this.$http
            .post(
              '/api/user/addUser',
              {
                username: name,
                password: password,
                tel: tel,
                buildingNum: buildingNum,
              },
              {}
            )
            .then(function (res) {
              console.log(res)
              // alert("注册成功！");
              // reset();
            })
          this.$message({ message: '注册成功', type: 'success' })(
            (this.userForm.name = ''),
            (this.userForm.pass = ''),
            (this.userForm.tel = ''),
            (this.userForm.checkPass = ''),
            (this.userForm.buildingNum = '')
          ),
            this.$router.push('/login')
        } else {
          this.$message.error('注册失败')
          this.$refs['userForm'].resetFields()
          return false
        }
      })

      // .catch(function (err) {
      //   console.log(err);
      // });
    },

    reset() {
      ;(this.userForm.name = ''),
        (this.userForm.pass = ''),
        (this.userForm.checkPass = ''),
        (this.userForm.buildingNum = '')
    },
  },
}
</script>
<style scoped lang="less">
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
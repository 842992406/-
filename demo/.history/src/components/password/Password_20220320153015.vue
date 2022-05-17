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
      <el-button @click="reset">重置</el-button>
      <el-button type="primary" @click="addUser">注册</el-button>
    </el-form-item>
  </el-form>
</template>
 
<script>
import { Dialog } from "element-ui";
// import axios from "axios";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.userForm.checkPass !== "") {
          this.$refs.userForm.validateField("checkPass");
        }
        callback();
      }
    };

    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.userForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      activeName: "second",
      userForm: {
        name: "",
        pass: "",
        checkPass: "",
        tel: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入您的名称", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
        ],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    // 添加
    addUser() {
      const name = this.userForm.name;
      const password = this.userForm.pass;
      const tel = this.userForm.tel;
      this.$refs["userForm"].validate((valid) => {
        if (valid) {
          this.$http
            .post(
              "/api/user/addUser",
              { username: name, password: password, tel: tel },
              {}
            )
            .then(function (res) {
              console.log(res);
              // alert("注册成功！");
              // reset();
            });
          this.$message({ message: "注册成功", type: "success" });
          this.$router.push("/login");
        } else {
          this.$message.error("注册失败");
          this.$refs["userForm"].resetFields();
          return false;
        }
      });

      // .catch(function (err) {
      //   console.log(err);
      // });
    },

    reset() {
      (this.userForm.name = ""),
        (this.userForm.pass = ""),
        (this.userForm.checkPass = "");
    },
  },
};
</script>
<style scoped lang="less">
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
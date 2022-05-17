<template>
  <div class="login">
    <div class="login_form">
      <p>欢迎使用</p>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户登录" name="first">
          <el-form :model="loginForm" :rules="rules" ref="loginForm">
            <el-form-item label="" prop="account" class="elItem">
              <el-input
                type="text"
                autocomplete="off"
                v-model="loginForm.account"
                prefix-icon="el-icon-user-solid"
                placeholder="用户名"
              ></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input
                type="password"
                autocomplete="off"
                prefix-icon="el-icon-lock"
                placeholder="密码"
                v-model="loginForm.password"
                show-password
                @keyup.enter.native="goLogin"
              ></el-input>
            </el-form-item>
            <el-form-item class="two-btn">
              <el-button @click="resetLoginForm">重置</el-button>
              <el-button type="primary" @click="goLogin">登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
</template>

<script>
export default {
  name: "Admin",
  data() {
    var validateAccount = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("账号不能为空"));
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
    };
    return {
      loginForm: {
        account: "",
        password: "",
      },
      activeName: "first", //默认显示登录页面
      rules: {
        account: [
          {
            validator: validateAccount,
            trigger: "blur",
          },
        ],
        password: [
          {
            validator: validatePassword,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 账户密码判断实现简单的登录跳转功能
    goLogin() {
      this.$axios
        .post("/api/user/login", {
          username: this.loginForm.account,
          password: this.loginForm.password,
        })
        .then((res) => {
          // 判断账号和密码是否正确
          for (var i = 0; res.data.length; i++) {
            // 账号
            if (
              res.data[i].username === this.loginForm.account ||
              res.data[i].password === this.loginForm.password
            ) {
              this.$message({ message: "登录成功", type: "success" });
              this.$router.push("/home");
              break;
            } else if (i === res.data.length - 1) {
              this.$message.error("登陆失败");
              this.$refs["loginForm"].resetFields();
            }
          }

          // if (res.data.success === 1) {
          //   window.sessionStorage.setItem("UserID", this._data.account);
          //   this.$router.push("/home");
          // } else if (res.data.success === 0) alert("用户名或密码错误");
          // else alert("请重新输入，再试一次");
        });
    },

    resetLoginForm() {
      this.$refs["loginForm"].resetFields();
    },
    handleClick() {},
  },
};
</script>

<style>
</style>
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
export default {};
</script>

<style>
</style>
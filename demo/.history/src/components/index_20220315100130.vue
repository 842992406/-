<template>
  <div>
    <button @click="comLogin = 'Login'">登录</button>
    <!-- <Login :style="hide"></Login> -->
    <div class="login-box">
      <keep-alive include="Login">
        <component :is="comLogin"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Login from "@/components/login/Login.vue";
export default {
  data() {
    return {
      // 登录界面隐藏
      hide: "display: none",
      comLogin: "Login",
    };
  },
  components: {
    Login,
  },
  methods: {
    login() {
      this.hide = "";
    },
  },

  mounted() {
    document.body.style.backgroundColor = "#d1d1d1";
  },
};
</script>

<style>
</style>
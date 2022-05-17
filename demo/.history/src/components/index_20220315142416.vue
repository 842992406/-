<template>
  <div class="index-box">
    <!-- <button @click="comLogin = 'Home'">主页</button>
    <button @click="comLogin = 'Login'">登录</button> -->
    <!-- <Login :style="hide"></Login> -->
    <div class="login-box">
      <keep-alive include="Home">
        <component :is="comLogin"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Login from "@/components/login/Login.vue";
import Home from "@/components/Home.vue";
export default {
  data() {
    return {
      // 登录界面隐藏
      hide: "display: none",
      comLogin: "Home",
    };
  },
  components: {
    Login,
    Home,
  },
  methods: {
    login() {
      this.hide = "";
    },
  },

  mounted() {
    document.body.style.backgroundColor = "#F6F6F6";
  },
};
</script>

<style lang="less" scoped>
</style>
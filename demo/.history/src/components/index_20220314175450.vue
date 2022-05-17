<template>
  <div>
    <button @click="login">登录</button>
    <Login :style="hide"></Login>
  </div>
</template>

<script>
import Login from "@/components/login/Login.vue";
export default {
  data() {
    return {
      // 登录界面隐藏
      hide: "display: none",
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
};
</script>

<style>
</style>
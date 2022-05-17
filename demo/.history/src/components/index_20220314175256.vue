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
      hide: "display: none",
    };
  },
  components: {
    Login,
  },
  methods: {
    login() {},
  },
};
</script>

<style>
</style>
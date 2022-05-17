<template>
  <div>
    <button @click="login">登录</button>
    <Login style="display: none"></Login>
  </div>
</template>

<script>
import Login from "@/components/login/Login.vue";
export default {
  components: {
    Login,
  },
};
</script>

<style>
</style>
<template>
  <div class="index-box">
    <!-- 导航栏菜单 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"
        ><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item
      >
    </el-menu>

    <button @click="comLogin = 'Home'">主页</button>
    <button @click="comLogin = 'Login'">登录</button>
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
    document.body.style.backgroundColor = "#d1d1d1";
  },
};
</script>

<style lang="less" scoped>
.index-box {
  position: absolute;
}

.el-menu-demo {
  position: relative;
  float: right;
}
</style>
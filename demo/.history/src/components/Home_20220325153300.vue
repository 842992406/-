<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <MyHeader></MyHeader>
    <!-- 页面主体区域 -->
    <div class="home-main-box">
      <!-- 左侧边栏 -->
      <MyAside></MyAside>
      <!-- 右侧内容主体区域 -->
      <div class="home-main-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 头部区域组件
import MyHeader from "@/components/subcomponents/MyHeader.vue";
// 左侧边栏组件
import MyAside from "@/components/subcomponents/MyAside.vue";
// // 导入共享组件
// import bus from "../router/eventBus.js";
export default {
  name: "Home",
  // data() {
  //   return {
  //     getLoginFromLogin: false,
  //   };
  // },
  // // 获取是否登录的信息
  // created() {
  //   bus.$on("share", function (val) {
  //     console.log(val);
  //     this.getLoginFromLogin = val;
  //   });
  // },
  // 注册组件
  components: {
    MyHeader,
    MyAside,
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .home-main-box {
    height: 100%;
    display: flex;
    .home-main-body {
      padding: 15px;
      flex: 1;
    }
  }
}
</style>
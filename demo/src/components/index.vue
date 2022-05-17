<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <MyHeader></MyHeader>
    <!-- 内容主体区域 -->
    <div class="home-main-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/subcomponents/MyHeader.vue";
export default {
  components: {
    MyHeader,
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
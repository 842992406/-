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
export default {
  name: "Home",
};
</script>

<style>
</style>
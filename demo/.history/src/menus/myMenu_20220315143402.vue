<template>
  <!-- 导航栏菜单 -->
  <div class="menu-box">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" class="elLeft">处理中心</el-menu-item>
      <el-menu-item index="2">处理中心</el-menu-item>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">消息中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.menu-box {
  position: absolute;
}
.elLeft {
  position: relative;
  left: 20px;
}
</style>
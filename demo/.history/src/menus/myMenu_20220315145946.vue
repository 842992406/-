<template>
  <!-- 导航栏菜单 -->
  <div class="menu-box">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" class="elLeft1">登录</el-menu-item>
      <!-- <el-menu-item index="1" class="elLeft1">个人中心</el-menu-item> -->
      <el-menu-item index="2" class="elLeft2">购物车</el-menu-item>
      <el-menu-item index="3" class="elLeft3">消息中心</el-menu-item>
      <el-menu-item index="4" class="elLeft4">消息中心</el-menu-item>
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
  position: relative;
}
.elLeft1 {
  position: absolute;
  right: 0px;
  float: right;
}
.elLeft2 {
  position: absolute;
  right: 100px;
  float: right;
}
.elLeft3 {
  position: absolute;
  right: 200px;
  float: right;
}
.elLeft4 {
  position: absolute;
  right: 300px;
  float: right;
}
</style>
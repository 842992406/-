<template>
  <el-container>
    <!-- 头部区域 -->
    <el-header>
      <MyHeader></MyHeader>
      <!-- 主体区域 -->
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
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
.el-header,
.el-footer {
  // background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 444px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
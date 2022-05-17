<template>
  <div>
    <!-- 标题 -->
    <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/user' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>信息管理</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 修改信息 -->
    <el-card>
      <!-- 2. 为 ECharts 准备一个定义了宽高的 DOM -->
      <div id="main" style="margin-top: 5px; width: 800px; height: 400px">
        用户名：
        <el-input
          class="userMessage"
          v-model="name"
          placeholder="请输入内容"
          :disabled="true"
        ></el-input>
        楼号：
        <el-input
          class="userMessage"
          v-model="name"
          placeholder="请输入内容"
          :disabled="true"
        ></el-input>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'UserMessage',
  data() {
    return {
      name: '',
    }
  },
}
</script>

<style lang='less' scoped>
.box-card {
  width: 480px;
}
// 用户信息框
.userMessage {
  display: block;
  padding-top: 30px;
  width: 200px;
}
</style>
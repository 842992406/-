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
        <el-descriptions
          title="垂直带边框列表"
          direction="vertical"
          :column="4"
          border
        >
          <el-descriptions-item label="用户名"
            >kooriookami</el-descriptions-item
          >
          <el-descriptions-item label="手机号"
            >18100000000</el-descriptions-item
          >
          <el-descriptions-item label="居住地" :span="2"
            >苏州市</el-descriptions-item
          >
          <el-descriptions-item label="备注">
            <el-tag size="small">学校</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="联系地址"
            >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item
          >
        </el-descriptions>
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
  display: inline-block;
  padding-top: 30px;
  width: 200px;
}
</style>
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
          <el-descriptions-item label="所在地" :span="2"
            >郑州市</el-descriptions-item
          >
          <el-descriptions-item label="备注">
            <el-tag size="small">学校学生</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="所在楼道"
            >江苏省苏州</el-descriptions-item
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
      user: [],
    }
  },

  mounted() {
    // 渲染的时候将获取用户信息
    this.getUser()
  },

  methods: {
    // 获取用户的信息
    getUser() {
      this.$axios.get('/api/user/getAllUser', {}).then((res) => {
        // 获取登录用户的信息
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].username == this.$store.state.loginName) {
            this.user = res.data[i]
            break
          }
        }
        console.log(res.data)
      })
    },
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
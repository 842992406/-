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
          <!-- 用户名 -->
          <el-descriptions-item label="用户名"
            ><span v-show="!edit" style="display: inline-block; width: 100px">{{
              user.username
            }}</span>
            <el-input
              v-show="edit"
              v-model="input"
              size="mini"
              style="width: 100px"
            ></el-input>
            <!-- 定义一个点击事件，用于将文本改变为输入框，进行信息的修改 -->
            <el-link style="left: 14vw" :underline="false"
              ><i
                :class="{ 'el-icon-edit': !edit, 'el-icon-check': edit }"
                @click="edit = !edit"
              ></i
            ></el-link>
          </el-descriptions-item>
          <!-- 手机号码 -->
          <el-descriptions-item label="手机号"
            ><span style="display: inline-block; width: 100px">{{
              user.tel
            }}</span>
            <!-- 定义一个点击事件，用于将文本改变为输入框，进行信息的修改 -->
            <el-link style="left: 15vw" :underline="false"
              ><i class="el-icon-edit"></i
            ></el-link>
          </el-descriptions-item>
          <!-- 所在地 -->
          <el-descriptions-item label="所在地" :span="2"
            >{{ user.city }}
            <el-link style="left: 9.5vw" :underline="false" disabled
              ><i class="el-icon-edit"></i
            ></el-link>
          </el-descriptions-item>
          <!-- 备注 -->
          <el-descriptions-item label="备注">
            <el-tag size="small">学校学生</el-tag>
            <el-link style="left: 12.4vw" :underline="false" disabled
              ><i class="el-icon-edit"></i
            ></el-link>
          </el-descriptions-item>
          <!-- 所在楼号 -->
          <el-descriptions-item label="所在楼号"
            >{{ user.buildingNum }}
            <!-- 定义一个点击事件，用于将文本改变为输入框，进行信息的修改 -->
            <el-link style="left: 36vw" :underline="false"
              ><i class="el-icon-edit"></i
            ></el-link>
          </el-descriptions-item>
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
      // 文本框和输入框之间的相互转换
      edit: false,
      // 输入框中的值
      input: '',
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
      })
    },
  },
}
</script>

<style lang='less' scoped>
.box-card {
  width: 480px;
}
// 面包框
.bread {
  display: inline-block;
  margin-bottom: 5px;
}
// 用户信息框
.userMessage {
  display: inline-block;
  padding-top: 30px;
  width: 200px;
}

// 输入框的信息
.el-input__inner {
  height: 25px;
  padding: 0;
  font-size: 18px;
}
</style>
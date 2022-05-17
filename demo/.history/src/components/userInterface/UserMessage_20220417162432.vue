<template>
  <div>
    <!-- 标题 -->
    <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/user' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>信息管理</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 修改信息 -->
    <el-card>
      <el-button
        type="primary"
        @click="open"
        round
        style="position: absolute; right: 12vw"
        >点击提交更改</el-button
      >
      <!-- 2. 为 ECharts 准备一个定义了宽高的 DOM -->
      <div id="main" style="margin-top: 5px; width: 800px; height: 400px">
        <el-descriptions
          title="用户的个人信息列表"
          direction="vertical"
          :column="4"
          border
        >
          <!-- 用户名 -->
          <el-descriptions-item label="用户名"
            ><span
              v-show="!edit1"
              style="display: inline-block; width: 100px"
              >{{ user.username }}</span
            >
            <el-input
              ref="inputName"
              v-show="edit1"
              v-model="input1"
              size="mini"
              style="width: 100px"
            ></el-input>
            <!-- 定义一个点击事件，用于将文本改变为输入框，进行信息的修改 -->
            <el-link style="left: 12.5vw" :underline="false"
              ><i
                :class="{ 'el-icon-edit': !edit1, 'el-icon-close': edit1 }"
                @click="changeName"
              ></i
            ></el-link>
          </el-descriptions-item>

          <!-- 手机号码 -->
          <el-descriptions-item label="手机号"
            ><span
              v-show="!edit2"
              style="display: inline-block; width: 100px"
              >{{ user.tel }}</span
            >
            <el-input
              ref="inputTel"
              v-show="edit2"
              v-model="input2"
              size="mini"
              style="width: 100px"
            ></el-input>
            <!-- 定义一个点击事件，用于将文本改变为输入框，进行信息的修改 -->
            <el-link style="left: 10vw" :underline="false"
              ><i
                :class="{ 'el-icon-edit': !edit2, 'el-icon-close': edit2 }"
                @click="changeTel"
              ></i
            ></el-link>
          </el-descriptions-item>
          <!-- 所在地 -->
          <el-descriptions-item label="所在地" :span="2"
            ><span style="display: inline-block; width: 100px">{{
              user.city
            }}</span>
            <el-link style="left: 9.5vw" :underline="false" disabled
              ><i class="el-icon-edit"></i
            ></el-link>
          </el-descriptions-item>

          <!-- 备注 -->
          <el-descriptions-item label="备注">
            <el-tag size="small"
              ><span style="display: inline-block; width: 100px"
                >学校学生</span
              ></el-tag
            >
            <el-link style="left: 11vw" :underline="false" disabled
              ><i class="el-icon-edit"></i
            ></el-link>
          </el-descriptions-item>

          <!-- 所在楼号 -->
          <el-descriptions-item label="所在楼号"
            ><span
              v-show="!edit3"
              style="display: inline-block; width: 100px"
              >{{ user.buildingNum }}</span
            >
            <!-- 对所在楼号进行选择 -->
            <el-select
              ref="inputBuilding"
              v-show="edit3"
              v-model.trim="input3"
              clearable
              placeholder="请选择"
              style="margin-right: 30px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              >
              </el-option>
            </el-select>
            <!-- <el-input
              ref="inputBuilding"
              v-show="edit3"
              v-model="input3"
              size="mini"
              style="width: 100px"
            ></el-input> -->
            <!-- 定义一个点击事件，用于将文本改变为输入框，进行信息的修改 -->
            <el-link style="left: 30.3vw" :underline="false"
              ><i
                :class="{ 'el-icon-edit': !edit3, 'el-icon-close': edit3 }"
                @click="changeBuilding"
              ></i
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
      edit1: false,
      edit2: false,
      edit3: false,
      // 输入框中的值
      input1: '',
      input2: '',
      input3: '',
      // 楼层选择
      options: [
        {
          value: '选项1',
          label: '新1楼',
        },
        {
          value: '选项2',
          label: '新2楼',
        },
        {
          value: '选项3',
          label: '新3楼',
        },
        {
          value: '选项4',
          label: '新4楼',
        },
        {
          value: '选项5',
          label: '新5楼',
        },
        {
          value: '选项6',
          label: '新6楼',
        },
        {
          value: '选项7',
          label: '新7楼',
        },
        {
          value: '选项8',
          label: '新8楼',
        },
        {
          value: '选项9',
          label: '新9楼',
        },
        {
          value: '选项10',
          label: '新10楼',
        },
        {
          value: '选项11',
          label: '新11楼',
        },
        {
          value: '选项12',
          label: '新12楼',
        },
        {
          value: '选项13',
          label: '新13楼',
        },
        {
          value: '选项14',
          label: '新14楼',
        },
        {
          value: '选项15',
          label: '新15楼',
        },
      ],
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
    // 修改用户名
    changeName() {
      this.edit1 = !this.edit1
      // 当打开输入框时，自动将光标放到输入框内
      this.$nextTick(() => {
        this.$refs.inputName.focus()
      })
    },
    // 修改手机号码
    changeTel() {
      this.edit2 = !this.edit2
      // 当打开输入框时，自动将光标放到输入框内
      this.$nextTick(() => {
        this.$refs.inputTel.focus()
      })
    },
    // 修改楼号
    changeBuilding() {
      this.edit3 = !this.edit3
      // 当打开输入框时，自动将光标放到输入框内
      this.$nextTick(() => {
        this.$refs.inputBuilding.focus()
      })
    },
    // 最终提交按钮
    open() {
      const name = this.input1
      const tel = this.input2
      const buildingNum = this.input3
      const id = this.$store.state.loginId
      // 进行是否提交的判断
      this.$confirm('此操作将修改您的个人信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        // 进行前后台数据交互，将数据传给数据库
        this.$axios
          .post(
            '/api/user/updateUser',
            {
              username: name,
              tel: tel,
              buildingNum: buildingNum,
              id: id,
            },
            {}
          )
          .then((res) => {
            this.$message({
              type: 'success',
              message: '修改成功!',
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消修改',
            })
          })
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
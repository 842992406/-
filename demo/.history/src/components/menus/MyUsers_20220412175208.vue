<template>
  <div>
    <!-- 标题 -->
    <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 查询功能 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input v-model="formInline.user" placeholder="用户名"></el-input>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :data="tables" style="width: 100%" max-height="300">
      <el-table-column prop="username" label="姓名" width="150">
      </el-table-column>
      <el-table-column prop="tel" label="手机号" width="150"> </el-table-column>
      <el-table-column fixed prop="id" label="编号" width="150">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="150"> </el-table-column>
      <el-table-column prop="buildingNum" label="楼号" width="150">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import http from '../../api/http'
export default {
  name: 'MyUsers',
  data() {
    return {
      tableData: [],
      formInline: {
        user: '',
      },
    }
  },

  // 页面加载之后就立即启动其中的函数
  mounted() {
    this.getList()
  },
  // computed用来监控自己定义的变量，该变量不在data里面声明，直接在computed里面定义，
  //   然后就可以在页面上进行双向数据绑定展示出结果或者用作其他处理；
  computed: {
    // 查询用户
    tables() {
      const user = this.formInline.user
      if (user) {
        return this.tableData.filter((data) => {
          return Object.keys(data).some((key) => {
            return String(data[key]).toLowerCase().indexOf(user) > -1
          })
        })
      }
      return this.tableData
    },
  },
  methods: {
    // 删除该行的用户数据
    deleteRow(index, rows) {
      this.$axios
        .post('/api/user/delUser', { id: this.tableData[index].id })
        .then((res) => {
          this.$data.tableData[index].id = res.data.id
          rows.splice(index, 1)
          this.$message({ message: '删除成功', type: 'success' })
        })
    },
    // 显示全体用户的数据
    getList() {
      http.$axios('/api/user/getAllUser', {}).then((res) => {
        this.$data.tableData = res.data
      })
    },
  },
  created() {
    console.log(process.env.VUE_APP_BASE_API)
    // http
    //   .$axios({
    //     url: '/api/user/getAllUser',
    //   })
    //   .then((res) => {
    //     console.log(res.data)
    //   })
  },
}
</script>

<style lang="less" scoped>
.el-breadcrumb {
  margin-bottom: 10px;
}
</style>
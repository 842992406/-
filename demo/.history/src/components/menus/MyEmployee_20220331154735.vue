<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center">员工管理</h4>
    <!-- 查询功能 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input v-model="formInline.user" placeholder="用户名"></el-input>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :data="tables" style="width: 100%" max-height="300">
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="tel" label="手机号" width="180"> </el-table-column>
      <el-table-column fixed prop="id" label="编号" width="150">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="180"> </el-table-column>
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
export default {
  name: 'MyEmployee',
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
        .post('/api/user/delEmployee', { id: this.tableData[index].id })
        .then((res) => {
          this.$data.tableData[index].id = res.data.id
          rows.splice(index, 1)
          this.$message({ message: '删除成功', type: 'success' })
        })
    },
    // 显示全体用户的数据
    getList() {
      this.$axios.get('/api/user/getAllEmployee', {}).then((res) => {
        this.$data.tableData = res.data
      })
    },
  },
}
</script>

<style>
.text-center {
  text-align: center;
}
</style>
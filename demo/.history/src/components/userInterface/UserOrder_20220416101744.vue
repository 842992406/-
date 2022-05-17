<template>
  <div>
    <!-- 标题 -->
    <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>我的订单</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 查询功能 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="商品名称">
        <el-input v-model="formInline.user" placeholder="商品名称"></el-input>
      </el-form-item>
    </el-form>

    <!-- 表格 -->
    <el-table
      :data="tables"
      style="width: 100%; position: relative; bottom: 10px"
      max-height="300"
    >
      <el-table-column prop="name" label="商品名称" width="180">
      </el-table-column>
      <el-table-column prop="price" label="单价" width="180"> </el-table-column>
      <el-table-column fixed prop="id" label="编号" width="180">
      </el-table-column>
      <el-table-column prop="time" label="时间" width="180"> </el-table-column>
      <!-- 删除操作 -->
      <el-table-column fixed="right" label="删除" width="120">
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
      index: 0,
      rows: [],
      formInline: {
        user: '',
      },
      dialogFormVisible: false,
      btnChange: true,
      form: {
        name: '',
        tel: '',
        region: '',
        type: [],
        resource: '',
        desc: '',
      },
      formLabelWidth: '120px',
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
    // 获取所选的行与id
    changeModifyRow(index, rows) {
      this.btnChange = false
      this.dialogFormVisible = true
      ;(this.index = index), (this.rows = rows)
    },
    // 删除该行的用户数据
    deleteRow(index, rows) {
      this.$axios
        .post('/api/goods/delOrder', { id: this.tableData[index].id })
        .then((res) => {
          this.$data.tableData[index].id = res.data.id
          rows.splice(index, 1)
          this.$message({ message: '删除成功', type: 'success' })
        })
    },
    // 显示全体用户的数据
    getList() {
      this.$axios.get('/api/goods/getAllOrder', {}).then((res) => {
        // console.log(res.data)
        for (var i = 0; i < res.data.length - 1; i++) {
          if (res.data[i].username == this.$store.state.loginName) {
            var m = 0
            this.$data.tableData[m] = res.data[i]
          }
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.el-breadcrumb {
  margin-bottom: 10px;
}

.addEmployee {
  position: relative;
  left: 700px;
  bottom: 60px;
}
</style>
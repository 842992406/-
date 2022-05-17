<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center">员工管理</h4>
    <!-- 查询功能 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.user" placeholder="姓名"></el-input>
      </el-form-item>
    </el-form>

    <!-- 添加员工 -->
    <el-button
      type="primary"
      @click="dialogFormVisible = true"
      class="addEmployee"
      >添加员工</el-button
    >

    <el-dialog title="添加员工" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="form">
        <!-- 员工名字 -->
        <el-form-item label="名字" :label-width="formLabelWidth">
          <el-input v-model.trim="form.name" placeholder="姓名"></el-input>
        </el-form-item>
        <!-- 员工手机号 -->
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model.trim="form.tel" placeholder="手机号"></el-input>
        </el-form-item>
        <!-- 员工职位 -->
        <el-form-item label="职位" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择职位">
            <el-option label="外卖员" value="外卖员"></el-option>
            <el-option label="厨师" value="厨师"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <!-- @click="dialogFormVisible = false" -->
        <el-button type="primary" @click="addEmployee">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 表格 -->
    <el-table
      :data="tables"
      style="width: 100%; position: relative; bottom: 50px"
      max-height="300"
    >
      <el-table-column prop="name" label="姓名" width="150"> </el-table-column>
      <el-table-column prop="tel" label="手机号" width="150"> </el-table-column>
      <el-table-column fixed prop="id" label="编号" width="150">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="150"> </el-table-column>
      <el-table-column prop="position" label="职位" width="150">
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
export default {
  name: 'MyEmployee',
  data() {
    return {
      tableData: [],
      formInline: {
        user: '',
      },
      dialogFormVisible: false,
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
    // 添加员工
    addEmployee() {
      const name = this.form.name
      const tel = this.form.tel
      const region = this.form.region
      // console.log(this.$refs['form'].$refs)
      console.log(name)
      console.log(tel)
      console.log(region)
    },
  },
}
</script>

<style lang="less" scoped>
.text-center {
  text-align: center;
}
.addEmployee {
  position: relative;
  left: 700px;
  bottom: 60px;
}
</style>
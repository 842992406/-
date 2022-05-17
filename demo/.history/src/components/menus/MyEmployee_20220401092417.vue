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
        <el-form-item label="名字" :label-width="formLabelWidth" prop="name">
          <el-input v-model.trim="form.name" placeholder="姓名"></el-input>
        </el-form-item>
        <!-- 员工手机号 -->
        <el-form-item label="手机号" :label-width="formLabelWidth" prop="tel">
          <el-input v-model.trim="form.tel" placeholder="手机号"></el-input>
        </el-form-item>
        <!-- 员工职位 -->
        <el-form-item label="职位" :label-width="formLabelWidth" prop="region">
          <el-select v-model="form.region" placeholder="请选择职位">
            <el-option label="外卖员" value="外卖员"></el-option>
            <el-option label="厨师" value="厨师"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <!-- @click="dialogFormVisible = false" -->
        <!-- 添加员工的确定按钮 -->
        <el-button type="primary" @click="addEmployee">确 定</el-button>
        <!-- 修改员工信息的确定按钮 -->
        <el-button type="primary" @click="modifyRow">确 定</el-button>
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
      <el-table-column fixed="right" label="修改" width="120">
        <!-- 修改操作 -->
        <template>
          <el-button @click="dialogFormVisible = true" type="text" size="small">
            修改
          </el-button>
        </template>
      </el-table-column>
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
      formInline: {
        user: '',
      },
      dialogFormVisible: false,
      dialogFormVisible1: false,
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
    // 修改该行的用户数据
    modifyRow(index, rows) {},
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
      // 表单验证
      this.$refs['form'].validate((valid) => {
        // 判断是否未输入，如果有没有输入的，则valid为false
        if (name === '' || tel === '' || region === '')
          // 当判断输入正常时，就会进行数据传递到数据库
          valid = false

        if (valid) {
          this.$http
            .post(
              '/api/user/addEmployee',
              { name: name, tel: tel, position: region },
              {}
            )
            .then(function (res) {
              console.log(res)
            })
          this.$message.success('添加成功！')
          ;(this.form.name = ''), (this.form.tel = ''), (this.form.region = '')
        } else {
          this.$message.error('添加失败！')
          ;(this.form.name = ''), (this.form.tel = ''), (this.form.region = '')
          return false
        }
      })
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
<template>
  <div>
    <!-- 标题 -->
    <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 查询功能 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="商品名称">
        <el-input v-model="formInline.user" placeholder="商品名称"></el-input>
      </el-form-item>
    </el-form>

    <!-- 添加商品 -->
    <el-button
      type="primary"
      @click="dialogFormVisible = true"
      class="addEmployee"
      >添加商品</el-button
    >

    <el-dialog title="添加商品" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="form">
        <!-- 商品名字 -->
        <el-form-item
          label="商品名称"
          :label-width="formLabelWidth"
          prop="name"
        >
          <el-input v-model.trim="form.name" placeholder="商品名称"></el-input>
        </el-form-item>
        <!-- 商品单价 -->
        <el-form-item label="单价" :label-width="formLabelWidth" prop="price">
          <el-input v-model.trim="form.price" placeholder="单价"></el-input>
        </el-form-item>
        <!-- 商品图片 -->
        <el-upload
          class="upload-demo"
          action="https://127.0.0.1:3000/api/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <!-- @click="dialogFormVisible = false" -->
        <!-- 添加商品的确定按钮 -->
        <el-button type="primary" @click="addEmployee" v-if="btnChange == true"
          >确 定</el-button
        >
        <!-- 修改商品信息的确定按钮 -->
        <el-button type="primary" @click="modifyRow" v-if="btnChange == false"
          >确 定</el-button
        >
      </div>
    </el-dialog>

    <!-- 表格 -->
    <el-table
      :data="tables"
      style="width: 100%; position: relative; bottom: 50px"
      max-height="300"
    >
      <el-table-column prop="name" label="商品名称" width="150">
      </el-table-column>
      <el-table-column prop="price" label="单价" width="150"> </el-table-column>
      <el-table-column fixed prop="id" label="编号" width="150">
      </el-table-column>
      <el-table-column prop="amount" label="已销售数量" width="150">
      </el-table-column>
      <el-table-column fixed="right" label="修改" width="120">
        <!-- 修改操作 -->
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="changeModifyRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
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
      index: 0,
      rows: [],
      formInline: {
        user: '',
      },
      dialogFormVisible: false,
      btnChange: true,
      form: {
        name: '',
        price: '',
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
    // 修改该行的用户数据
    modifyRow() {
      const name = this.form.name
      const price = this.form.price
      const region = this.form.region
      const id = this.tableData[this.index].id
      console.log(this.tableData[this.index].id)
      // 表单验证
      this.$refs['form'].validate((valid) => {
        // 判断是否未输入，如果有没有输入的，则valid为false
        if (name === '' || price === '' || region === '')
          // 当判断输入正常时，就会进行数据传递到数据库
          valid = false

        if (valid) {
          this.$http
            .post(
              '/api/user/updateEmployee',
              {
                name: name,
                price: price,
                position: region,
                id: id,
              },
              {}
            )
            .then(function (res) {
              console.log(res)
            })
          this.$message.success('修改成功！')
          ;(this.form.name = ''),
            (this.form.price = ''),
            (this.form.region = '')
        } else {
          this.$message.error('修改失败！')
          ;(this.form.name = ''),
            (this.form.price = ''),
            (this.form.region = '')
          return false
        }
      })
    },
    // 删除该行的用户数据
    deleteRow(index, rows) {
      this.$axios
        .post('/api/goods/delGoods', { id: this.tableData[index].id })
        .then((res) => {
          this.$data.tableData[index].id = res.data.id
          rows.splice(index, 1)
          this.$message({ message: '删除成功', type: 'success' })
        })
    },
    // 显示全体用户的数据
    getList() {
      this.$axios.get('/api/goods/getAllGoods', {}).then((res) => {
        this.$data.tableData = res.data
      })
    },
    // 添加商品
    addEmployee() {
      const name = this.form.name
      const price = this.form.price
      const region = this.form.region
      // 表单验证
      this.$refs['form'].validate((valid) => {
        // 判断是否未输入，如果有没有输入的，则valid为false
        if (name === '' || price === '' || region === '')
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
    // 处理图片预览效果
    handlePreview() {},
    // 处理移除图片的操作
    handleRemove() {},
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
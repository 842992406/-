// editTable.vue
<el-form-item>
  <el-button type="primary" @click="handleAdd">新增</el-button>
</el-form-item>
<!--列表-->
<el-table>
  <el-table-column type="selection" width="55">
  </el-table-column>
  <el-table-column prop="title" label="岗位名称" width="120">
  </el-table-column>
</el-table>
<!--编辑界面-->
<el-dialog :visible.sync="dialogFormVisible" @click="dialogFormVisible=false">
  <el-form label-width="80px" :model="editForm">
    <el-form-item label="岗位名称" prop="title">
      <el-input v-model="editForm.title" placeholder="请输入岗位名"></el-input>
    </el-form-item>
    <div slot="footer" class="dialog-footer">
      <el-button @click.native="dialogFormVisible=false">取消</el-button>
      <el-button v-if="dialogStatus=='create'" type="primary" @click="addList">添加</el-button>
      <el-button v-else type="primary" @click="updateList">修改</el-button>
    </div>
  </el-form>
</el-dialog>
// ...
<script>
methods: {
  handleAdd: function() {
    this.dialogFormVisible = true;
    // 新增时清空
    this.editForm = {
      title: ''
    }
  },
  // 添加
  addList() {
    var title = this.editForm.title
    axios.post('/api/hire/addList', {
      title: title
    }).then(function(response) {
      alert('成功录入' + title + '')
      this.dialogFormVisible = false
    }).catch(function(error) {
      console.log(error)
    })
  },
  // 更改
  updateList() {
    var title = this.editForm.title
    var hire_id = this.editForm.hire_id
    axios.post('/api/hire/updateList', {
      title: title,
      hire_id: hire_id
    }).then(function(response) {
      alert('成功更新' + title + '')
      this.dialogFormVisible = false
    }).catch(function(error) {
      console.log(error)
    })
  }
}
</script>
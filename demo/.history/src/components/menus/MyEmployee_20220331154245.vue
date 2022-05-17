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
      <el-table-column prop="username" label="姓名" width="180">
      </el-table-column>
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
  // 页面加载之后就立即启动其中的函数
  mounted() {
    this.getList()
  },
}
</script>

<style>
.text-center {
  text-align: center;
}
</style>
<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center">订单管理</h4>
    <!-- 查询功能 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.user" placeholder="姓名"></el-input>
      </el-form-item>
    </el-form>

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
export default {}
</script>

<style>
.text-center {
  text-align: center;
}
</style>
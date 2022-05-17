<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center">用户管理</h4>

    <!-- 表格 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "MyUsers",
};
</script>

<style>
.text-center {
  text-align: center;
}
</style>
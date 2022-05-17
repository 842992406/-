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
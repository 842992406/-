<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center">商品管理</h4>

    <!-- 添加商品 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <!-- 商品名称 -->
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <!-- 商品价格 -->
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <!-- 添加按钮 -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "MyGoods",
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style>
.text-center {
  text-align: center;
}
</style>
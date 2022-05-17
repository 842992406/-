<template>
  <!-- 搜索功能 -->
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="审批人">
      <el-input v-model="formInline.user" placeholder="审批人"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
name: "goods";
export default {
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

<style lang="less" scoped>
</style>
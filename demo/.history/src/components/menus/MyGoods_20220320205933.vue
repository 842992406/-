<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center">商品管理</h4>

    <!-- 添加商品 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <!-- 商品名称 -->
      <el-form-item label="商品名称">
        <el-input v-model="formInline.user" placeholder="商品名称"></el-input>
      </el-form-item>
      <!-- 商品价格 -->
      <el-form-item label="商品价格">
        <el-input v-model="formInline.user" placeholder="商品价格"></el-input>
      </el-form-item>
      <!-- 添加按钮 -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
      </el-form-item>
      <!-- 上传商品图片 -->
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
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
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
  },
};
</script>

<style>
.text-center {
  text-align: center;
}
.upload-demo {
  position: relative;
  left: 650px;
}
</style>
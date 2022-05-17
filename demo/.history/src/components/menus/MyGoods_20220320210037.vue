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
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style>
.text-center {
  text-align: center;
}
/* .upload-demo {
  position: relative;
  left: 650px;
} */
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
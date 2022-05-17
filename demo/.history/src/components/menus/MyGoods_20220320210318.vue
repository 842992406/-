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
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-change="handleChange"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
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
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
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
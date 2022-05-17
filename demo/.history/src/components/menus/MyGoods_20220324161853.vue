<template>
  <div>
    <!-- 添加商品 -->
    <el-form
      :inline="true"
      :model="goodsForm"
      ref="goodsForm"
      class="demo-form-inline"
    >
      <!-- 商品名称 -->
      <el-form-item label="商品名称" prop="name">
        <el-input
          v-model.trim="goodsForm.name"
          placeholder="商品名称"
        ></el-input>
      </el-form-item>
      <!-- 商品价格 -->
      <el-form-item label="商品价格" prop="price">
        <el-input
          v-model.trim="goodsForm.price"
          placeholder="商品价格"
        ></el-input>
      </el-form-item>
      <!-- 上传商品图片 -->
      <el-form-item>
        <!-- :on-success="onSuccess"
          :on-error="onError" -->
        <el-upload
          class="upload-demo"
          action="http://localhost:8080/api/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :before-upload="beforeAvatarUpload"
          :auto-upload="false"
          :http-request="upLoadFile"
          v-model.trim="goodsForm.formData"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item>
      <!-- 添加按钮 -->
      <el-form-item>
        <el-button type="primary" @click="addGoods" class="btn">添加</el-button>
      </el-form-item>
    </el-form>

    <!-- 商品详情表格 -->
    <!-- 表格 -->
    <el-table
      :data="tableData"
      style="width: 100%; position: relative; bottom: 19px"
      max-height="300"
    >
      <el-table-column prop="name" label="商品名称" width="180">
      </el-table-column>
      <el-table-column prop="price" label="单价" width="180"> </el-table-column>
      <el-table-column fixed prop="id" label="编号" width="150">
      </el-table-column>
      <el-table-column prop="amount" label="已销售数量" width="180">
      </el-table-column>
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
import axios from "axios";
export default {
  name: "MyGoods",
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入商品名称"));
      } else {
        if (this.goodsForm.name !== "") {
          this.$refs.goodsForm.validateField("name");
        }
        callback();
      }
    };

    var validatePrice = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入商品名称"));
      } else {
        if (this.goodsForm.price !== "") {
          this.$refs.goodsForm.validateField("price");
        }
        callback();
      }
    };
    return {
      // 上传文件的配置变量
      fileList2: [],
      // 添加商品的数组
      goodsForm: {
        name: "",
        price: "",
      },
      // 商品详情数组
      tableData: [],

      rules: {
        name: [{ required: true, message: "请输入食品名称", trigger: "blur" }],
        price: [
          { required: true, validator: validatePrice, trigger: "blur" },
          { required: true, message: "请输入食品单价", trigger: "blur" },
        ],
      },
    };
  },
  // 页面加载之后就立即启动其中的函数
  mounted() {
    this.getList();
  },

  methods: {
    // 将图片一张一张的存进fromData的file字段中。
    upLoadFile(file) {
      this.formData.append("file", file.file);
      // console.log(this.formData);
    },
    // 添加商品功能
    // addGoods() {
    //   const name = this.goodsForm.name;
    //   const price = this.goodsForm.price;
    //   this.$refs["goodsForm"].validate((valid) => {
    //     // 判断是否未输入，如果有没有输入的，则valid为false
    //     if (this.goodsForm.name === "" || this.goodsForm.price === "")
    //       valid = false;
    //     if (valid) {
    //       this.$http
    //         .post("/api/goods/addGoods", { name: name, price: price }, {})
    //         .then(function (res) {
    //           console.log(res);
    //         });
    //       this.$message({ message: "添加成功", type: "success" });
    //       (this.goodsForm.name = ""), (this.goodsForm.price = "");
    //     } else {
    //       this.$message.error("添加失败");
    //       (this.goodsForm.name = ""), (this.goodsForm.price = "");
    //       return false;
    //     }
    //   });
    // },

    addGoods() {
      const name = this.goodsForm.name;
      const price = this.goodsForm.price;
      const formData = this.goodsForm.formData;
      console.log(this.goodsForm);
      // console.log(formData);
      this.$refs["goodsForm"].validate((valid) => {
        // 判断是否未输入，如果有没有输入的，则valid为false
        if (this.goodsForm.name === "" || this.goodsForm.price === "")
          valid = false;
        if (valid) {
          this.$http
            .post(
              "/api/goods/addGoods",
              { name: name, price: price, icon: formData },
              {}
            )
            .then(function (res) {
              console.log(res);
            });
          this.$message({ message: "添加成功", type: "success" });
          (this.goodsForm.name = ""), (this.goodsForm.price = "");
        } else {
          this.$message.error("添加失败");
          (this.goodsForm.name = ""), (this.goodsForm.price = "");
          return false;
        }
      });
    },

    // 删除功能
    deleteRow(index, rows) {
      this.$axios
        .post("/api/goods/delGoods", { id: this.tableData[index].id })
        .then((res) => {
          this.$data.tableData[index].id = res.data.id;
          rows.splice(index, 1);
          this.$message({ message: "删除成功", type: "success" });
        });
    },
    // 渲染商品详情表单
    getList() {
      this.$axios.get("/api/goods/getAllGoods", {}).then((res) => {
        this.$data.tableData = res.data;
      });
    },

    //文件列表移除文件时的钩子
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    //点击已上传的文件链接时的钩子,获取服务器返回的数据
    handlePreview(file) {
      console.log(file);
    },

    //文件上传成功时的钩子
    // onSuccess(response, file, fileList) {
    //   console.log(response.data); //服务器返回的图片信息，可以提交到表格
    //   this.$message({
    //     message: "图片上传成功",
    //     type: "success",
    //   });
    //   this.$refs.upload.clearFiles(); //上传成功清除列表，否则每次上传都要删掉上次上传的列表
    // },
    // onError(err, file, fileList) {
    //   // console.log(err.msg)
    //   this.$message.error(err.msg);
    // },

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

<style lang="less" scoped>
.demo-form-inline {
  position: relative;
  // top: -100px;
}
</style>
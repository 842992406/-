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
        <el-upload
          class="upload-demo"
          action=""
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :auto-upload="false"
          :http-request="upLoadFile"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item>
      <!-- 添加按钮 -->
      <el-form-item>
        <el-button type="primary" @click="addGoods()" class="btn"
          >添加</el-button
        >
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
      // 添加商品的数组
      goodsForm: {
        name: "",
        price: "",
        // 上传文件的配置变量
        formData: "",
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

    addGoods(formName) {
      const name = this.goodsForm.name;
      const price = this.goodsForm.price;
      this.$refs["goodsForm"].validate((valid) => {
        // 判断是否未输入，如果有没有输入的，则valid为false
        if (this.goodsForm.name === "" || this.goodsForm.price === "")
          valid = false;
        if (valid) {
          this.$http
            .post("/api/goods/addGoods", { name: name, price: price }, {})
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
    // 将图片一张一张的存进fromData的file字段中。
    upLoadFile(file) {
      this.formData.append("file", file.file);
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

<style lang="less" scoped>
.demo-form-inline {
  position: relative;
  // top: -100px;
}
</style>
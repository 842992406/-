<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center">商品管理</h4>

    <!-- 添加商品 -->
    <el-form
      :inline="true"
      :model="formInline"
      ref="goodsForm"
      class="demo-form-inline"
    >
      <!-- 商品名称 -->
      <el-form-item label="商品名称" prop="checkName">
        <el-input
          v-model.trim="formInline.name"
          placeholder="商品名称"
        ></el-input>
      </el-form-item>
      <!-- 商品价格 -->
      <el-form-item label="商品价格" prop="checkPrice">
        <el-input
          v-model.trim="formInline.price"
          placeholder="商品价格"
        ></el-input>
      </el-form-item>
      <!-- 添加按钮 -->
      <el-form-item>
        <el-button type="primary" @click="addGoods">添加</el-button>
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

    <!-- 商品详情表格 -->
    <!-- 表格 -->
    <el-table
      :data="tableData"
      style="width: 100%; position: relative; bottom: 60px"
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
export default {
  name: "MyGoods",
  data() {
    // var validateName = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("请输入商品名称"));
    //   } else {
    //     if (this.formInline.checkName !== "") {
    //       this.$refs.formInline.validateField("checkName");
    //     }
    //     callback();
    //   }
    // };

    // var validatePrice = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("请输入商品名称"));
    //   } else {
    //     if (this.formInline.checkPrice !== "") {
    //       this.$refs.formInline.validateField("checkPrice");
    //     }
    //     callback();
    //   }
    // };
    return {
      // 添加商品的数组
      formInline: {
        name: "",
        price: "",
      },
      // 商品详情数组
      tableData: [],
    };
  },
  // 页面加载之后就立即启动其中的函数
  mounted() {
    this.getList();
  },

  methods: {
    // 添加商品功能
    addGoods() {
      this.$axios
        .post("/api/goods/addGoods", {
          name: this.formInline.name,
          price: this.formInline.price,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.success === -1) {
            this.$message.error("添加失败");
            (this.formInline.name = ""), (this.formInline.price = "");
          } else {
            this.$message({ message: "添加成功", type: "success" });
            (this.formInline.name = ""), (this.formInline.price = "");
          }
        });
    },
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
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
  },
};
</script>

<style lang="less" scoped>
.text-center {
  text-align: center;
}
.upload-demo {
  position: relative;
  bottom: 62px;
  left: 30px;
  width: 200px;
  margin: auto;
}
.el-upload__tip {
  position: relative;
  left: 163px;
}
.el-upload-list {
  position: relative;
  left: 163px;
}
.el-button--primary {
  position: relative;
  left: 195px;
}
</style>
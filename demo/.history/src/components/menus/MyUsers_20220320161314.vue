<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center">用户管理</h4>

    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" max-height="250">
      <el-table-column prop="username" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="tel" label="手机号" width="180"> </el-table-column>
      <el-table-column fixed prop="id" label="编号" width="150">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="180"> </el-table-column>
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
  name: "MyUsers",
  data() {
    return {
      tableData: [],
    };
  },

  // 页面加载之后就立即启动其中的函数
  mounted() {
    this.getList();
  },
  methods: {
    deleteRow(index, rows) {
      console.log(index);
      console.log(rows);
      this.$axios
        .post("/api/user/delUser", { id: this.tableData.id })
        .then((res) => {
          rows.splice(this.tableData.id, 1);
        });
    },
    getList() {
      this.$axios.get("/api/user/getAllUser", {}).then((res) => {
        this.$data.tableData = res.data;
      });
    },
    // del() {
    //   this.$axios
    //     .post("/api/user/delUser", { id: this.tableData.id })
    //     .then((res) => {
    //       this.$data.tableData.id = res.data.id;
    //     });
    // },
  },
};
</script>

<style>
.text-center {
  text-align: center;
}
</style>
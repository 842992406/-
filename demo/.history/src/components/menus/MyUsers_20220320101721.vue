<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center">用户管理</h4>

    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" max-height="250">
      <el-table-column prop="id" label="编号" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column fixed prop="time" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="180"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <!-- @click.native.prevent="deleteRow(scope.$index, tableData)" -->
          <el-button @click="getList" type="text" size="small">
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
      tableData: [
        {
          time: "",
          name: "",
          id: "",
          city: "",
        },
      ],
    };
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    getList() {
      this.$axios.get("/api/user/getAllUser", {}).then((res) => {
        console.log(this.tableData);
      });
    },
  },
};
</script>

<style>
.text-center {
  text-align: center;
}
</style>
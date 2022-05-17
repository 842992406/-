<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center">用户管理</h4>
    <button @click="getList">ss</button>

    <!-- 表格 -->
    <el-table
      :data="item in tableData"
      :key="item.id"
      style="width: 100%"
      max-height="250"
    >
      <el-table-column prop="item.id" label="编号" width="180">
      </el-table-column>
      <el-table-column prop="username" label="姓名" width="180">
      </el-table-column>
      <el-table-column fixed prop="time" label="日期" width="150">
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
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    getList() {
      this.$axios.get("/api/user/getAllUser", {}).then((res) => {
        this.$data.tableData = res.data;
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
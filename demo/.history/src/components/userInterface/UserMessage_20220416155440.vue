<template>
  <div>
    <!-- 标题 -->
    <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/user' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>信息管理</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 修改信息 -->
    <el-dialog title="添加员工" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="form">
        <!-- 员工名字 -->
        <el-form-item label="名字" :label-width="formLabelWidth" prop="name">
          <el-input v-model.trim="form.name" placeholder="姓名"></el-input>
        </el-form-item>
        <!-- 员工手机号 -->
        <el-form-item label="手机号" :label-width="formLabelWidth" prop="tel">
          <el-input v-model.trim="form.tel" placeholder="手机号"></el-input>
        </el-form-item>
        <!-- 员工职位 -->
        <el-form-item label="职位" :label-width="formLabelWidth" prop="region">
          <el-select v-model="form.region" placeholder="请选择职位">
            <el-option label="外卖员" value="外卖员"></el-option>
            <el-option label="厨师" value="厨师"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <!-- @click="dialogFormVisible = false" -->
        <!-- 添加员工的确定按钮 -->
        <el-button type="primary" @click="addEmployee" v-if="btnChange == true"
          >确 定</el-button
        >
        <!-- 修改员工信息的确定按钮 -->
        <el-button type="primary" @click="modifyRow" v-if="btnChange == false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'UserMessage',
}
</script>

<style lang='less' scoped>
</style>
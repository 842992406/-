<template>
  <div class="aside">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <router-link to="/home/users">
            <el-menu-item index="1" class="menu-left">
              <i class="el-icon-menu"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
          </router-link>

          <router-link to="/home/orders">
            <el-menu-item index="2" class="menu-left">
              <i class="el-icon-menu"></i>
              <span slot="title">订单管理 </span>
            </el-menu-item>
          </router-link>

          <router-link to="/home/goods">
            <el-menu-item index="3" class="menu-left">
              <i class="el-icon-menu"></i>
              <span slot="title">商品管理</span>
            </el-menu-item>
          </router-link>

          <router-link to="/home/employee">
            <el-menu-item index="4" class="menu-left">
              <i class="el-icon-menu"></i>
              <span slot="title">员工管理</span>
            </el-menu-item>
          </router-link>

          <router-link to="/home/report">
            <el-menu-item index="5" class="menu-left">
              <i class="el-icon-menu"></i>
              <span slot="title">统计系统</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MyAside',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style lang="less" scoped>
.el-col-12 {
  width: 100%;
}
.menu {
  list-style-type: none;
  padding: 0;
}
.menu-left {
  padding: 0 130px;
}
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>
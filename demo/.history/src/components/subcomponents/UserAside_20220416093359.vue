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
              <span slot="title">信息管理</span>
            </el-menu-item>
          </router-link>

          <router-link to="/home/orders">
            <el-menu-item index="2" class="menu-left">
              <i class="el-icon-menu"></i>
              <span slot="title">订单管理 </span>
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
.tac {
  height: 100%;
}
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
<template>
  <div class="aside">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          max-height="250"
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

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1" class="menu-left">选项1</el-menu-item>
              <el-menu-item index="1-2" class="menu-left">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3" class="menu-left">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1" class="menu-left">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <router-link to="/home/settings">
            <el-menu-item index="5" class="menu-left">
              <i class="el-icon-setting"></i>
              <span slot="title">系统管理</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "MuyAside",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
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
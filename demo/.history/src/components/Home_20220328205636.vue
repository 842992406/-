<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <MyHeader v-if="isShow"></MyHeader>
    <!-- 页面主体区域 -->
    <div class="home-main-box">
      <!-- 左侧边栏 -->
      <MyAside></MyAside>
      <!-- 右侧内容主体区域 -->
      <div class="home-main-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 头部区域组件
import MyHeader from "@/components/subcomponents/MyHeader.vue";
// 左侧边栏组件
import MyAside from "@/components/subcomponents/MyAside.vue";
export default {
  name: "Home",
  // 注册组件
  components: {
    MyHeader,
    MyAside,
  },
  data() {
    return {
      // 控制router-view的隐藏与展示
      isShow: true,
    };
  },
  // 提供可注入子组件属性
  provide() {
    return {
      reload: this.reload,
    };
  },

  // 定义reload方法
  methods: {
    reload() {
      // 先隐藏
      this.isShow = false;

      // $nextTick() 将回调延迟到下次 DOM 更新循环之后执行
      this.$nextTick(() => {
        this.isShow = true;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .home-main-box {
    height: 100%;
    display: flex;
    .home-main-body {
      padding: 15px;
      flex: 1;
    }
  }
}
</style>
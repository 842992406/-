<template>
  <div>
    <template>
      <!-- 轮播图 -->
      <el-carousel :interval="4000" type="card" :height="bannerHeight + 'px'">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img :src="item.url" alt="" />
        </el-carousel-item>
      </el-carousel>
      <!-- 介绍卡片 -->
      <!-- 选择介绍卡片内容 -->
      <transition name="el-zoom-in-center">
        <el-card class="box-card" shadow="hover" v-show="show2">
          <div v-for="o in 4" :key="o" class="text item">
            <el-button type="primary" @click="show2 = !show2">{{
              '列表内容' + o
            }}</el-button>
          </div>
        </el-card>
      </transition>
      <!-- 被选择的介绍内容 -->
      <transition name="el-zoom-in-center">
        <el-card class="box-card" shadow="hover" v-show="!show2">
          <div v-for="o in 4" :key="o" class="text item">
            <el-button type="primary" @click="show2 = !show2">{{
              '列表内容' + o
            }}</el-button>
          </div>
        </el-card>
      </transition>
    </template>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      show2: true,
      // 轮播图图片数组
      imgList: [
        {
          id: 1,
          url: require('../../assets/1.png'),
        },
        {
          id: 2,
          url: require('../../assets/2.png'),
        },
        {
          id: 3,
          url: require('../../assets/3.png'),
        },
        {
          id: 4,
          url: require('../../assets/4.png'),
        },
      ],
      // 图片父容器高度
      bannerHeight: 1000,
      // 浏览器宽度
      screenWidth: 0,
    }
  },

  methods: {
    setSize: function () {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = (400 / 1920) * this.screenWidth
    },
  },
  mounted() {
    // 首次加载时,需要调用一次
    this.screenWidth = window.innerWidth
    this.setSize()
    // 窗口大小发生改变时,调用一次
    window.onresize = () => {
      this.screenWidth = window.innerWidth
      this.setSize()
    }
  },
}
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

img {
  /*设置图片宽度和浏览器宽度一致*/
  width: 100%;
  height: inherit;
}

// 卡片区域
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  display: flex;
  width: 480px;
  background-color: #409eff;
}
</style>
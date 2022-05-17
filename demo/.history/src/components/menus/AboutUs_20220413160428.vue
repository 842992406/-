<template>
  <div class="box">
    <template>
      <!-- 轮播图 -->
      <el-carousel :interval="4000" type="card" :height="bannerHeight + 'px'">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img :src="item.url" alt="" />
        </el-carousel-item>
      </el-carousel>

      <!-- 内容介绍选择 -->
      <div>
        <el-link
          icon="el-icon-s-shop"
          class="font"
          :underline="false"
          @click="show2 = !show2"
          >本网站目标</el-link
        >
        <el-link
          icon="el-icon-cold-drink"
          class="font"
          :underline="false"
          @click="show2 = !show2"
          >甜点饮品</el-link
        >
        <el-link
          icon="el-icon-fork-spoon"
          class="font"
          :underline="false"
          @click="show2 = !show2"
          >美食</el-link
        >
        <el-link
          icon="el-icon-s-home"
          class="font"
          :underline="false"
          @click="show2 = !show2"
          >便利快捷</el-link
        >
      </div>
      <!-- 介绍卡片 -->
      <!-- 选择介绍卡片内容 -->
      <transition name="el-zoom-in-center">
        <el-card class="box-card" shadow="hover" v-show="show2">
          <div style="font-size: 20px">
            {{ content }}
          </div>
        </el-card>
      </transition>
      <!-- 页脚 -->
      <MyFooter></MyFooter>
    </template>
  </div>
</template>

<script>
import MyFooter from '@/components/subcomponents/MyFooter.vue'
export default {
  name: 'AboutUs',
  data() {
    return {
      show2: false,
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
      content:
        '进入二十一世纪以来，知识化、信息化就是这个世纪的代名词，随着社会发展的进步，电脑进入家家户户，Internet将人们之间的距离缩小，给予了人们又一个交流的方式。越来越多的人们开始接受电子购物这样的便捷的交易方式，特别是在大学校园中，再这样的背景下，传统的订餐方式受到一定程度的冲击。所以基于Internet帮助下的高校网上订餐方式开始出现，它的出现给予了大学中的人们一个更加方便快捷的订餐方式，只要有网络，就可以方便的订餐，不必担心传统订餐方式中的占线等问题。通过高校网上订餐系统，可以在忙碌或空闲时间足不出户地获得一份健康的食品。',
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
  components: {
    MyFooter,
  },
}
</script>

<style lang="less" scoped>
.box {
  background-color: #eaedf1;
}

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
  width: 100%;
  margin-top: 20px;
  background-color: #409eff;
}

.font {
  // 将内联模式转换为块状模式
  display: inline-block;
  font-size: 30px;
  margin-left: 150px;
}
</style>
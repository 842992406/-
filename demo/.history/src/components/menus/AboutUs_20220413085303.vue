<template>
  <div>
    <template>
      <!-- 轮播图 -->
      <div class="block">
        <el-carousel height="300px">
          <el-carousel-item v-for="item in carouselImg" :key="item">
            <img src="item" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- <img src="../../assets/1.png" alt="" /> -->
    </template>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      // 轮播图图片数组
      carouselImg: [
        1 = '../../assets/1.png',
        2 = '../../assets/2.png',
        3 = '../../assets/3.png',
        4 = '../../assets/4.png',
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
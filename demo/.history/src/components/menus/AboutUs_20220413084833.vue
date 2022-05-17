<template>
  <div>
    <template>
      <!-- 轮播图 -->
      <div class="block">
        <el-carousel height="300px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
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
        '../../assets/1.png',
        '../../assets/2.png',
        '../../assets/3.png',
        '../../assets/4.png',
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
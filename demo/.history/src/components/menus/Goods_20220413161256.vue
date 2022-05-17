<template>
  <div class="goods_box">
    <template>
      <!-- 轮播图 -->
      <el-carousel :interval="4000" type="card" :height="bannerHeight + 'px'">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img :src="item.url" alt="" />
        </el-carousel-item>
      </el-carousel>
    </template>
    <!-- 商品展示区 -->
    <!-- el-row配置行，el-col配置列 -->
    <div class="goods">
      <el-row>
        <el-col
          class="goods_card"
          :span="5"
          v-for="item in goodsList"
          :key="item.id"
          :offset="item > 0 ? 2 : 0"
        >
          <el-card
            :body-style="{ padding: '0px', width: '100%', height: '200px' }"
          >
            <!-- 图片展示区域 -->
            <img :src="item.icon" class="image" />
            <!-- 商品文本区域 -->
            <div style="padding: 14px">
              <!-- 商品名称 -->
              <span>
                <p>{{ item.name }}</p>
                <!-- 商品的数量 -->
                <el-input-number
                  class="goods_num"
                  v-model="item.num"
                  :min="0"
                  :max="10"
                ></el-input-number>
              </span>
              <div class="bottom clearfix">
                <!-- 商品价格 -->
                <time class="time">￥{{ item.price }}</time>
                <!-- :disabled="sendDisabled"判断按钮是否不可选 -->
                <!-- 商品下单按钮 -->
                <el-button
                  type="primary"
                  class="button"
                  round
                  @click="addNewGoods(item)"
                  >添加</el-button
                >
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 页脚 -->
    <MyFooter></MyFooter>
  </div>
</template>

<script>
name: 'goods'
// 导入 axios 请求库
import axios from 'axios'
export default {
  data() {
    return {
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
      // 商品的数据列表,默认为空数组
      goodsList: [],
    }
  },

  methods: {
    setSize: function () {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = (400 / 1920) * this.screenWidth
    },
    // 通过axios获取所有商品的信息
    async initGoodsList() {
      const { data: res } = await axios.get('api/goods/getAllGoods')
      // 将数据库中的数据赋值到data中，用于页面的渲染
      this.goodsList = res
    },
    // 添加所选商品到购物车
    addNewGoods(val) {
      // 判断用户是否登录
      if (this.$store.state.getLoginFromLogin == false) {
        // 当用户没有登录的时候，就会强制跳转到登录界面
        this.$router.push('/login')
      }
      // 判断是否选择商品数量
      if (val.num === 0) {
        return this.$message.warning('您还未购买商品！')
      } else {
        // 将所添加的商品发送到全局
        this.$store.commit('initList', val)
        this.$store.commit('addGoodsListSum')
      }
    },
  },
  created() {
    // 调用请求数据的方法
    this.initGoodsList()
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
// 走马图
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

.time {
  font-size: 18px;
  color: red;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  height: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
// 搜索区域
.search {
  margin: 20px;
  width: 90%;
}
// 商品整体

// 商品卡片区域
.goods_card {
  // 当鼠标放到卡片区域将花费0.6s变大
  transition: all 0.6s;
  margin-bottom: 20px;
  margin-right: 20px;
  margin: 0 auto;
  // padding: 0 80px;
  padding-bottom: 20px;
}
.goods_card:hover {
  // 当图片变大时，将变大1.1倍
  transform: scale(1.1);
}
.el-col-8 {
  width: 15%;
}
.el-col {
  margin: 20px;
}
// 商品数量框
// .goods_num {
//   width: 40px;
// }
.el-button.is-round {
  position: relative;
  bottom: 7px;
}
</style>
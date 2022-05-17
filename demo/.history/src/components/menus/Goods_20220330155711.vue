<template>
  <div class="goods_box">
    <!-- 搜索功能 -->
    <div class="search">
      <el-input
        v-model="input"
        @blur="onBlur"
        placeholder="请输入您要查找的商品"
        suffix-icon="el-icon-search"
      ></el-input>
    </div>

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
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
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
                  @click="addNewGoods(item, item.id)"
                  round
                  >添加</el-button
                >
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
name: 'goods'
// 导入 axios 请求库
import axios from 'axios'
export default {
  data() {
    return {
      // 搜索框
      input: '',
      // 商品的数据列表,默认为空数组
      goodsList: [],
    }
  },
  methods: {
    // 搜索功能
    onSubmit() {
      console.log('submit!')
    },
    // 输入框失去焦点事件
    onBlur() {
      this.input = ''
    },
    // 通过axios获取所有商品的信息
    async initGoodsList() {
      const { data: res } = await axios.get('api/goods/getAllGoods')
      // 将数据库中的数据赋值到data中，用于页面的渲染
      this.goodsList = res
    },
  },
  created() {
    // 调用请求数据的方法
    this.initGoodsList()
  },
}
</script>

<style lang="less" scoped>
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
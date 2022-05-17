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
          v-for="(o, index) in 12"
          :key="o"
          :offset="index > 0 ? 2 : 0"
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
                <p>好吃的汉堡</p>
                <el-input-number
                  v-model="num"
                  @change="handleChange"
                  :min="1"
                  :max="10"
                  label="描述文字"
                ></el-input-number>
              </span>
              <div class="bottom clearfix">
                <!-- 商品时间 -->
                <time class="time">{{ currentDate }}</time>
                <!-- 商品下单按钮 -->
                <el-button type="text" class="button">添加</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
name: "goods";
export default {
  data() {
    return {
      // 搜索框
      input: "",
      // 商品的数量
      num: 1,
      // 商品查看界面
      currentDate: new Date(),
    };
  },
  methods: {
    // 搜索功能
    onSubmit() {
      console.log("submit!");
    },
    // 输入框失去焦点事件
    onBlur() {
      this.input = "";
    },
    // 商品数量
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="less" scoped>
.time {
  font-size: 13px;
  color: #999;
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
  content: "";
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
</style>
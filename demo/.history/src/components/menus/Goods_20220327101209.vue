<template>
  <div class="goods_box">
    <!-- 搜索功能 -->
    <div class="search">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
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
            :body-style="{
              padding: '0px',
              width: '100%',
              height: '200px',
              margin: '20px',
            }"
          >
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
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
      // 商品查看界面
      currentDate: new Date(),
    };
  },
  methods: {
    // 搜索功能
    onSubmit() {
      console.log("submit!");
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
  margin: 0 auto;
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
</style>
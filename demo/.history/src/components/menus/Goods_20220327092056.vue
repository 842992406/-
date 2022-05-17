<template>
  <div>
    <!-- 搜索功能 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="查询">
        <el-input v-model="formInline.user" placeholder="食品名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <!-- 商品展示区 -->
    <el-row>
      <el-col
        class="goods_card"
        :span="8"
        v-for="(o, index) in 2"
        :key="o"
        :offset="index > 0 ? 2 : 0"
      >
        <el-card
          :body-style="{ padding: '0px', width: '200px', height: '200px' }"
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
</template>

<script>
name: "goods";
export default {
  data() {
    return {
      // 搜索框
      formInline: {
        user: "",
        region: "",
      },
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

// 商品卡片区域
.goods_card {
}
.el-col-8 {
  width: 0%;
}
</style>
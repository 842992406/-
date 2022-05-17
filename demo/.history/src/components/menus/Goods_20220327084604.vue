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
        :span="8"
        v-for="(o, index) in 2"
        :key="o"
        :offset="index > 0 ? 2 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
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
      loading: true,
      currentDate: "2021-06-01",
      lists: [],
    };
  },
  mounted() {
    this.loading = false;
    this.lists = [
      {
        imgUrl:
          "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        name: "鹿",
      },
      {
        imgUrl:
          "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        name: "马",
      },
      {
        imgUrl:
          "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        name: "山狮",
      },
    ];
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    setLoading() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
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
      clear: both
</style>
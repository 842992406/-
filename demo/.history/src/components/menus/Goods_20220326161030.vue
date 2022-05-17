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
    <div style="width: 400px">
      <p>
        <el-button @click="setLoading">点我重新加载</el-button>
      </p>
      <el-skeleton style="width: 400px" :loading="loading" animated :count="3">
        <template slot="template">
          <el-skeleton-item
            variant="image"
            style="width: 400px; height: 267px"
          />
          <div style="padding: 14px">
            <el-skeleton-item variant="h3" style="width: 50%" />
            <div
              style="
                display: flex;
                align-items: center;
                justify-items: space-between;
                margin-top: 16px;
                height: 16px;
              "
            >
              <el-skeleton-item variant="text" style="margin-right: 16px" />
              <el-skeleton-item variant="text" style="width: 30%" />
            </div>
          </div>
        </template>
        <template>
          <el-card
            :body-style="{ padding: '0px', marginBottom: '1px' }"
            v-for="item in lists"
            :key="item.name"
          >
            <img :src="item.imgUrl" class="image multi-content" />
            <div style="padding: 14px">
              <span>{{ item.name }}</span>
              <div class="bottom card-header">
                <span class="time">{{ currentDate }}</span>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </template>
      </el-skeleton>
    </div>
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

      loading: true,
      currentDate: "2021-06-01",
      lists: [],
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="less" scoped>
</style>
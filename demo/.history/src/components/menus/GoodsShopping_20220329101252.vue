<template>
  <div>
    <!-- 所选商品的界面 -->
    <div
      class="goods_shopping"
      v-for="item in old_goods_shopping"
      :key="item.id"
    >
      <!-- 商品的图片 -->
      <div class="goods_img">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          alt=""
        />
      </div>
      <!-- 商品的名称和价格 -->
      <p class="goods_names">{{ item.name }}</p>
      <!-- 商品所选的数量 -->
      <p class="goods_price">￥{{ item.price }}</p>
      <!-- 商品所选的数量 -->
      <div
        class="
          number-container
          d-flex
          justify-content-center
          align-items-center
        "
      >
        <!-- 减 1 的按钮 -->
        <button type="button" class="btn btn-light btn-sm" @click="sub">
          -
        </button>
        <!-- 购买的数量 -->
        <span class="number-box">{{ item.num }}</span>
        <!-- 加 1 的按钮 -->
        <button type="button" class="btn btn-light btn-sm" @click="add">
          +
        </button>
      </div>
    </div>
    <!-- 结算与总和界面 -->
    <div class="settlement">
      <!-- 总价值界面 -->
      <p class="amount">￥{{ goods_sum }}</p>
      <!-- 结算按钮 -->
      <el-button @click="innerDrawer = true">结算</el-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
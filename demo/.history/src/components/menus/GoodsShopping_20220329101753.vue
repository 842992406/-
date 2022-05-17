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

<style lang="less" scoped>
// 购物车中商品的全局设置
.goods_shopping {
  position: relative;
  width: 100%;
  height: 100px;
  background-color: rgb(250, 244, 244);
  font-size: 14px;
  // 浅色投影
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
  margin-top: 10px;
}
// 购物车中商品的图片设置
.goods_shopping .goods_img img {
  position: relative;
  width: 20%;
  height: 90px;
  top: 5px;
  margin: 0 5px;
}
// 商品的名称
.goods_shopping .goods_names {
  position: relative;
  left: 80px;
  bottom: 100px;
  font: 16px Medium;
}
// 商品的价格
.goods_shopping .goods_price {
  position: relative;
  left: 80px;
  bottom: 80px;
  color: red;
  font: 16px Medium;
}
// 商品的数量
.number-box {
  position: relative;
  left: 75%;
  bottom: 120px;
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
  position: relative;
  left: 75%;
  bottom: 120px;
}
// 结算界面
.settlement {
  position: fixed;
  right: -1px;
  bottom: 5px;
  border: 1px;
  width: 30%;
  // 将界面界面显示在最上层
  z-index: auto;
  background-color: rgb(248, 247, 247);
}
// 提交按钮
.el-button {
  position: relative;
  background-color: skyblue;
  z-index: auto;
  left: 280px;
  bottom: 25px;
}
// 总价值
.amount {
  position: relative;
  font-size: 20px;
  color: red;
  top: 25px;
}
</style>
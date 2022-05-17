<template>
  <!-- 导航栏菜单 -->
  <div class="menu-box">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <!-- 登录按钮（没有登录的时候显示） -->
      <el-menu-item
        index="4"
        class="elLeft1"
        @click="login"
        v-if="$store.state.getLoginFromLogin == false"
        >登录</el-menu-item
      >
      <!-- 退出登录按钮（登录成功之后显示） -->
      <el-menu-item
        index="4"
        class="elLeft1"
        @click="signOut"
        v-if="$store.state.getLoginFromLogin == true"
        >退出登录</el-menu-item
      >
      <!-- 用户个人中心按钮（登录成功之后显示） -->
      <el-menu-item
        index="3"
        class="elLeft3"
        @click="userMessage"
        v-if="$store.state.getLoginFromLogin == true"
        >个人中心</el-menu-item
      >
      <el-menu-item index="2" class="elLeft2" @click="drawer = true"
        >购物车</el-menu-item
      >
      <el-menu-item index="1" class="elLeft4" @click="Goods">首页</el-menu-item>
    </el-menu>
    <!-- 购物车位置 -->
    <el-drawer :visible.sync="drawer" size="30%">
      <div>
        <!-- 所选商品的界面 -->
        <div class="goods_shopping" v-for="item in list" :key="item.id">
          <!-- 商品的图片 -->
          <div class="goods_img">
            <img :src="item.icon" alt="" />
          </div>
          <!-- 商品的名称和价格 -->
          <p class="goods_names">{{ item.name }}</p>
          <!-- 商品所选的价格 -->
          <p class="goods_price">￥：{{ item.price }}</p>
          <!-- 商品所选的数量 -->
          <div>
            <p class="goods_num">x{{ item.num }}</p>
          </div>
          <!-- 删除按钮 -->
          <i class="el-icon-circle-close" @click="removeItemById(item.id)"></i>
        </div>

        <!-- 结算与总和界面 -->
        <div class="settlement">
          <!-- 总价值界面 -->
          <p class="amount">总计：￥{{ GoodsListSum }}</p>
          <!-- 结算按钮 -->
          <el-button @click="innerDrawer = true">结算</el-button>
        </div>
      </div>
      <!-- 结算界面 -->
      <el-drawer
        title="结算"
        class="submit_shopping"
        :append-to-body="true"
        :visible.sync="innerDrawer"
      >
        <img src="../../assets/二维码图片.png" alt="" srcset="" class="img" />
        <div class="settlement">
          <!-- 总价值界面 -->
          <p class="amount">总计：￥{{ GoodsListSum }}</p>
          <!-- 结算按钮 -->
          <el-button @click="settlement" :loading="settlementBtn"
            >支付</el-button
          >
        </div>
      </el-drawer>
    </el-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      // 购物车
      drawer: false,
      innerDrawer: false,
      // 总结算界面的结算按钮
      settlementBtn: false,
    }
  },
  methods: {
    // 登录操作
    login() {
      // 跳转
      this.$router.push('/login')
    },
    // 退出登录的操作
    signOut() {
      this.$confirm('确定要退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          // 登录，退出登录切换
          this.$store.commit('changeLogin')
          this.$router.replace('/login')
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出',
          })
        })
    },
    // 关于我们
    AboutUs() {
      this.$router.push('/index/aboutUs')
    },
    Goods() {
      this.$router.push('/index/goods')
    },
    // 删除购物车中的商品
    removeItemById(id) {
      this.$store.commit('removeItem', id)
    },
    // 总结算界面
    settlement() {
      // 点击之后将按钮变成加载状态
      this.settlementBtn = true
      // 加载一秒之后提示成功！
      setTimeout(() => {
        this.settlementBtn = false
        this.$message.success('支付成功！')
      }, 1500)
      // 在结算完成之后，清除购物车之前将购物车中的数据上传到数据库
      for (var i = 0; i <= this.$store.state.list.length - 1; i++) {
        const name = this.$store.state.list[i].name
        const price = this.$store.state.list[i].price
        const time = this.$store.state.list[i].time
        const username = this.$store.state.loginName
        const loginBuiNum = this.$store.state.loginBuiNum
        this.$http
          .post(
            '/api/goods/addOrder',
            {
              name: name,
              price: price,
              time: time,
              username: username,
              buildingNum: loginBuiNum,
            },
            {}
          )
          .then((res) => {
            console.log(res)
          })
      }
      // 在结算之后，将购物车中的数据全部清空
      this.$store.dispatch('removeAllItemAsync')
    },
    // 用户个人中心
    userMessage() {
      this.$router.replace('/user')
    },
  },
  computed: {
    ...mapState(['list', 'GoodsListSum']),
  },
}
</script>

<style lang="less" scoped>
// 设置该组件所占大小，并划分分割线
.el-menu.el-menu--horizontal {
  height: 60px;
  border-bottom: solid 1px #e6e6e6;
}
.elLeft1 {
  position: absolute;
  right: 0px;
  float: right;
}
.elLeft2 {
  position: absolute;
  right: 100px;
  float: right;
}
.elLeft3 {
  position: absolute;
  left: 200px;
  float: left;
}
.elLeft4 {
  position: absolute;
  right: 200px;
  float: right;
}
.img {
  position: relative;
  left: 30px;
  top: 30px;
  width: 80%;
  height: 60%;
}

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
.goods_shopping .goods_num {
  position: relative;
  left: 90%;
  bottom: 120px;
}
// 删除的位置
.el-icon-circle-close {
  position: relative;
  left: 90%;
  bottom: 200px;
  font-size: 22px;
}
// 当鼠标移动到删除按钮的时候
.el-icon-circle-close:hover {
  cursor: pointer; //鼠标变手
  color: #409eff; //链接变颜色
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
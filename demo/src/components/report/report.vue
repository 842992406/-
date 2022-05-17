<template>
  <div>
    <!-- 标题 -->
    <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>统计系统</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区 -->
    <el-card>
      <!-- 2. 为 ECharts 准备一个定义了宽高的 DOM -->
      <div id="main" style="width: 800px; height: 400px"></div>
    </el-card>
  </div>
</template>

<script>
// 1. 导入 echarts
import * as echarts from 'echarts'
export default {
  data() {
    return {
      // 存放日期和销量的数组
      salesVolume: [],
      // 销售日期
      dateOfSale: [],
      // 销售数量
      salesNum: [],
    }
  },
  // 此时，页面上的元素已经被渲染完毕了。
  mounted() {
    setTimeout(() => {
      // 3. 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'))
      // 4. 指定图表的配置项和数据
      var option = {
        title: {
          text: '商品销售数据',
        },
        tooltip: {},
        legend: {
          data: ['销量'],
        },
        xAxis: {
          data: this.dateOfSale,
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: this.salesNum,
          },
        ],
      }

      // 5. 展示数据
      myChart.setOption(option)
    }, 500)
  },

  created() {
    this.statisticalInfo()
  },
  methods: {
    // 按照时间将每天的销量存到数组中
    statisticalInfo() {
      var m = 0
      this.$axios.get('/api/goods/getAllOrder', {}).then((res) => {
        var time = res.data[0].time
        var surplusNum = res.data.length
        for (var i = 0; i <= res.data.length - 1; i++) {
          if (time !== res.data[i].time) {
            const obj = {
              objTime: time,
              num: m,
            }
            this.salesVolume.push(obj)
            this.dateOfSale.push(obj.objTime)
            this.salesNum.push(obj.num)
            surplusNum -= m
            m = 0
          }
          m++
          time = res.data[i].time
        }
        const obj = {
          objTime: res.data[res.data.length - 1].time,
          num: surplusNum,
        }
        this.salesVolume.push(obj)
        this.dateOfSale.push(obj.objTime)
        this.salesNum.push(obj.num)
      })
    },
  },
}
</script>

<style lang="less" scoped>
.el-breadcrumb {
  margin-bottom: 10px;
}
</style>
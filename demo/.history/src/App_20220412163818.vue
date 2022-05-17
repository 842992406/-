<template>
  <!-- 路由占位符 -->
  <router-view></router-view>
</template>

<script>
export default {
  name: 'MyApp',
  created() {
    console.log(process.env.VUE_APP_BASE_API)
    index
      .$axios({
        url: '/api/user/getAllUser',
      })
      .then((res) => {
        console.log(res.data)
      })
  },
}
</script>

<style lang="less" scoped>
</style>
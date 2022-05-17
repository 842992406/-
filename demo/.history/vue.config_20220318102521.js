const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "./dist", //打包后的文件夹名字及路径
  publicPath: './',  // 【必要】静态文件使用相对路径
  devServer: {  // 开发环境跨域情况的代理配置
    // open: true,
    host: "localhost",
    //客户端端口
    port: 8080,
    // https: false,
    // hotOnly: false,
    proxy: {
      //这里的api在axios传递数据时要用，可以检测请求地址，如果以"/api"开头，就会默认使用下面的代理
      '/api': {
        target: "http://127.0.0.1:8080/api/", //API服务器的地址
        changeOrigin: true,//"changeOrigin"用来设置开启代理
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }
})

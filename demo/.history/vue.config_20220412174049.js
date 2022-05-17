const { defineConfig } = require('@vue/cli-service')
process.env.VUE_APP_VERSION = require('./package.json').version
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
        target: "http://localhost:3000/api/", //API服务器的地址
        ws: true,
        changeOrigin: true,//"changeOrigin"用来设置开启代理
        pathRewrite: {
          '^/api': 'http://localhost:3000/api/'
        }
      }
    },
  },

  // build: {
  //   // Template for index.html
  //   index: path.resolve(__dirname, '../dist/index.html'),

  //   // Paths
  //   assetsRoot: path.resolve(__dirname, '../dist'),
  //   assetsSubDirectory: 'static',
  //   assetsPublicPath: '/',

  //   /**
  //    * Source Maps
  //    */

  //   productionSourceMap: true,
  //   // https://webpack.js.org/configuration/devtool/#production
  //   devtool: '#source-map',

  //   // Gzip off by default as many popular static hosts such as
  //   // Surge or Netlify already gzip all static assets for you.
  //   // Before setting to `true`, make sure to:
  //   // npm install --save-dev compression-webpack-plugin
  //   productionGzip: false,
  //   productionGzipExtensions: ['js', 'css'],

  //   // Run the build command with an extra argument to
  //   // View the bundle analyzer report after build finishes:
  //   // `npm run build --report`
  //   // Set to `true` or `false` to always turn it on or off
  //   bundleAnalyzerReport: process.env.npm_config_report
  // },


  chainWebpack: config => {
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      config.entry('app').clear().add('./src/main-prod.js')
      // config.set('externals', {
      //   vue: 'Vue',
      //   'vue-router': 'VueRouter',
      //   axios: 'axios',
      //   echarts: 'echarts',
      // })
    })
    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config.entry('app').clear().add('./src/main-dev.js')
    })
  }
})

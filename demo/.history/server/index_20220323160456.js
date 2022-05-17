// server 主文件
// node 后端服务器
const userApi = require('./api/userApi.js');
const goodsApi = require('./api/goodsApi.js');
const fs = require('fs');
const path = require('path');
// body-parser是非常常用的一个express中间件，作用是对http请求体进行解析
const bodyParser = require('body-parser');
// express框架
const express = require('express');
const app = express();


// 导入并配置 cors 中间件
const cors = require("cors")
app.use(cors())

app.use(bodyParser.json());
// 获取前端post请求传过来的参数
app.use(bodyParser.urlencoded({ extended: false }));

//下面这个能解决跨域问题
app.all('*', function (req, res, next) {
  console.log(req.method);
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-type');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
  res.header('Access-Control-Max-Age', 1728000);//预请求缓存20天
  next();
});

// 配置静态资源目录 整一个文件夹 通过域名能访问
app.use(express.static(path.join(__dirname, "../static")))
//数据模型
//路由配置
const upload = require('./router/upload.js');
app.use('/upload', upload)


// 后端api路由

app.use('/api/user', userApi);
app.use('/api/goods', goodsApi);


// 监听端口
app.listen(3000)
console.log('success listen at port:3000......')
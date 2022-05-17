// server 主文件
// node 后端服务器
const userApi = require('./api/userApi.js');
const userApi = require('./api/goodsApi.js');

const fs = require('fs');
const path = require('path');
// body-parser是非常常用的一个express中间件，作用是对http请求体进行解析
const bodyParser = require('body-parser');
// express框架
const express = require('express');
const app = express();

// //采用设置所有均可访问的方法解决跨域问题
// app.all("*", function (req, res, next) {
//   //设置允许跨域的域名，*代表允许任意域名跨域
//   res.header("Access-Control-Allow-Origin", "*");
//   //允许的header类型
//   res.header("Access-Control-Allow-Headers", "content-type");
//   //跨域允许的请求方式
//   res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
//   if (req.method.toLowerCase() == 'options')
//     res.send(200); //让options尝试请求快速结束
//   else
//     next();
// })




// 导入并配置 cors 中间件
const cors = require("cors")
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 后端api路由
app.use('/api/user', userApi);

// 监听端口
app.listen(3000)
console.log('success listen at port:3000......')
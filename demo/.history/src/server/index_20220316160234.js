// server 主文件
// node 后端服务器
const userApi = require('./api/userApi.js');

const fs = require('fs');
const path = require('path');
// body-parser是非常常用的一个express中间件，作用是对http请求体进行解析
const bodyParser = require('body-parser');
// express框架
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 后端api路由
app.use('/api/user', userApi);

// 监听端口
app.listen(3006);

console.log('success listen at port:3006......');
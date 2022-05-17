// server 主文件
// node 后端服务器
const userApi = require('./api/userApi.js');
const goodsApi = require('./api/goodsApi.js');
var mysql = require('mysql');
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


// 导入上传文件中间件，帮助我们实现接收文件的接口
const multer = require("multer")
// 接收到的文件放uploads文件夹中
const upload = multer({ dest: '../src/assets/uploads/' })
// 使外部通过连接可以访问这个文件夹里的文件（地址 + 端口 / 文件名）即可访问
app.use(express.static('uploads'))


//下面这个能解决跨域问题
app.all('*', function (req, res, next) {
  console.log(req.method);
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-type');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
  res.header('Access-Control-Max-Age', 1728000);//预请求缓存20天
  next();
});

//使得express后端能接收前端发送回来的json格式数据
app.use(express.json());

//实现新增（上传图片）接口，post请求，参数为 icon ！！！
app.post('/api/goods/addImage', upload.single('icon'), (req, response) => {
  // req.file得到前端发送回来的文件信息，req.body的到文件文本信息
  const { file, body } = req
  //判断是否发送的是空文件回来
  if (file == undefined) {
    response.send({ code: 400, msg: '新增失败,参数缺失' })
  } else {
    //利用kenx在数据库完成新增操作，保存文件名字段
    //相当于 insert into goods （icon）values（file.filename）
    knex('goods').insert({ icon: file.filename }).then(res => {
      response.send({ code: 200, msg: '新增成功' })
    })
  }
})

//实现查询接口，就是要返回图片给前端显示 
app.get('/api/goods/allImage', (req, response) => {
  // 相当于 select * from goods
  knex('goods').select()
    .then(res => {
      if (res.length === 0) {
        response.send({ code: 200, msg: '暂无数据' })
      } else {
        response.send({ code: 200, msg: '查询成功', data: res })
      }
    })
})




// 后端api路由

app.use('/api/user', userApi);
app.use('/api/goods', goodsApi);


// 监听端口
app.listen(3000)
console.log('success listen at port:3000......')
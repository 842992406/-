// goodsApi.js
var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.send('err')
  } else {
    //res.json(ret);
    res.send('ok')
  }
};


// 增加商品
router.post('/addGoods', (req, res) => {
  const sql = $sql.goods.add
  // 获取客户端提交到服务器的用户信息
  const params = req.body
  conn.query(sql, { name: params.name, price: params.price, amount: params.amount }, function (err, result) {
    if (err) {
      console.log(err.message)
    }
    if (result.affectedRows !== 1) {
      jsonWrite(res, result)
    }
  })
})

// 获取所有商品信息
router.get('/getAllGoods', (req, res) => {
  var sql = $sql.goods.getAll
  // 获取客户端提交到服务器的用户信息
  var params = req.query
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(result)
      res.send(result)
    }
  })
})

// 删除商品信息
router.post('/delGoods', (req, res) => {
  // 获取客户端提交到服务器的用户信息
  var params = req.body
  var sql = $sql.goods.del
  // console.log(params);
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(res);
      jsonWrite(res, result)
    }
  })
})


// 更新
router.post('/updateList', (req, res) => {
  var sql = $sql.hire.update
  var params = req.body
  conn.query(sql, [params.title, params.hire_id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

//查找
router.get('/searchList', (req, res) => {
  var sql = $sql.hire.search
  var params = req.query
  console.log(params)
  conn.query(sql, [params.title], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(result)
      res.send(result)
    }
  })
})

//实现新增（上传图片）接口，post请求，参数为 icon ！！！
app.post('/comic/add', upload.single('icon'), (req, response) => {
  // req.file得到前端发送回来的文件信息，req.body的到文件文本信息
  const { file, body } = req
  //判断是否发送的是空文件回来
  if (file == undefined) {
    response.send({ code: 400, msg: '新增失败,参数缺失' })
  } else {
    //利用kenx在数据库完成新增操作，保存文件名字段
    //相当于 insert into comic （icon）values（file.filename）
    knex('comic').insert({ icon: file.filename }).then(res => {
      response.send({ code: 200, msg: '新增成功' })
    })
  }
})


module.exports = router;
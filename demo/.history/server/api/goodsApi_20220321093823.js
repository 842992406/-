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
    // 判断用户名是否被占用
    // const sqlStr = 'select * from users where username=?'
    // conn.query(sqlStr, params.username, (err, resu) => {
    //   // 执行 SQL 语句失败
    //   if (err) return res.send({ status: 1, message: err.message })
    //   // 判断用户名是否被占用
    //   if (resu.length > 0) {
    //     return res.send({ status: 1, message: '用户名已被占用！' })
    //   }
    // })
    if (err) {
      console.log(err.message)
    }
    if (result.affectedRows !== 1) {
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

// 获取所有list
router.get('/getAllList', (req, res) => {
  var sql = $sql.hire.getAll
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

// 删除
router.post('/delList', (req, res) => {
  var sql = $sql.hire.del
  var params = req.body
  conn.query(sql, [params.hire_id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})


module.exports = router;
//userApi.js
var models = require('../db.js')  // 引入db配置
var express = require('express')  // express框架
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap.js')  // sql语句

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

// 查询列表接口，
// get接口，这里配置的/getlist,使用的时候就是 /home/getlist
// 回看index.js 中 app.use('/home', homeApi) ，就懂了

// 增加用户
router.post('/addList', (req, res) => {
  var sql = $sql.user.add
  var params = req.body
  conn.query(sql, [params.username, params.password], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

// 修改密码
router.post('/updateList', (req, res) => {
  var sql = $sql.user.update
  var params = req.body
  conn.query(sql, [params.password, params.id], function (err, result) {
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
  var sql = $sql.user.search
  var params = req.query
  console.log(params)
  conn.query(sql, [params.username], function (err, result) {
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
  var sql = $sql.user.getAll
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
  var sql = $sql.user.del
  var params = req.body
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})



module.exports = router
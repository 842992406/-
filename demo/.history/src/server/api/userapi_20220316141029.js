//userApi.js
var models = require('../db.js')  // 引入db配置
var express = require('express')  // express框架
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap.js')  // sql语句

// 连接数据库
var conn = mysql.createConnection(models.mysql)
conn.connect()

var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

// 查询列表接口，
// get接口，这里配置的/getlist,使用的时候就是 /home/getlist
// 回看index.js 中 app.use('/home', homeApi) ，就懂了


router.get('/getList', (req, res) => {
  var sql = $sql.admin_user.search
  var parms = req.query
  console.log(parms)
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

// 新增列表
router.post('/addList', (req, res) => {
  var sql = $sql.admin_user.add
  var parms = req.body
  console.log(parms)
  conn.query(sql, [parms.username, parms.password], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

module.exports = router
//userApi.js
var models = require('../db.js')  // 引入db配置
var express = require('express')  // express框架
var router = express.Router()     // 创建路由对象
var mysql = require('mysql')
var $sql = require('../sqlMap.js')  // sql语句

// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
const jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1', msg: '操作失败'
    })
  } else {
    res.json(
      ret
    )
  }
};

// 查询列表接口，
// get接口，这里配置的/getlist,使用的时候就是 /home/getlist
// 回看index.js 中 app.use('/home', homeApi) ，就懂了

// 增加用户
router.post('/addUser', (req, res) => {
  const sql = $sql.user.add
  // 获取客户端提交到服务器的用户信息
  const params = req.body
  conn.query(sql, { username: params.username, password: params.password, tel: params.tel }, function (err, result) {
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

// 修改密码
router.post('/updateUser', (req, res) => {
  var sql = $sql.user.update_password
  // 获取客户端提交到服务器的用户信息
  var params = req.body
  conn.query(sql, [params.password, params.tel], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

//查找
router.get('/searchUser', (req, res) => {
  var sql = $sql.user.search
  // 获取客户端提交到服务器的用户信息
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

// 获取所有User  (实验成功！)
router.get('/getAllUser', (req, res) => {
  var sql = $sql.user.getAll
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

// 删除
router.post('/delUser', (req, res) => {
  // 获取客户端提交到服务器的用户信息
  var params = req.body
  var sql = $sql.user.del
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

// 登录功能
router.post('/login', (req, res) => {
  var sql = $sql.user.select_user
  // 获取客户端提交到服务器的用户信息
  var params = req.query

  // 连接

  conn.query(sql, [params.username, params.password], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })


})



// 将路由对象共享出去
module.exports = router
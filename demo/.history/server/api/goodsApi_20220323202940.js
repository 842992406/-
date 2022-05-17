// goodsApi.js
var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
const fs = require('fs')
const multer = require('multer')  // 引入 multer 模块
const upload = multer({ dest: 'uploads/' })  // 配置图片文件的路径

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
// router.post('/addGoods', (req, res) => {
//   const sql = $sql.goods.add
//   // 获取客户端提交到服务器的用户信息
//   const params = req.body
//   conn.query(sql, { name: params.name, price: params.price, amount: params.amount }, function (err, result) {
//     if (err) {
//       console.log(err.message)
//     }
//     if (result.affectedRows !== 1) {
//       jsonWrite(res, result)
//     }
//   })
// })

router.post('/addGoods', upload.single('file'), (req, res, next) => {
  const sql = $sql.goods.add
  // 获取客户端提交到服务器的用户信息
  const params = req.body
  // 获取到file的信息 ---> 只能通过req.file
  const fileObj = req.file
  // 分割出type 
  let originalArr = fileObj.originalname.split('.')
  // 获取到type ( jpg/png/gif )
  let type = originalArr[originalArr.length - 1]

  // 读取文件 ( path, 'utf-8'(这里不写解码类型,直接把回调函数中的data写入新文件即可), callback)
  fs.readFile('../../src/assets/uploads/' + fileObj.filename, (err, data) => {
    if (err) throw err

    // 创建复制图片的路径 以及 拼接type形成一个完整的图片文件
    let newPath = '/img/headerImg/' + fileObj.filename + "." + type

    // 写入复制的图片 (path, data, callback)
    fs.writeFile('public' + newPath, data, (err) => { // 把读取到的data写入
      if (err) throw err

      // 删除原uploads路径下的图片
      fs.unlink('../../src/assets/uploads/' + fileObj.filename, () => {
        res.send({
          code: '200',
          msg: '上传成功'
        })
      })
    })
  })



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


module.exports = router;
// goodsApi.js
var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

//上传图片的模板
var multer = require('multer')
//生成的图片放入uploads文件夹下
var upload = multer({ dest: 'uploads/' })



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
//   conn.query(sql, { name: params.name, price: params.price }, function (err, result) {
//     if (err) {
//       console.log(err.message)
//     }
//     if (result.affectedRows !== 1) {
//       jsonWrite(res, result)
//     }
//   })
// })


router.post('/addGoods', upload.single('test'), (req, res) => {
  const sql = $sql.goods.add
  // 获取客户端提交到服务器的用户信息
  const params = req.body
  console.log(req.file);
  conn.query(sql, { name: params.name, price: params.price }, function (err, result) {
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

// 上传图片




module.exports = router;
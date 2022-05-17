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

// 上传图片
router.post("addImage", (req, res, next) => {
  /* console.log(req.files); //文件上传请求信息
  console.log(req.query.uid); */
  let tempPath = req.files[0].path; //找到临时路径
  var obj = req.files[0].fieldname;
  // selfFun.getSuffix(obj)得到上传文件后缀

  /*function getSuffix(obj){
    var index = obj.indexOf('.'); //获取“.”首次出现的位置
    return obj.substring(index + 1);
}*/
  // console.log('selfFun.getSuffix(obj): ', selfFun.getSuffix(obj));
  let filename = Data.now() + "." + selfFun.getSuffix(obj);//为上传的图片进行重命名(使用的时间)
  let targetPath = "views/imgStoreHouse/avatar/" + filename; //将文件放入上传上来的目标路径
  console.log('targetPath: ', targetPath);
  if (myfs.existsSync("./views/imgStoreHouse/avatar/") == false) { //判断路径下是否存在该用户的文件夹
    myfs.mkdirSync("./views/imgStoreHouse/avatar/"); //没有的话，就创建一个文件夹
  }
  myfs.rename(tempPath, targetPath, (err, data) => {
    if (!myfs.existsSync(targetPath)) {
      res.send({
        code: 201,
        msg: '上传失败！'
      });
      return;
    }
  })
})


module.exports = router;
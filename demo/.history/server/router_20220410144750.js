// const express = require('express')
// const router = express.Router()
// const fs = require('fs')
// const multer = require('multer')

// /**
//  * 上传图片
//  */
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads/")
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname)
//   }
// })

// var createFolder = function (folder) {
//   try {
//     fs.accessSync(folder)
//   } catch (e) {
//     fs.mkdirSync(folder)
//   }
// }

// var uploadFolder = './uploads/'
// createFolder(uploadFolder)
// var upload = multer({ storage: storage })

// router.post("/upload", upload.single('file'), function (req, res, next) {
//   var file = req.file
//   console.log('文件类型：%s', file.mimetype);
//   console.log('原始文件名：%s', file.originalname);
//   console.log('文件大小：%s', file.size);
//   console.log('文件保存路径：%s', file.path);
//   res.json({ res_code: '0', name: file.originalname, url: file.path })
// })


// module.exports = router
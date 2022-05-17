const express = require('express')
const router = express.Router()
const fs = require('fs')
const multer = require('multer')

/**
 * 上传图片
 */
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/")
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname)
  }
})

var createFolder = function (folder) {
  try {
    fs.accessSync(folder)
  } catch (e) {
    fs.mkdirSync(folder)
  }
}


module.exports = router
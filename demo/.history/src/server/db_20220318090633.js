const mysql = require("mysql")
// 数据库连接配置db.js
module.exports = {
  mysql: {
    host: 'localhost',//mysql连接ip地址
    user: 'root',
    password: 'root',//mySql用户名密码
    database: 'user',//mySql数据库名
    port: '3306'//mysql连接端口
  }
}
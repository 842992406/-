var mysql = require('mysql')
// 连接数据库
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'user'
})


module.exports = connection;
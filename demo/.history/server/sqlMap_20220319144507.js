//sqlMap.js
var sqlMap = {
  // 用户
  user: {
    // 添加
    add: 'insert into users set ?',
    getAll: "SELECT * FROM users",
    select_username: 'SELECT * from users where username = ?',    //查询 username
    select_password: 'SELECT * from users where password = ?',      //查询 password
    select_user: 'select * from users where (username = ? and password = ?)',      //查询 用户名和密码
    select_id: 'SELECT * from users where id = ?',    //查询 id
  },
  // 招聘
  // hire: {
  //   add: 'insert into user(hire_id, title, money, degree, exp, site, time, addr) values (0, ?, ?, ?, ?, ?, ?, ?)',
  //   getAll: 'SELECT * from hire',
  //   search: 'select * from hire where title = ?',
  //   update: 'update hire set title = ? where hire_id = ?'
  // }
}
module.exports = sqlMap;
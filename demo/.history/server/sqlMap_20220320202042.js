//sqlMap.js
var sqlMap = {
  // 用户
  user: {
    // 添加
    add: 'insert into users set ?',
    getAll: "SELECT * FROM users",
    select_username: 'SELECT * from users where username = ?',    //查询 username
    update_password: 'update users set password = ? where tel = ?',      //修改 password
    // select_user: 'select * from users where username = ? and password = ?',      //查询 用户名和密码
    select_user: 'select username, password from users',      //查询 用户名和密码
    select_id: 'SELECT * from users where id = ?',    //查询 id
    del: 'delete from users where id = ?', // 删除用户
  },
  admin: {
    // 添加
    add: 'insert into admin set ?',
    getAll: "SELECT * FROM admin",
    select_username: 'SELECT * from admin where username = ?',    //查询 username
    update_password: 'update admin set password = ? where tel = ?',      //修改 password
    // select_user: 'select * from admin where username = ? and password = ?',      //查询 用户名和密码
    select_user: 'select username, password from admin',      //查询 用户名和密码
    select_id: 'SELECT * from admin where id = ?',    //查询 id
    del: 'delete from admin where id = ?', // 删除用户
  }
  // 招聘
  // hire: {
  //   add: 'insert into user(hire_id, title, money, degree, exp, site, time, addr) values (0, ?, ?, ?, ?, ?, ?, ?)',
  //   getAll: 'SELECT * from hire',
  //   search: 'select * from hire where title = ?',
  //   update: 'update hire set title = ? where hire_id = ?'
  // }
}
module.exports = sqlMap;
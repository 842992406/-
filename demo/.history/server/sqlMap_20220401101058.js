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
  // 管理员
  admin: {
    // 添加
    add: 'insert into admin set ?',
    getAll: "SELECT * FROM admin",
    select_username: 'SELECT * from admin where username = ?',    //查询 username
    update_password: 'update admin set password = ? where tel = ?',      //修改 password
    // select_user: 'select * from admin where username = ? and password = ?',      //查询 用户名和密码
    select_admin: 'select username, password from admin',      //查询 用户名和密码
    select_id: 'SELECT * from admin where id = ?',    //查询 id
    del: 'delete from admin where id = ?', // 删除用户
  },
  // 商品
  goods: {
    add: 'insert into goods set ?', // 添加
    getAll: "SELECT * FROM goods", // 获取所有商品信息
    del: 'delete from goods where id = ?', // 删除用户
  },
  // 雇员
  employee: {
    // 添加
    add: 'insert into employee set ?',
    getAll: "SELECT * FROM employee",
    del: 'delete from employee where id = ?', // 删除用户
    update_info: 'update employee set name = ?, tel = ?, position = ? where id = ?',      //修改用户信息
  }
}
module.exports = sqlMap;
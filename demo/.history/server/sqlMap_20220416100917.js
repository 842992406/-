//sqlMap.js
var sqlMap = {
  // 用户
  user: {
    // 添加
    add: 'insert into users set ?',
    getAll: "SELECT * FROM users",
    select_username: 'SELECT * from users where username = ?',    //查询 username
    update_password: 'update users set password = ? where tel = ?',      //修改 password
    select_user: 'select username, password, buildingNum from users',      //查询 用户名和密码
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
    select_admin: 'select username, password from admin',      //查询 用户名和密码
    select_id: 'SELECT * from admin where id = ?',    //查询 id
    del: 'delete from admin where id = ?', // 删除用户
  },
  // 商品
  goods: {
    add: 'insert into goods set ?', // 添加
    getAll: "SELECT * FROM goods", // 获取所有商品信息
    del: 'delete from goods where id = ?', // 删除用户
    update_info: 'update goods set name = ?, price = ?, icon = ? where id = ?',      //修改商品信息
  },
  // 雇员
  employee: {
    // 添加
    add: 'insert into employee set ?',
    getAll: "SELECT * FROM employee",         // 获取所有的员工信息
    del: 'delete from employee where id = ?', // 删除用户
    update_info: 'update employee set name = ?, tel = ?, position = ? where id = ?',      //修改用户信息
  },
  // 管理员看所有订单
  order: {
    add: 'insert into orders set ?',   // 添加订单
    getAll: "SELECT * FROM orders", // 获取所有的订单
    del: 'delete from orders where id = ?', // 删除订单
  },
  // 用户自己的订单
  UserOrders: {
    add: 'insert into orders set ?',   // 添加订单
    getAll: "SELECT * FROM orders", // 获取所有的订单
    del: 'delete from orders where id = ?', // 删除订单
  }
}
module.exports = sqlMap;
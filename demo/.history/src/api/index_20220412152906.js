import ajax from './ajax'

// 1. 基础路径
// const BASE_URL = '/api';  // 防跨域
const BASE_URL = 'http://localhost:3000';  // 服务器真实地址

// 2. 请求方法

// 请求首页的轮播图
export const getHomeCasual = () => ajax(BASE_URL + '/api/user/getAllUser');
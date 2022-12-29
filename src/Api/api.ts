import request from './htpp';
import Qs from 'qs';

// 获取用户列表
export const getuserList = (params = {}) => {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'get',
    url: '/v1/user',
    params
  })
}

// 用户登录
export const userLogin = ( params = {}) => {
  return request({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'post',
    url: '/v1/login',
    data: Qs.stringify(params)
  })
}
// 用户登出
export const userLogout = ( params = {}) => {
  return request({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'get',
    url: '/v1/logout',
    data: Qs.stringify(params)
  })
}

// 重置密码

export const resetPassword = ( params = {}) => {
  return request({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'post',
    url: '/v1/password',
    data: Qs.stringify(params)
  })
}

// 创建用户,修改用户,删除用户
export const editUsers = (params = {}) => {
  return request({
    method: 'put',
    url: '/v1/user',
    headers: {
      'Content-Type': 'application/json'
    },
    data: params
  })
}

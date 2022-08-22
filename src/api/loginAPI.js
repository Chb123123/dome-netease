import axios from '@/utils/request.js'

// 登入路由
export const loginRt = function (phoneNum, userPasswd) {
  return axios({
    method: 'get',
    url: '/login/cellphone',
    params: { phone: phoneNum, password: userPasswd }
  })
}

// 注册路由

export const register = function (phoneNum) {
  return axios({
    method: 'get',
    url: '/captcha/sent',
    params: { phone: phoneNum }
  })
}

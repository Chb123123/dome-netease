import axios from '@/utils/request.js'

// 验证验证码是否正确
export const verify = function (userHome, captha) {
  return axios({
    method: 'get',
    url: '/captcha/verify',
    params: { phone: userHome, captcha: captha }
  })
}

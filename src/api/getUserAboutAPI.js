import axios from '@/utils/request.js'

// 获取用户详情
export const getUserAbout = function () {
  return axios({
    method: 'get',
    url: '/user/detail',
    params: { uid: 32953014 }
  })
}

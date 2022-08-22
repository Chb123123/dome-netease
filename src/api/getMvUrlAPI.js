import axios from '@/utils/request.js'

// 获取Mv的url 地址
export const GetMvULR = function (id) {
  return axios({
    method: 'get',
    url: '/mv/url',
    params: { id: id }
  })
}

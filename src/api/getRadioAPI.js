import axios from '@/utils/request.js'

// 获取推荐电台列表
export const GetRadio = function () {
  return axios({
    method: 'get',
    url: '/personalized/djprogram'
  })
}

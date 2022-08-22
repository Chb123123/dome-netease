import axios from '@/utils/request.js'

// 获取推荐视频列表
export const GetRecord = function () {
  return axios({
    method: 'get',
    url: '/program/recommend'
  })
}

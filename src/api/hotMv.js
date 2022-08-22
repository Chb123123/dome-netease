import axios from '@/utils/request.js'

// 热门MV
export const GetHotMV = function () {
  return axios({
    method: 'get',
    url: '/mv/first',
    params: { limit: 10 }
  })
}

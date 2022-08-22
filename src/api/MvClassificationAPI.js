import axios from '@/utils/request.js'

// 输入MV标签 获取相应的MV列表
export const MVList = function (title = '全部', num = 0) {
  return axios({
    method: 'get',
    url: '/mv/all',
    params: { area: title, limit: 30, offset: num }
  })
}

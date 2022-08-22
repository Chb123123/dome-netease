import axios from '@/utils/request.js'

// 获取 mv的点赞评论和收藏数量
export const GetMvdetails = function (id) {
  return axios({
    method: 'get',
    url: '/mv/detail/info',
    params: { mvid: id }
  })
}

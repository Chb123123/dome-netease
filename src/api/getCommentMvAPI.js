import axios from '@/utils/request.js'

// 获取 mv评论列表
export const GetCommentMV = function (id) {
  return axios({
    method: 'get',
    url: '/comment/mv',
    params: { id: id }
  })
}

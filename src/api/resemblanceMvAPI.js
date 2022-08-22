import axios from '@/utils/request.js'

// 传入id获取相似的 mv
export const GetresemblanceMv = function (id) {
  return axios({
    method: 'get',
    url: '/simi/playlist',
    params: { id: id }
  })
}

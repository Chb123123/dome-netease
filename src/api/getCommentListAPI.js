import axios from '@/utils/request.js'

// 获取歌单评论列表
export const getComments = function (songerID) {
  return axios({
    method: 'get',
    url: '/comment/playlist',
    // id 为歌曲的 ID
    params: { id: songerID }
  })
}

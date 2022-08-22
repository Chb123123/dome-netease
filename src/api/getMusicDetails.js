import axios from '@/utils/request.js'

// 获取歌曲详情
export const getMusicDetails = function (id) {
  return axios({
    method: 'get',
    url: '/song/detail',
    // id 为歌曲的 ID
    params: { ids: id }
  })
}

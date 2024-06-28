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

// 获取歌曲详情
export const getMusicLyric = function (id) {
  return axios({
    method: 'get',
    url: '/lyric',
    // id 为歌曲的 ID
    params: { id: id }
  })
}

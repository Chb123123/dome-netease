import axios from '@/utils/request.js'

// 获取歌单列表
export const GetLoadSongList = function (songListNum, val, num) {
  return axios({
    method: 'get',
    url: '/top/playlist',
    params: { limit: songListNum, cat: val, offset: num }
  })
}

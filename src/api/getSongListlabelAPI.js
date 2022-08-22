import axios from '@/utils/request.js'

// 通过标签获取歌单  num 为歌单的页数 label为歌单的标签
export const getSongList = function (num, label) {
  return axios({
    method: 'get',
    url: '/top/playlist',
    params: { limit: num, cat: label }
  })
}

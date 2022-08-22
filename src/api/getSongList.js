import axios from '@/utils/request.js'

// 获取歌单列表
export const getSongList = function () {
  return axios({
    method: 'get',
    url: '/playlist/highquality/tags'
  })
}

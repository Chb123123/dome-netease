import axios from '@/utils/request.js'

// 输入歌曲信息，获取相关歌曲列表
export const searchSongList = function (musicName) {
  return axios({
    method: 'get',
    url: '/search',
    params: { limit: 40, offset: 0, keywords: musicName }
  })
}

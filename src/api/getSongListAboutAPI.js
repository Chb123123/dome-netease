import axios from '@/utils/request.js'

// 通过歌单标签获取歌单详情
export const getSongList = function (songListId) {
  return axios({
    method: 'get',
    url: '/playlist/detail',
    params: { id: songListId }
  })
}

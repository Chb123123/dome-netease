import axios from '@/utils/request.js'

// 传入歌单ID 获取歌单内的歌曲列表
export const GetPlayListDetails = function (SongListid) {
  return axios({
    method: 'get',
    url: '/playlist/track/all',
    params: { id: SongListid, limit: 50, offset: 0 }
  })
}

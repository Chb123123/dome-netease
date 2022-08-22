import axios from '@/utils/request.js'

// 推荐歌曲
export const GetNewSong = function (Count) {
  return axios({
    method: 'get',
    url: '/personalized/newsong',
    params: { limit: Count }
  })
}

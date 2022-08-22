import axios from '@/utils/request.js'

// 搜索路由
export const submitMusic = function (keyword) {
  return axios({
    method: 'get',
    url: '/search',
    params: { key: keyword }
  })
}

// 请求推荐歌单
export const GetSongList = function (sonList) {
  return axios({
    method: 'get',
    url: '/personalized',
    params: { limit: sonList }
  })
}

// 推荐歌曲
export const GetNewSong = function () {
  return axios({
    method: 'get',
    url: '/personalized/newsong'
  })
}

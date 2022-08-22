import axios from '@/utils/request.js'

// 获取 音乐的url 地址
export const GetMusicULR = function (id) {
  return axios({
    method: 'get',
    url: '/song/url',
    params: { id: id }
  })
}

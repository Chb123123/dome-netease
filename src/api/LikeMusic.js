import axios from '@/utils/request.js'

// 获取我喜欢模块的音乐
export const getLikeMuisList = function () {
  return axios({
    method: 'get',
    url: '/likelist',
    params: { uid: 32953014 }
  })
}

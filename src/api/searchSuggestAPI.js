import axios from '@/utils/request.js'

// 获取搜索关键字
export const searchSuggest = function (val) {
  return axios({
    method: 'get',
    url: '/search/suggest',
    params: { keywords: val }
  })
}

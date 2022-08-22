// 导入axios模块
import axios from 'axios'

// 输入歌手 ID 获取歌手详情
export const getSingerAbout = function (SingerId) {
  return axios({
    method: 'get',
    url: 'https://netease-eta.vercel.app/artist/desc',
    params: { id: SingerId }
  })
}

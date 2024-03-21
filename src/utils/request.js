import axios from 'axios'

const axios1 = axios.create({
  // baseURL: 'https://netease-eta.vercel.app'
  baseURL: 'http://121.41.122.125:3000' // 本地执行
})

export default axios1

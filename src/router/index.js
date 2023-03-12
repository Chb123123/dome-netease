import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
// import Login from '@/components/login/login.vue'
// import Home from '@/views/myHome.vue'
// 注册组件
// import Register from '@/components/register/register.vue'
// 用户组件
// import UserState from '@/views/Userprofile.vue'
// 我喜欢组件
// import UserLike from '@/views/userLikeMuisc.vue'
// 播放音乐组件
// import PlayMusic from '@/components/home/plugin/playMusic.vue'
// 搜索页面
// import searchMusic from '@/views/searchMusic.vue'
// 点击歌手分类跳转歌手列表
// import SingerList from '@/components/home/singerList.vue'
// 歌单广场
// import songList from '@/components/home/songList.vue'
// 歌单广场内的歌单
// import SongListMusics from '@/components/home/songLists/songList/songListMusic.vue'
// 搜索详情页
// import SearchMusicList from '@/components/Search/searchMusicList.vue'
// 歌单评论组件
// import Comments from '@/components/home/songLists/commentList/commentList.vue'
// 播放视频组件
// import playMv from '@/components/home/plugin/playMv.vue'
// import playMvList from '@/components/home/mvList.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: () => import('@/views/myHome.vue') },
  { path: '/login', component: () => import('@/components/login/login.vue') },
  { path: '/home', component: () => import('@/views/myHome.vue') },
  { path: '/register', component: () => import('@/components/register/register.vue') },
  { path: '/user', component: () => import('@/views/Userprofile.vue'), name: 'userLike' },
  { path: '/like', component: () => import('@/views/userLikeMuisc.vue') },
  { path: '/playmusic', component: () => import('@/components/home/plugin/playMusic.vue') },
  { path: '/searchmusic', component: () => import('@/views/searchMusic.vue') },
  { path: '/singerList', component: () => import('@/components/home/singerList.vue') },
  { path: '/songlist', component: () => import('@/components/home/songList.vue') },
  { path: '/songlistmusic', name: 'songlistmusic', component: () => import('@/components/home/songLists/songList/songListMusic.vue') },
  { path: '/searchAbout', component: () => import('@/components/Search/searchMusicList.vue') },
  { path: '/comments', component: () => import('@/components/home/songLists/commentList/commentList.vue') },
  { path: '/playMv', component: () => import('@/components/home/plugin/playMv.vue') },
  { path: '/mvContainer', component: () => import('@/components/home/mvList.vue') }
]

// const routes = [
//   { path: '/', component: Home },
//   { path: '/login', component: Login },
//   { path: '/home', component: Home },
//   { path: '/register', component: Register },
//   { path: '/user', component: UserState, name: 'userLike' },
//   { path: '/like', component: UserLike },
//   { path: '/playmusic', component: PlayMusic },
//   { path: '/searchmusic', component: searchMusic },
//   { path: '/singerList', component: SingerList },
//   { path: '/songlist', component: songList },
//   { path: '/songlistmusic', name: 'songlistmusic', component: SongListMusics },
//   { path: '/searchAbout', component: SearchMusicList },
//   { path: '/comments', component: Comments },
//   { path: '/playMv', component: playMv },
//   { path: '/mvContainer', component: playMvList }
// ]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

// 导航守卫
router.beforeEach()

export default router

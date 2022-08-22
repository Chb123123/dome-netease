import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import Login from '@/components/login/login.vue'
import Home from '@/views/myHome.vue'
// 注册组件
import Register from '@/components/register/register.vue'
// 用户组件
import UserState from '@/views/Userprofile.vue'
// 我喜欢组件
import UserLike from '@/views/userLikeMuisc.vue'
// 播放音乐组件
import PlayMusic from '@/components/home/plugin/playMusic.vue'
// 搜索页面
import searchMusic from '@/views/searchMusic.vue'
// 点击歌手分类跳转歌手列表
import SingerList from '@/components/home/singerList.vue'
// 歌单广场
import songList from '@/components/home/songList.vue'
// 歌单广场内的歌单
import SongListMusics from '@/components/home/songLists/songList/songListMusic.vue'
// 搜索详情页
import SearchMusicList from '@/components/Search/searchMusicList.vue'
// 歌单评论组件
import Comments from '@/components/home/songLists/commentList/commentList.vue'
// 播放视频组件
import playMv from '@/components/home/plugin/playMv.vue'
import playMvList from '@/components/home/mvList.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/register', component: Register },
  { path: '/user', component: UserState, name: 'userLike' },
  { path: '/like', component: UserLike },
  { path: '/playmusic', component: PlayMusic },
  { path: '/searchmusic', component: searchMusic },
  { path: '/singerList', component: SingerList },
  { path: '/songlist', component: songList },
  { path: '/songlistmusic', name: 'songlistmusic', component: SongListMusics },
  { path: '/searchAbout', component: SearchMusicList },
  { path: '/comments', component: Comments },
  { path: '/playMv', component: playMv },
  { path: '/mvContainer', component: playMvList }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

// 导航守卫
router.beforeEach()

export default router

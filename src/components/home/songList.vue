<template>
  <div class="songListContainer">
    <van-nav-bar
  left-text="歌单广场"
  left-arrow
  @click-left="onClickLeft"
  fixed
  z-index="9999"
/>
<van-tabs v-model="active" animated @click="onClick">
  <van-tab v-for="index in songListLabel" :title="index.name" :key="index.id">
  </van-tab>
</van-tabs>
<van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
<SongStyle style="margin-top: .5333rem;" :songList="songList" :songLabel="parmatsongLabel" @songLabel="renewSongList"></SongStyle>
</van-list>
  </div>
</template>

<script>
// 导入相关歌单组件
import SongStyle from '@/components/home/songLists/songStyle.vue'
import { getSongList } from '@/api/getSongList.js'
import { GetLoadSongList } from '@/api/getsongListrelatedAPI.js'
export default {
  components: {
    SongStyle
  },
  data () {
    return {
      // active 表示创建组件时的默认位置
      active: 0,
      // 标签列表
      songListLabel: [],
      // 歌单列表
      songList: [],
      // 歌单标签
      parmatsongLabel: '',
      // 加载状态
      loading: true,
      // 数据是否加载完毕
      finished: false,
      // 下拉加载时 请求的数量增加是30条
      limit: 0
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back(-1)
    },
    onClick (name, title) {
      // console.log(name, title)
      this.parmatsongLabel = title
    },
    renewSongList (val) {
      this.songList = val.data.playlists
      this.songList = new Set(this.songList)
      // 点击切换标签时 limit 的值重新赋值为 0
      this.limit = 0
    },
    // 下拉加载
    async onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // console.log('123')
      this.limit += 30
      // console.log(this.limit)
      const res2 = await GetLoadSongList(30, '华语', this.limit)
      this.songList = [...this.songList, ...res2.data.playlists]
      // console.log(res2.data.playlists)
      // console.log(this.songList)
      if (res2.data.playlists.length === 0) {
        this.finished = true
      }
      this.loading = false
    }
  },
  async created () {
    const res = await getSongList()
    // console.log(res.data.tags)
    this.songListLabel = res.data.tags
    // 创建组件时获取华语表单
    const res1 = await GetLoadSongList(30, '华语', 0)
    this.songList = res1.data.playlists
    this.songList = new Set(this.songList)
    this.loading = false
  }
}
</script>

<style lang="less" scoped>
  .songListContainer{
    padding: 2.4rem .6667rem;
    /deep/.van-nav-bar .van-icon, /deep/.van-nav-bar__text{
      color: #666;
    }
    /deep/.van-nav-bar__content{
      height: 2.4rem;
    }
    /deep/.van-nav-bar__text{
      font-size: .8rem;
    }
    /deep/.van-nav-bar__arrow{
      font-size: .8533rem;
    }
    /deep/.van-tabs__nav--line{
      height: 2.4rem;
      line-height: 2.4rem;
      // margin-bottom: 90px;
    }
    /deep/.van-tab{
      font-size: .7467rem;
      height: 2.4rem;
    }
    /deep/.van-tabs__wrap{
      height: 2.4rem;
    }
    /deep/.van-tabs__wrap--scrollable .van-tab{
      padding: 0 .5867rem;
    }
  }
</style>

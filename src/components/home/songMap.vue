<template>
  <div class="songList">
    <van-swipe vertical autoplay="3000" :show-indicators="false">
      <van-swipe-item v-for="item in songLiet" :key="item.id">
        <SongList :mvId="item.id" :images="item.picUrl" :title="item.name" :playCount="item.playCount"></SongList>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import SongList from '@/components/home/sonList.vue'
import { GetSongList } from '@/api/musicAPI.js'
export default {
  name: 'songMapList',
  components: {
    SongList
  },
  data () {
    return {
      songLiet: []
    }
  },
  methods: {
    async getSong () {
      const res = await GetSongList(10)
      this.songLiet = res.data.result
    }
  },
  created () {
    this.getSong()
  }
}
</script>

<style lang="less" scoped>
  .songList{
    width: 5.7333rem;
    height: 7.4667rem;
    margin-right: .2667rem;
    /deep/.van-swipe{
      height: 7.4667rem;
    }
  }
</style>

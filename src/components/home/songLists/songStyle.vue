<template>
  <div class="songContainer">
    <div class="box">
      <Song v-for="item in songList" :key="item.id" :songID="item.id" :overURL="item.coverImgUrl" :songTitle="item.description" :playNumber="item.playCount" :songItem="item"></Song>
    </div>
  </div>
</template>

<script>
import { getSongList } from '@/api/getSongListlabelAPI.js'
import Song from '@/components/home/songLists/songList/song.vue'
export default {
  name: 'songStyle',
  components: {
    Song
  },
  props: {
    // 歌单详情对象
    songList: [],
    // 歌单标签
    songLabel: {}
  },
  watch: {
    // 父组件点击切换其他标签时请求当前标签的歌单
    async songLabel () {
      const res = await getSongList(30, this.songLabel)
      this.$emit('songLabel', res)
    }
  },
  methods: {
    getId () {
      console.log('11')
    }
  }
}
</script>

<style lang="less" scoped>
  .songContainer{
    // padding: 0 10px;
    .box{
      display: flex;
      // background-color: red;
      // padding: 0 10px;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
</style>

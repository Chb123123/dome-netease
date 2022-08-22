<template>
  <div class="recommendcontainer">
    <div class="head">推荐歌单<router-link to="songList" class="more">更多<van-icon name="arrow" /></router-link></div>
    <div class="recommendbody">
      <div class="musicbox">
        <div class="songMap">
          <SongMap></SongMap>
        </div>
        <SongList v-for="item in usersongLiet" :key="item.id" :overURL="item.picUrl" :songTitle="item.name" :playNumber="item.playCount" :songID="item.id" :songItem="item"></SongList>
      </div>
    </div>
  </div>
</template>

<script>
import SongList from '@/components/home/songLists/songList/song.vue'
import SongMap from '@/components/home/songMap.vue'
// 推荐歌单API
import { GetSongList } from '@/api/musicAPI.js'
export default {
  name: 'recommendMusic',
  components: {
    SongList,
    SongMap
  },
  data () {
    return {
      usersongLiet: []
    }
  },
  methods: {
    async GetSong () {
      const res = await GetSongList(10)
      this.usersongLiet = res.data.result
      // console.log(res)
    }
  },
  created () {
    this.GetSong()
  }
}
</script>

<style lang="less" scoped>
  .recommendcontainer{
    padding: 0 .6667rem;
    margin-top: .2667rem;
    background-color: white;
    .head{
      position: relative;
      height: 1.6rem;
      line-height: 1.6rem;
      font-size: .7467rem;
      color: #000;
      .more{
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        font-size: .5333rem;
        color: #333;
        border: .0267rem solid #ccc;
        height: .8rem;
        line-height: .8rem;
        border-radius: .4rem;
        padding: .0267rem .1333rem;
        text-align: center;
      }
    }
    .recommendbody{
      height: 7.4667rem;
      display: flex;
      // border: 1px solid red;
      .musicbox{
        display: flex;
        overflow-Y: hidden;
        overflow-X: scroll;
        .songMap{
          margin-right: .1333rem;
        }
      }
    }
  }
</style>

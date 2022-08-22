<template>
  <div class="recommendcontainer">
    <div class="head">最新MV<router-link to="mvContainer" class="more">更多<van-icon name="arrow" /></router-link></div>
    <div class="recommendbody">
      <div class="musicbox">
        <SongList v-for="item in usersongLiet" :key="item.id" :images="item.cover" :title="item.name" :playCount="item.playCount" :mvId="item.id"></SongList>
      </div>
    </div>
  </div>
</template>

<script>
import SongList from '@/components/home/plugin/singStyle.vue'
// 推荐歌单API
import { GetHotMV } from '@/api/hotMv.js'
export default {
  name: 'recommendMusic',
  components: {
    SongList
  },
  data () {
    return {
      usersongLiet: []
    }
  },
  methods: {
    async GetSong () {
      const res = await GetHotMV()
      this.usersongLiet = res.data.data
      // console.log(res.data.data)
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
    margin-top: .5333rem;
    background-color: white;
    .head{
      position: relative;
      height: 1.6rem;
      line-height: 1.6rem;
      font-size: .7467rem;
      color: #444;
      .more{
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        font-size: .5867rem;
        color: #333;
        border: .0267rem solid #ccc;
        height: .8rem;
        line-height: .8rem;
        border-radius: .5333rem;
        padding: .0533rem .2667rem;
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
          margin-right: .2667rem;
        }
      }
    }
  }
</style>

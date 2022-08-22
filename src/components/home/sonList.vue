<template>
  <div class="sonListContsinar">
    <div class="sonBg" @click="getMvId">
      <div :v-if="images" style="width: 100%;"><img :src="images" alt=""></div>
      <div class="playNum"><van-icon name="play-circle" style="margin-right: .2667rem;"/>{{playCount | formatPlayCount}}</div>
    </div>
    <div class="Songintroduce">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'sonListContsinar',
  props: {
    title: {
      type: String
    },
    images: {},
    playCount: {
      type: Number
    },
    mvId: {}
  },
  methods: {
    getMvId () {
      console.log(this.mvId)
      this.$router.push({
        name: 'songlistmusic',
        params: {
          id: this.mvId,
          // 歌单详情
          name: this.title,
          // 歌单封面
          imgUrl: this.images,
          // 歌单简介
          Introduction: this.title
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .sonListContsinar{
    height: 7.4667rem;
    width: 5.7333rem;
    display: flex;
    flex-direction: column;
    margin-right: .2667rem;
    // background-color: blue;
    .sonBg{
      position: relative;
      // flex: 1;
      width: 5.7333rem;
      height: 5.7333rem;
      border-radius: .8rem;
      overflow: hidden;
      // background-color: blue;
      img{
        width: 100%;
        height: 100%;
      }
      .playNum{
        position: absolute;
        top: .2667rem;
        right: .2667rem;
        color: white;
        font-size: .5867rem;
        background-color: rgba(0,0,0,.3);
        padding: .0533rem .1067rem;
        border-radius: .5333rem;
      }
    }
    .Songintroduce{
      margin-top: .1333rem;
      // flex: 20%;
      height: 1.7333rem;
      font-size: .5333rem;
      // background-color: aqua;
      display: -webkit-box;
      word-break:break-all ;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      color: #555;
    }
  }
</style>

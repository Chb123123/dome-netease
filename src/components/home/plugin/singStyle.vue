<template>
  <div class="sonListContsinar">
    <div class="sonBg" @click="getMvId">
      <div :v-if="images" style="background-color: blue; width: 100%; height: 100%;"><img :src="images" alt=""></div>
      <div class="playNum"><van-icon name="play-circle" style="margin-right: 5px;"/>{{playCount | formatPlayCount}}</div>
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
      this.$router.push('/playMv?id=' + this.mvId)
      console.log(this.mvId)
    }
  }
}
</script>

<style lang="less" scoped>
  .sonListContsinar{
    height: 6.6667rem;
    min-width: 5.7333rem;
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
      border-radius: .4rem;
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
        font-size: .5333rem;
        background-color: rgba(0,0,0,.3);
        padding: .1067rem .2133rem;
        border-radius: .4267rem;
      }
    }
    .Songintroduce{
      padding-top: .2667rem;
      // flex: 20%;
      height: .9333rem;
      line-height: .9333rem;
      font-size: .64rem;
      // background-color: aqua;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #555;
    }
  }
</style>

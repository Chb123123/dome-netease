<template>
  <div class="singerContainer">
    <div class="singerImg">
      <img :src="singerImg" alt="">
    </div>
    <div class="singerIntroduce">
      <span class="singerTitle">歌手</span>
      <div class="singerAuthor">{{ firstSingerAuthor }}</div>
      <div class="singerWork"><span>歌曲:141</span><span>专辑:26</span><span>视频:170</span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 歌曲作者
    firstSingerAuthor: {},
    // 作者id
    singerId: {},
    // 作者图片
    singerImg: {}
  }
}
</script>

<style lang="less" scoped>
  .singerContainer{
    height: 100px;
    display: flex;
    background-color: white;
    align-items: center;
    padding: 0 10px;
    margin-top: 10px;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    .singerImg{
      width: 80px;
      height: 80px;
      // background-color: red;
      border-radius: 50%;
      margin-right: 15px;
      overflow: hidden;
      > img{
        width: 100%;
        height: 100%;
      }
      // background-color: red;
    }
    .singerIntroduce{
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      // align-items: center;
      .singerTitle{
        color: #777;
        font-size: 12px;
      }
      .singerAuthor{
        font-size: 14px;
        margin: 5px 0;
      }
      .singerWork{
        color: #777;
        font-size: 12px;
        > span{
          margin-right: 5px;
        }
      }
    }
  }
</style>

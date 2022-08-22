<template>
  <div class="formContainer">
    <router-link to="/home" class="navStyle"><span><van-icon name="audio" /></span>每日推荐</router-link>
    <router-link to="/songList" class="navStyle"><span><van-icon name="comment" /></span>歌单</router-link>
    <router-link to="" class="navStyle"><span><van-icon name="todo-list" /></span>排行榜</router-link>
    <router-link to="/singerList" class="navStyle"><span><van-icon name="manager" /></span>歌手分类</router-link>
  </div>
</template>

<script>
export default {
  name: 'formNav'
}
</script>

<style lang="less" scoped>
  .formContainer{
    display: flex;
    align-items: center;
    // justify-content: space-between;
    height: 2.6667rem;
    // border: 1px solid red;
    background-color: white;
    .navStyle{
      flex: 1;
      display: flex;
      flex-direction: column;
      // margin: 0 20px;
      justify-content: center;
      font-size: .5333rem;
      text-align: center;
      align-items: center;
      color: #666;
      span{
        // border: 1px solid red;
        height: 1.6rem;
        width: 1.6rem;
        line-height: 1.6rem;
        text-align: center;
        border-radius: 50%;
        background-color: #FDF1F1;
        font-size: .7467rem;
        color: #FB524B;
      }
    }
  }
</style>

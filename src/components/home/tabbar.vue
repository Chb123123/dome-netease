<template>
  <div class="tabbercontainer">
    <van-tabbar route>
  <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
  <van-tabbar-item icon="like-o" to="/like">喜欢</van-tabbar-item>
  <van-tabbar-item icon="search" to="/searchmusic">搜索</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to="/user">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'netTabbar'
}
</script>

<style lang="less" scoped>
  .tabbercontainer{
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 60px;
    /deep/.van-tabbar{
      height: 60px;
    }
  }
</style>

<template>
  <div class="appContainer">
    <keep-alive exclude="songListMusicContent">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// tabber 模块
export default {
  components: {
  }
}
</script>

<style lang="less" scoped>
  .appContainer{
    width: 20rem;
    margin: auto;
    box-sizing: border-box;
  }
</style>

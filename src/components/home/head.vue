<template>
  <div class="head">
    <div class="sbumit">
      <router-link to="/searchmusic" class="sideNew"><van-icon name="apps-o" /></router-link>
      <router-link to="/searchmusic" class="submitbox">
        <van-icon name="search"  style="margin-right: .2667rem;"/>金莎
      </router-link>
      <router-link to="" class="sideNew"><van-icon name="live" /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nteHead'
}
</script>

<style lang="less" scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .head{
    position: fixed;
    top: 0;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    display: flex;
    height: 2.6667rem;
    // line-height: 100px;
    background-color: #fff;
    z-index: 9999;
    .sbumit{
      flex: 1;
      display: flex;
      padding: .5333rem 0;
      // background-color: aqua;
      .submitbox{
        flex: 1;
        font-size: .7467rem;
        background-color: #eee;
        // border: 1px solid #ccc;
        border-radius: .8rem;
        padding: 0 .8rem;
        line-height: 1.6rem;
        color: #777;
      }
      .sideNew{
        width: 2.6667rem;
        height: 1.6rem;
        // background-color: red;
        line-height: 1.6rem;
        text-align: center;
        font-size: .96rem;
        color: #333;
      }
    }
  }
</style>

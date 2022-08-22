<template>
<!-- 评论组件 -->
  <div class="commentContainer">
    <!-- 用户头像 -->
    <div class="userAvatar"><img :src="userAvatar" alt=""></div>
    <div class="userAbout">
      <div class="user">
        <div class="username">{{ username }}</div>
        <div class="releaseTime">{{ releaseTime }}</div>
        <div class="liekicon" v-if="commentsLikeCount">{{ commentsLikeCount }}<van-icon name="good-job" /></div>
      </div>
      <div class="comment">{{ commentContent }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 用户头像
    userAvatar: {},
    // 用户名称
    username: {},
    // 发布时间
    releaseTime: {},
    // 用户评论
    commentContent: {},
    // 评论点赞数量
    commentsLikeCount: {}
  }
}
</script>

<style lang="less" scoped>
  .commentContainer{
    margin-top: 10px;
    padding: 0 10px;
    margin-bottom: 15px;
    display: flex;
    // height: 100px;
    // background-color: red;
    .userAvatar{
      flex: 0.15;
      // background-color: red;
      img{
        width: 40px;
        height: 40px;
        display: block;
        border-radius: 50%;
      }
    }
    // 用户详情
    .userAbout{
      // position: relative;
      flex: 0.8;
      // background-color: aqua;
      .user{
        position: relative;
        height: 40px;
        display: flex;
        // flex-wrap: wrap;
        flex-direction: column;
        // background-color: blue;
        .username{
          color: #444;
        }
        .releaseTime{
          font-size: 12px;
        }
        .liekicon{
          position: absolute;
          right: 5px;
          top: 50%;
          transform: translateY(-50%);
          color: #444;
        }
      }
      .comment{
        color: #444;
      }
    }
  }
</style>

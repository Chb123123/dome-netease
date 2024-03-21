<template>
  <div class="login-container">
    <div class="loginbox">
      <div class="loginHead">
        登 入
      </div>
      <div class="loginUser">
        账号：<input type="text" name="" id="" placeholder="输入手机号" ref="phone" v-model.trim="userPhone">
      </div>
      <div class="loginPwd">
        密码：<input type="password" name="" id="" placeholder="输入密码" ref="pwd" v-model.trim="userPwd">
      </div>
      <button class="loginbtn" @click="btnlogin">登入</button>
      <div class="register">还没有账号? <router-link to="/register" style="color: red;">去注册</router-link></div>
    </div>
  </div>
</template>

<script>
import { loginRt } from '@/api/loginAPI'
export default {
  name: 'myLogin',
  data () {
    return {
      userPhone: '123',
      userPwd: '123'
    }
  },
  methods: {
    async btnlogin () {
      if (this.userPhone.length === 0 || this.userPwd === 0) {
        alert('用户名或密码不能为空！！')
      } else {
        const res = await loginRt(this.userPhone, this.userPwd)
        // console.log(res)
        if (res.status === 200) {
          console.log('登入成功')
          this.$router.replace('/home')
        } else {
          console.log('登入失败')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .login-container{
    position: relative;
    width: 100vw;
    height: 100Vh;
    background: url('@/assets/loginBg.jpg') no-repeat 0 0 / cover;
    .loginbox{
      width: 80vw;
      height: 70vw;
      background-color: rgba(255,255,255,0.2);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: .5333rem;
      .loginHead{
        height: 1.0667rem;
        color: white;
        line-height: 1.0667rem;
        text-align: center;
        margin-top: .4rem;
        font-size: .64rem;
        margin-bottom: .5333rem;
      }
      .loginUser{
        margin-bottom: .2667rem;
        text-align: center;
        display: flex;
        padding: 0 .5333rem;
        height: .9333rem;
        line-height: .9333rem;
        color: white;
        > input{
          flex: 1;
          outline: none;
          border: 0;
          color: #ccc;
          background-color: transparent;
          border-bottom: .0267rem solid white;
        }
      }
      .loginPwd{
          margin-bottom: .2667rem;
        text-align: center;
        display: flex;
        padding: 0 .5333rem;
        height: .9333rem;
        line-height: .9333rem;
        color: white;
        > input{
          flex: 1;
          outline: none;
          border: 0;
          color: #ccc;
          background-color: transparent;
          border-bottom: .0267rem solid white;
        }
        }
        .loginbtn{
          display: block;
          width: 80%;
          height: .8rem;
          margin: .6667rem auto 0;
          border-radius: .5333rem;
          background: -webkit-linear-gradient(left, #b9c1f8, #e78788);
          border: 0;
          color: white;
        }
    }
    .register{
      position: absolute;
      bottom: .2667rem;
      right: .2667rem;
      // margin-top: 10px;
      font-size: .32rem;
      color: white;
    }
  }
</style>

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
      border-radius: 20px;
      .loginHead{
        height: 40px;
        color: white;
        line-height: 40px;
        text-align: center;
        margin-top: 15px;
        font-size: 24px;
        margin-bottom: 20px;
      }
      .loginUser{
        margin-bottom: 10px;
        text-align: center;
        display: flex;
        padding: 0 20px;
        height: 35px;
        line-height: 35px;
        color: white;
        > input{
          flex: 1;
          outline: none;
          border: 0;
          color: #ccc;
          background-color: transparent;
          border-bottom: 1px solid white;
        }
      }
      .loginPwd{
          margin-bottom: 10px;
        text-align: center;
        display: flex;
        padding: 0 20px;
        height: 35px;
        line-height: 35px;
        color: white;
        > input{
          flex: 1;
          outline: none;
          border: 0;
          color: #ccc;
          background-color: transparent;
          border-bottom: 1px solid white;
        }
        }
        .loginbtn{
          display: block;
          width: 80%;
          height: 30px;
          margin: 25px auto 0;
          border-radius: 20px;
          background: -webkit-linear-gradient(left, #b9c1f8, #e78788);
          border: 0;
          color: white;
        }
    }
    .register{
      position: absolute;
      bottom: 10px;
      right: 10px;
      // margin-top: 10px;
      font-size: 12px;
      color: white;
    }
  }
</style>

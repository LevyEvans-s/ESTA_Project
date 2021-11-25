<template>
  <div class="my-header">
    <div class="header">
      <ul class="header-left">
        <li class="text1"><a>关于本站 </a></li>
        <li class="line">|</li>
        <li class="text"><a>帮 助 </a></li>
        <li class="line">|</li>
        <li class="text"><a>反 馈 </a></li>
        <li class="line">|</li>
        <li class="text1"><a> 侵权投诉</a></li>
      </ul>
      <ul class="header-right" ref="config">
        <li><button class="login-button" @click="login">登 录</button></li>
        <li><button class="logout-button" @click="register">注 册</button></li>
      </ul>
      <div class="info" ref="info">
        <span class="red">欢迎您</span>{{this.username}}
        <button @click="logout">退出</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 当前登录用户名
      username: "",
    };
  },
  created() {
    if (!localStorage.getItem("username")) {
      this.$router.push("/login");
    } else {
      this.username = localStorage.getItem("username");
    }
  },
  mounted(){
    if(localStorage.getItem('username')){
      this.$refs.config.style.display="none"
      this.$refs.info.style.display="block"
    }
  },
  methods: {
    //登录
    login(){
      this.$router.push('/login')
    },
    // 注册
    register() {
      this.$router.push("/register");
    },
    //退出
    logout(){
      localStorage.clear()
      location.reload(true)
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  font-family: Microsoft YaHei-Regular, Microsoft YaHei;
  color: rgba(51, 51, 51, 0.800000011920929);
  .header-left {
    box-sizing: content-box;
    display: flex;
    width: 50rem;
    text-align: center;
    line-height: 3rem;
    .text {
      display: inline;
      width: 4rem;
    }
    .text1 {
      width: 5.5rem;
    }
    .line {
      width: 1rem;
      overflow: hidden;
      height: 1.8rem;
      margin: 0.1rem;
      color: rgba(51, 51, 51, 0.20000000298023224);
    }
  }
  .header-right {
    box-sizing: content-box;
    float: right;
    display: flex;
    text-align: center;
    width: 30rem;
    line-height: 3rem;
    display: block;
    li {
      display: inline;
      width: 5rem;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    }
   
  }
   .info {
      display: none;
      height: 100%;
      box-sizing: border-box;
      padding-top: 12px;
      button{
        width: 70px;
        height: 30px;
        border: none;
        background: #af3c3c;
        color:#fff;
        border-radius: 8px;
        margin-left: 20px;
        cursor: pointer;
      }
    }
  .red{
    color:#af3c3c;
    margin-right: 12px;
  }
  .login-button {
    color: #be1428;
    border-radius: 10px 10px 10px 10px;
    border: 2px solid #be1428;
    width: 70px;
    height: 28px;
    font-weight: bold;
    cursor: pointer;
  }
  .logout-button {
    background-color: #af3c3c;
    color: rgba(255, 249, 249, 1);
    border-radius: 10px 10px 10px 10px;
    border: 2px solid;
    width: 70px;
    height: 30px;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>

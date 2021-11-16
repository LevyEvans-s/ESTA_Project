<template>
  <div class="login">
      <div class="bg">
          <img src="../../../public/imgs/login_bg.jpg" alt="">
      </div>
      <div class="container">
        <div class="wrapper">
          <div class="login-form">
              <h3>
                  <span class="checked">登录</span>
              </h3>
              <div class="input-area">
                  <div class="input">
                    <i class="iconfont icon-jurassic_user"></i><input type="text" placeholder="请输入帐号" v-model="username">
                  </div>
                  <div class="input">
                    <i class="iconfont icon-mima"></i><input type="password" placeholder="请输入密码" v-model="password"> 
                  </div>
                  <div class="input">
                    <i class="iconfont icon-yanzhengyanzhengma"></i><input type="text" placeholder="请输入验证码">     
                  </div>
                  <div class="verification">
                      <img src="../../../public/imgs/验证码.png" alt="">                    
                  </div>
                  <span>换一批</span>
              </div>
          </div>
          <div class="checkbox">
              <input type="checkbox" name="" id=""> &nbsp;&nbsp;&nbsp;已阅读并同意《用户协议》和《隐私政策》
          </div>
          <button class="login-button" @click="login">登录</button>
          <div class="remark">
              <span>忘记密码?</span>
              <div>
                <span>还没有注册吗？</span><span class="red" @click="toRegister">去注册</span>      
              </div> 
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Login',
    data(){
        return {
            username:'',
            password:'',
            cookie:'' 
        }
    },
    methods:{
        //模拟登录(采用token验证)
        login(){
            if(this.username==='admin'&&this.password==='123'){
                this.$router.push('/home')
            }
        },
        toRegister(){
            this.$router.push('/register')
        }
    },
}
</script>

<style lang="scss" scoped>
.login{ 
    .bg{
        width:100%;  
        height:100%; 
        position: absolute;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .container{
        width: 100%;
        height: 100%;
        position: relative;
        .wrapper{
            width: 602px;
            height: 472px;
            background-color: #fff;
            left:50%;
            top:50%;
            margin-left: -300px;
            margin-top: -170px;
            position: fixed;
            .login-form{
                width: 400px;
                height: auto;
                margin-left: 99px;
                margin-top: 28px;
                position: relative;
                h3{
                    font-size: 28px;
                    .checked{
                        margin-left: 170px;
                    }
                }
                .input-area{
                    position: absolute;
                    width: 400px;
                    height: 162px;
                    margin-top:14px;
                    .input{
                        display:inline-block;
                        width:100%;
                        height:40px;
                        margin-bottom:21px;
                        background-color: rgba(221, 221, 221, 0.4000000059604645);
                        position: relative;
                        i{
                            display: inline-block;
                            position: absolute;
                            margin-left: 20px;
                            margin-top: 11px;
                            font-size: 18px;
                        }
                        input{
                            display: inline-block;
                            width: 340px;
                            height: 100%;
                            margin-left: 58px;
                            background-color: rgba(221, 221, 221, 0.4000000059604645);
                            border: none;
                            text-indent: 1em;
                        }
                        &:nth-child(3){
                            width: 160px;
                            height: 40px;
                            input{
                                width:102px;
                            }
                        }
                    }
                    .verification{
                        width: 160px;
                        height: 40px;
                        display: inline-block;
                        position: absolute;
                        margin-left: 31px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    &>span{                      
                        display: inline-block;
                        margin-left: 195px;
                        &:hover{
                            color:#AF3C3C;
                            cursor: pointer;
                        }
                    }
                }              
            }
            .checkbox{
                display: inline-block;
                width: 400px;
                height: 24px;
                position: absolute;    
                line-height: 24px;
                font-size:16px;
                color:rgba(51, 51, 51, 0.800000011920929);
                left:99px;
                bottom:190px;
                input{
                    width: 22px;
                    height: 22px;
                    vertical-align: middle;
                    margin-left: 20px;
                }
            }
            .login-button{
                display: inline-block;
                position: absolute;
                width: 400px;
                height: 40px;
                background-color: #AF3C3C;
                left: 99px;
                bottom: 135px;
                border:none;
                color:rgba(255, 249, 249, 1);
            }
            .remark{
                width: 400px;
                height: 21px;
                position: absolute;
                left: 99px;
                bottom: 100px;
                line-height: 21px;
                font-size: 16px;
                color: rgba(51, 51, 51, 0.800000011920929);
                 &>span{
                        &:hover{
                            color:#AF3C3C;
                            cursor: pointer;
                        }
                    }
                div{
                    display: inline-block;
                    position: absolute;
                    right: 0px;
                    .red{
                        color:#AF3C3C;
                        &:hover{
                            cursor: pointer;
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    } 
}
</style>
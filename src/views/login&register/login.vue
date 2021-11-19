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
              <el-form :label-position="labelPosition" :model="ruleForm" :rules="rules" label-width="80px" class="form">
                  <el-form-item label="用户名" prop="username">
                      <el-input v-model="ruleForm.username"  placeholder="请输入用户名" class="input"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="password">
                      <el-input v-model="ruleForm.password"  placeholder="请输入密码" class="input" type="password"></el-input>
                  </el-form-item>
                  <el-form-item label="验证码"  prop="verification">
                      <el-input v-model="ruleForm.verification" class="verifyCode" placeholder="请输入验证码"></el-input>
                  </el-form-item>
              </el-form>
              <div class="codeImg">
                  <img src="../../../public/imgs/验证码.png" alt=""><span>换一个</span>
              </div>
              <div class="checkbox">
                   <input type="checkbox" name="" id="" v-model="checked"><span @click="changeChecked">已阅读并同意《用户协议》和《隐私政策》</span>
              </div>
          </div>
          <el-button type="text" class="login-button" @click="login">登录</el-button>
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
import  {postUserLoginInfo}  from '@/api/api.js'

export default {
    name:'Login',
    data(){
        return {
            checked:false,
            labelPosition: 'left',
            userInfo:{
                username:'',
                password:'',
            },
            ruleForm:{
                username:'',
                password:'', 
                verification:'',
            },
            rules:{
                username:[
                    {required:true,message:'用户名不能为空',trigger:'blur'}
                ],
                password:[
                    {required:true,message:'密码不能为空',trigger:'blur'}
                ],
                verification:[
                    {required:true,message:'请输入正确的验证码',trigger:'blur'}
                ],
                checked:[
                    {require:true,message:'请先勾选协议',trigger:'change'}
                ]
            }
        }
    },
     methods: {
         changeChecked(){
             this.checked=!this.checked
         },
         login(){
             //登录前校验是否勾选用户协议
            if(!this.checked){
                return this.$msgbox.alert('请先勾选用户协议!','登录失败',{
                    confirmButtonText: '确定'
                })    
            }
            let {username,password}=this.userInfo
            //创建element-ui loading实例对象
            const loadingInstance=this.$loading.service({fullscreen:true,lock:true})

            //向后端登录接口发送post请求
            postUserLoginInfo({username,password})
                    .then(res=>{
                        console.log(res)    //检验服务端返回的信息
                        this.$cookie.set('userId',res.id,{expires:'1M'}) //保存cookie
                        /**
                         * to-do:使用Vuex托管用户信息,防止跳转到首页后页面刷新数据丢失,实现用户信息展示
                         * 
                         */
                        this.$router.push('/home') 
                    })
            loadingInstance.close() //关闭loading
        },
         toRegister(){
             this.$router.push('/register') 
         }
    }
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
                .form{
                    position: absolute;
                    top: 60px; 
                    .input{
                        width: 320px;
                    }  
                    .verifyCode{
                        width: 120px;
                    }           
                } 
                .checkbox {
                    width: 400px;
                    height: 24px;
                    position: absolute;
                    left: 65px;
                    top:240px;
                    font-size:16px;
                    color:#333333;
                    input{
                        width: 16px;
                        height: 16px;
                        vertical-align: middle;
                        margin-right: 10px;
                        cursor: pointer;
                    }
                    span{
                        &:hover{
                            cursor: pointer;
                        }
                    }
                }
                .codeImg{
                    position: absolute;
                    width: 200px;
                    height: 40px;
                    left:210px;
                    top: 183px;
                    img{ 
                        width: 160px;
                        height: 40px;
                    }
                    span{
                        display: inline-block;
                        position: absolute;
                        bottom:12px;
                        right:-5px;
                        &:hover{
                            cursor: pointer;
                            color: #AF3C3C;
                        }
                    }
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
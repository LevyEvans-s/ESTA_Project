<template>
  <div class="sticky-container" ref="topbar">
      <div class="header-wrapper">
          <div class="site-header">
              <a href="" class="logo"></a>
              <div class="channel-wrapper">
                  <div class="channel-nav">
                      <ul>
                          <li aria-label="首页">
                              <div class="channel-default-nav-item">
                                  <a href="">首页</a>
                              </div>
                          </li>
                          <li aria-label="推荐">
                              <div class="channel-default-nav-item">
                                  <a href="">推荐</a>
                              </div>
                          </li>
                          <li aria-label="热点">
                              <div class="channel-default-nav-item">
                                  <a href="">热点</a>
                              </div>
                          </li>
                          <li aria-label="要闻">
                              <div class="channel-default-nav-item">
                                  <a href="">要闻</a>
                              </div>
                          </li>
                          <li aria-label="党课">
                              <div class="channel-default-nav-item">
                                  <a href="">党课</a>
                              </div>
                          </li>
                          <li aria-label="视频">
                              <div class="channel-default-nav-item">
                                  <a href="">视频</a>
                              </div>
                          </li>
                          <li aria-label="理论">
                              <div class="channel-default-nav-item">
                                  <a href="">理论</a>
                              </div>
                          </li>
                          <li aria-label="资源库">
                              <div class="channel-default-nav-item">
                                  <a href="">资源库</a>
                              </div>
                          </li>
                          <li aria-label="更多">
                              <div class="channel-default-nav-item">
                                  <a href="">更多</a>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
              <div class="search-wrapper">
                  <div class="search">
                      <input type="text">
                      <button type="button" aria-label="搜索"> 
                          <i></i>
                      </button>
                  </div>
              </div>
              <div style="margin-left:30px;left-shrink:0;">
                  <div class="header-profile" style="width:200px;">
                      <a href="javascript:;" class="login-button" @click="login"  ref="loginBtn">登录</a>
                      <span ref="info"><span class="red">欢迎您</span>&nbsp;{{this.username}}</span>
                      <span href="javascript:;" class="logout-button" @click="logout"  ref="logoutBtn">退出</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            username:localStorage.getItem('username')
        }
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll,false)
        if(localStorage.getItem('username')){
            this.$refs.loginBtn.style.display='none'
            this.$refs.info.style.display='inline-block'
            this.$refs.logoutBtn.style.display='inline-block'
        }
    },
    methods:{
        handleScroll(e){
            if(window.scrollY!==0){
                 this.$refs.topbar.style.boxShadow="0 2px 16px rgb(54,56,79,6% )"
            }else{
                this.$refs.topbar.style.boxShadow="none"
            }
        },
        login(){
            this.$router.push('/login')
        },
        logout(){
            localStorage.clear()
            location.reload(true)
        }
    }
}
</script>

<style scoped lang="scss">
.sticky-container{
    position: sticky;
    width: 100%;
    top:0;
    left:0;
    z-index:200;
    background: #fff;
    .header-wrapper{
        box-sizing: border-box;
        padding: 0 30px 0 16px;
        min-width: 1200px;
        width: 100%;
        height: 64px;   
        .site-header{
            display: flex;
            align-items: center;
            margin:0 auto;
            max-width:1320px;
            height:100%;
            .logo{
                flex-shrink: 0;
                width:110px;
                height: 36px;
                background: url('../assets/imgs/logo.png') no-repeat;
                background-size:contain;
            }
            .channel-wrapper{
                margin:0 60px 0 40px;
                width: 676px;
                min-width: 530px;
                .channel-nav{
                    width: 100%;
                    ul{
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        .channel-default-nav-item{
                            font-size: 18px;
                            font-weight: 400;
                            position: relative;
                            line-height:24px;
                            cursor: pointer;
                            user-select: none;
                            outline: none;
                            padding: 6px 0;
                            a{
                                color:#222;
                            }
                        }
                    }
                }
            }
            .search-wrapper{
                width: 372px;
                .search{
                    width: 100%;
                    position: relative;
                    box-sizing: border-box;
                    height: 40px;
                    input{
                        height: 100%;
                        padding-left: 18px;
                        padding-right:52px;
                        font-size:16px;
                        line-height:20px;
                        color:#222;
                        background-color:#f5f5f5;
                        border-radius: 8px;
                        border:2px solid #f5f5f5;
                        z-index:10;
                        width:100%;
                        position: relative;
                        box-sizing: border-box;
                        outline: none;
                    }
                    button{
                        outline: none;
                        width: 54px;
                        height:100%;
                        border-top-right-radius: 8px;
                        border-bottom-right-radius: 8px;
                        border:none;
                        background:transparent;
                        position: absolute;
                        top:0;
                        right: 0;
                        z-index:11;
                        cursor: pointer;
                        i{
                            display: block;
                            width: 30px;
                            height: 30px;
                            margin: auto;
                            background:url('../assets/imgs/search.png');
                            background-size: contain;
                        }
                    }
                }
            }
            .header-profile {
                text-align: center;
                .login-button{
                    width: 40px;
                    text-align: center;
                    display: inline-block;
                    border-radius: 6px;
                    padding: 7px 14px;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 20px;
                    color:#fff;
                    text-shadow: none;
                    background-color: #f04142;
                }
                .logout-button{
                    display: none;
                    width: 40px;
                    height: 20px;
                    text-align: center;
                    border-radius: 6px;
                    padding: 7px 14px;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 20px;
                    color:#fff;
                    text-shadow: none;
                    background-color: #f04142;
                    cursor: pointer;
                }
                &>span{
                    width: 110px;
                    height: 20px;
                    line-height: 20px;
                    margin-right: 10px;
                    display: none;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    .red{
                        color:#f04142;
                    }
                }
            }
        }
    }
}
</style>
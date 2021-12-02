<template>
  <div>
    <MyHeader></MyHeader>
    <div class="large-container">
<!-- 搜索栏 -->
    <div class="search-box">
      <div class="search-container">
        <input type="text" value placeholder="   请输入搜索内容" />
        <span><img src="../assets/imgs/search1.png" alt="" /></span>
        <button id="search-button">搜 索</button>
        <div class="hotnews">
          <ul>
            热门关键词:
            <li>“七一”精神</li>
            <li>建党100周年</li>
            <li>红色专题系列讲座</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 时间表 -->
    <div class="timetable-box">
      <div class="timetable-container">
        <div class="timetable-wrapper">
          <span class="text">党<br />政<br />要<br />闻</span>
          <!-- 内容区域 -->
          <div class="content">
            
              <ul class="time">
                <li class="pic">
                  <img src="../assets/imgs/Mask Group-2.png" alt="" />
                  <p class="p1">习大大外交出访</p>
                  <p class="p2">2021.03</p>
                </li>
                <li class="pic">
                  <img src="../assets/imgs/Group3.png" alt="" />
                  <p class="p1">新冠疫情表彰大会</p>
                  <p class="p2">2021.04</p>
                </li>
                <li class="pic">
                  <img src="../assets/imgs/Mask Group-4.png" alt="" />
                  <p class="p1">外交出访</p>
                  <p class="p2">2021.06</p>
                </li>
                <li class="pic">
                  <img src="../assets/imgs/Mask Group-5.png" alt="" />
                  <p class="p1">学习党的文化</p>
                  <p class="p2">2021.07</p>
                </li>
                <li class="pic">
                  <img src="../assets/imgs/Mask Group-6.png" alt="" />
                  <p class="p1">中非抗疫</p>
                  <p class="p2">2021.08</p>
                </li>
                <li class="pic">
                  <img src="../assets/imgs/Mask Group-7.png" alt="" />
                  <p class="p1">日常检阅</p>
                  <p class="p2">2021.09</p>
                </li>
                <li class="pic">
                  <img src="../assets/imgs/Mask Group-8.png" alt="" />
                  <p class="p1">双十一物流情况</p>
                  <p class="p2">2021.11</p>
                </li>
                <li class="pic">
                  <img src="../assets/imgs/Mask Group-9.png" alt="" />
                  <p class="p1">彰显大国风范</p>
                  <p class="p2">2021.12</p>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
    </div>
    
    <!-- 新闻栏 -->
    <div class="channel-wrapper">
      <div class="channel-left">
        <ul class="header">
          <li class="text"><a>推 荐 </a></li>
          <li class="line">|</li>
          <li class="text"><a>要 闻 </a></li>
          <li class="line">|</li>
          <li class="text"><a>党 课</a></li>
          <li class="line">|</li>
          <li class="text"><a> 理 论</a></li>
          <li class="line">|</li>
          <li class="text"><a> 资料库</a></li>
          <li class="line">|</li>
          <li class="text"><a> 更 多</a></li>
          <li class="img">
            <a href="javasrcipt:;"
              ><img src="../assets/imgs/arrow.png" alt=""
            /></a>
          </li>
        </ul>
        <!-- 新闻容器 -->
      <ul class="news">
          <li  v-for="(item,index) in newsList" :key="index" class="h">
            <div class="card-article">
              <div class="feed-card-article">
                <router-link :to="{name:'Info',params:{id:item.id}}" class="title">
                  <h2  v-text=item.title></h2>
                </router-link>
                <div class="footer-cmp">
                  <div class="left-tools">
                    <div class="comment">
                      发布日期：
                      <a href="javascript:;" v-text="item.publishTime"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>           
          </li>
      </ul>
      <div
        class="channel-right"
        ref="append"
      >
        <HotIssues></HotIssues>
      </div>
    </div>
  </div>
  <div class="toorbar">
    <div class="tool-container">
      <div class="tool-item" @click="backToTop">
        <img src="../assets/imgs/top.png" alt="" class="icon">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import service from "../util/require.js";
import MyHeader from "../components/MyHeader.vue";
import HotIssues from "../components/HotIssues.vue";
export default {
  name: "Home",
  props: {},
  data() {
    return {
      id:1,
      newsList: [],
    }
  },
  components: {
    MyHeader,
    HotIssues,
  },
  created() {
     this.getNewsList()
  },
  mounted(){
    window.addEventListener('scroll',this.load,true)
  },
  methods: {
    async getNewsList() {
      //请求默认的列表信息
      let res = await service.get("/newslist",{
        params:{
          id:this.id
        }
      })
      // let res=await this.$axios.get("/data?num=15")
      this.newsList= [...this.newsList,...res.data.data.newsList]
    },
    async load(){
      let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      //变量windowHeight是可视区的高度
      let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
      if(scrollTop>=1000){
        this.$refs.append.style.position="fixed"
        this.$refs.append.style.top="25px"
        this.$refs.append.style.left="1080px"
      }else if(scrollTop<=1000){
        this.$refs.append.style.position="absolute"
        this.$refs.append.style.top="20px"
        this.$refs.append.style.left="600px"
      }
       //滚动条到底部的条件
       if(scrollTop+windowHeight >= scrollHeight){ 
         if(this.id>100){
            this.$message.warning("没有了~~");
            return
          }
          let loadingInstance = this.$loading.service({ fullscreen: true });
          this.id+=10
          this.getNewsList()
          loadingInstance.close()
       }
    },
    backToTop(){
      var scrollTop = document.documentElement.scrollTop;
      document.documentElement.style.marginTop = -scrollTop + 'px';
      document.documentElement.scrollTop = 0;
      document.documentElement.style.transition = 'all 1s ease-in-out';
      document.documentElement.style.marginTop = 0;
      setTimeout(function () { document.documentElement.style.transition = 'none' }, 1000);
    }
  }
}
</script>

<style scoped lang="scss">
.search-box {
  width: 100%;
  height: 500px;
  position: absolute;
  background-image: url(../assets/imgs/homebg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
}
.search-container {
  width: 700px;
  height: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -35%);
  input {
    height: 50px;
    width: calc(100% - 200px);
    font-size: 20px;
    border-right: none;
    border-radius: 10px 0 0 10px;
    border: 1px #dddddd solid;
  }
  span {
    position: absolute;
    // width: 20px;
    top: 8px;
    right: 200px;
    cursor: pointer;
  }
  #search-button {
    position: absolute;
    height: 55px;
    width: 130px;
    top: -1px;
    border: 0 none;
    cursor: pointer;
    transition: all 0.2s ease-in;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    background-color: #be1428;
    border-radius: 0 10px 10px 0;
  }
  .hotnews {
    margin-top: 5px;
    ul {
      color: #be1428;
      font-weight: bold;
      li {
        display: inline-block;
        color: #ffffff;
        margin-right: 20px;
        font-weight: 500;
      }
    }
  }
}
.timetable-box {
  position: absolute;
  width: 100%;
  height: 500px;
  top: 500px;
  background-image: url(../assets/imgs/bg2.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  border-bottom: 5px solid #c4c4c4;
  .timetable-container {
    position: relative;
    height: 500px;
    margin: 0 100px;
    .text {
      position: absolute;
      left: 268px;
      top: 130px;
      font-size: 50px;
      color: #5a5454;
      font-weight: bolder;
    }
  
    .timetable-wrapper{
      margin: 0 auto;
    }
  .navs {
    position: absolute;
    width: 180px;
    height: 300px;
    margin: 50px 250px;

    li {
      color: #aaaaaa;
      font-weight: bolder;
      font-size: 50px;
    }
  }
  .navs .active {
    color: #be1428;
  }
  .content {
    width: 90%;
    height: 100%;
    position: absolute;
    margin-top: 60px;
    margin-left:450px;
    .time {
      width: 1200px;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      li{
        box-sizing: border-box;
        align-content: center;
      }
      .pic {
        margin-bottom: 20px;
        margin-right: 20px;
        .p1 {
          color: #333333;
          font-size: 20px;
          font-weight: bold;
        }
        .p2 {
          color: #333333;
          font-size: 17px;
          font-weight: bold;
          margin-top: 5px;
        }
      }
    }
  }
  }
}
.channel-wrapper {
  position: relative;
  top: 1005px;
  width: 70%;
  margin: 0 25%;
  .channel-left {
    height: inherit;
    width: 50%; 
    .header {
      width: 100%;
      height: 50px;
      li {
        float: left;
        margin: 25px;
        margin-bottom: none;
        color: #5c5c5c;
      }
      .text {
        margin: 20px 3px 0 5px;
        font-weight: bold;
        font-size: 1.4rem;
      }
      .line {
        font-size: 20px;
        margin: 23px 4px 0;
      }
      .img {
        margin: 27px 3px 0 5px;
        height: 10px;
      }
    }

    .news {
      width: 100%;
      margin-top: 10px;
      a {
        margin-bottom: 10px;
      }
      .h{
        &:first-child{
          padding-top: 16px;
        }
        padding: 4px 0;
        .card-article{
          padding: 4px 0;
          .feed-card-article{
            overflow: hidden;
            .title{
              margin-bottom: 8px;
              padding-right: 89px;
              display: inline-block;
              font-size: 20px;
              font-weight: 500;
              line-height: 28px;
              word-break: break-all;
              color: #222;
              h2{
                font-size: inherit;
                font-weight: inherit;
                &:hover{
                  color: #be1428;
                }
              }
            }
            .footer-cmp{
              .left-tools{
                float: left;
                .author{
                  display: inline-block;
                  margin-right: 20px;
                  a{
                    font-size: 14px;
                    line-height: 20px;
                    color:#999;
                  }
                }
                .comment{
                  display: inline-block;
                  margin-right: 20px;
                  font-size: 14px;
                  line-height: 20px;
                  color:#999;
                  a {
                    display: inline-block;
                    font-size: 14px;
                    line-height: 20px;
                    color:#999;
                  }
                }
                .time{
                  display: inline-block;
                  margin-right: 20px;
                  font-size: 14px;
                  line-height: 20px;
                  color:#999;
                }
              }
            }
          }
        }
      }
    }
    .more {
      color: #be1428;
      position: absolute;
      right: 50%;
      bottom: 25px;
      img {
        height: 12px;
        margin-top: 5px;
      }
    }
  }
  .channel-right {    
    display: inline-block;
    left:600px;
    top: 18px;
    position: absolute;
  }
}
.left-tools{
  .author{
    font-size: 14px;
    color:#999;
  }
}
.toorbar{
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 200;
  .tool-item{
    text-align: center;
    cursor: pointer;
    padding: 12px 0;
    position: relative;
    .icon{
      width: 24px;
      height: auto;
    }
  }
}
.large-container{
  width: 100%;
  position: relative;
}
</style>

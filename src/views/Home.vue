<template>
  <div>
    <MyHeader></MyHeader>
    <!-- 搜索栏 -->
    <div class="search-box">
      <div class="search-container">
        <input type="text" value placeholder="   请输入搜索内容" />
        <span><img src="../assets/imgs/search1.png" alt="" /></span>
        <button id="search-button">搜 索</button>
        <div class="hotnews">
          <ul>
            热门关键词:
            <li>热门关键词</li>
            <li>热门关键词</li>
            <li>热门关键词</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 时间表 -->
    <div class="timetable-box">
      <div class="timetable-container">
        <div class="timetable-wrapper">
          <span class="text">时<br />间<br />表</span>
          <!-- 导航区域 -->
          <ul class="navs">
            <li >2021</li>
            <li>2020</li>
            <li>2019</li>
            <li>2018</li>
            <li>2017</li>
            <li>2016</li>
            <li>2015</li>
          </ul>
          <!-- 内容区域 -->
          <div class="content">
            <div>
              <ul class="time">
                <li class="pic">
                  <img src="../assets/imgs/Mask Group-2.png" alt="" />
                  <p class="p1">习大大外交出访</p>
                  <p class="p2">2021.03</p>
                </li>
                <li class="pic">
                  <img src="../assets/imgs/Mask Group-2.png" alt="" />
                  <p class="p1">习大大外交出访</p>
                  <p class="p2">2021.03</p>
                </li>
                <li class="pic">
                  <img src="../assets/imgs/Mask Group-2.png" alt="" />
                  <p class="p1">习大大外交出访</p>
                  <p class="p2">2021.03</p>
                </li>
                <li class="pic">
                  <img src="../assets/imgs/Mask Group-2.png" alt="" />
                  <p class="p1">习大大外交出访</p>
                  <p class="p2">2021.03</p>
                </li>
                <li class="pic">
                  <img src="../assets/imgs/Mask Group-2.png" alt="" />
                  <p class="p1">习大大外交出访</p>
                  <p class="p2">2021.03</p>
                </li>
                <li class="pic">
                  <img src="../assets/imgs/Mask Group-2.png" alt="" />
                  <p class="p1">习大大外交出访</p>
                  <p class="p2">2021.03</p>
                </li>
                <li class="pic">
                  <img src="../assets/imgs/Mask Group-2.png" alt="" />
                  <p class="p1">习大大外交出访</p>
                  <p class="p2">2021.03</p>
                </li>
                <li class="pic">
                  <img src="../assets/imgs/Mask Group-2.png" alt="" />
                  <p class="p1">习大大外交出访</p>
                  <p class="p2">2021.03</p>
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
                <a class="title">
                  <h2  v-text=item.title></h2>
                </a>
                <div class="footer-cmp">
                  <div class="left-tools">
                    <div class="author">
                      <a href="javascript:;" v-text=item.from></a>
                    </div>
                    <div class="comment">
                      <a href="javascript:;" v-text="item.reads"></a>评论
                    </div>
                    <div class="time" v-text="item.date"></div>
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
  <!-- 底部
    <div class="bottom">
      <div class="bottom-box">
        <ul class="bottom-left">
          <li class="text">建议反馈</li>
          <li class="line">|</li>
          <li class="text">联系我们</li>
        </ul>
        <ul class="bottom-right">
          <li class="text">Copyright</li>
          <li class="line">|</li>
          <li class="text">HHU</li>
        </ul>
      </div>
    </div> -->
</div>
</template>

<script>
import MyHeader from "../components/MyHeader.vue";
import HotIssues from "../components/HotIssues.vue";
export default {
  name: "Home",
  props: {},
  data() {
    return {
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
      // 请求默认的列表信息
      let res = await this.$axios.get("/data?num=15")
      this.newsList= [...this.newsList,...res.data.list]
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
          let loadingInstance = this.$loading.service({ fullscreen: true });
          this.getNewsList()
          loadingInstance.close()
       }
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
      left: 150px;
      top: 150px;
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
    width: 90%px;
    position: absolute;
    margin-top: 60px;
    margin-left: 430px;
    .time {
      li {
        float: left;
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
.bottom {
  width: 100%;
  height: 100px;
  background-color: #384558;
  position: absolute;
  left: 0;
  right: 0;
  bottom:0;
  z-index:200;
  transform: translate3d(0px, 1960px, 0);
  .bottom-box {
    margin: 40px 20%;
    .bottom-left {
      float: left;
    }
    .bottom-right {
      float: right;
    }
    li {
      font-size: 20px;
      display: inline-block;
      margin-right: 20px;
      color: #fff;
    }
  }
}
</style>

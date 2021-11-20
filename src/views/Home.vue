<template>
  <div>
    <MyHeader></MyHeader>
    这是首页
    <dl>
      <dd v-for="(item, index) in newsList" :key="index">
        <router-link to="/info">{{ item.title }}</router-link>
      </dd>
    </dl>
  </div>
</template>

<script>
import MyHeader from "../components/MyHeader.vue"
export default {
  name: "Home",
  data() {
    return {
      // 新闻列表信息
      newsList: [],
    };
  },
  components:{
    MyHeader
  },
  created() {
    // 为什么在 created 中来建议发出 axios 请求？
    // 因为，在 created 的时候，this.data 中的属性已经被创建了，这样的话，就能在第一时间发出请求了
    // 给用户的体验 相应会更加及时
    this.getNewsList();
  },
  // mounted 是页面中的 dom 已经被渲染完成了，我们在这里通过 ref 得到 dom 节点，进行操作
  mounted(){

  },
  methods: {
    // 获取新闻列表
    async getNewsList() {
      // 请求默认的列表信息
      let res = await this.$axios.get("/data?num=20");
      this.newsList = res.data.list;
    },
  },
};
</script>

<style></style>

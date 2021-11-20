<template>
  <div>
    <MyHeader></MyHeader>
    <h2>{{ newinfo.title }}</h2>
    <p>{{ newinfo.cpa }}</p>
  </div>
</template>

<script>

import MyHeader from "../components/MyHeader.vue"
export default {
  name: "Info",
  data() {
    return {
      // 当前登录用户名
      username: "未登录",
      // 新闻列表信息
      newinfo: {},
    };
  },
  components:{
    MyHeader
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    // 获取新闻列表
    async getNewsInfo() {
      // 请求默认的列表信息
      let res = await this.$axios.get("/info?id=11");
      this.newinfo = res.data;
    },
  },
};
</script>

<style></style>

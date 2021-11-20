<template>
  <div class="my-header">
    <router-link to="/login">登录</router-link>
    <el-button @click="logout">退出</el-button>
    <span>{{ username }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 当前登录用户名
      username: "未登录",
    };
  },
  created() {
    if (!localStorage.getItem("username")) {
      this.$router.push("/login");
    } else {
      this.username = localStorage.getItem("username");
    }
  },
  methods: {
    // 退出登陆
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>

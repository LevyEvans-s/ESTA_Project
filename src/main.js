import Vue from "vue";
import App from "./App.vue";
// 引入路由
import router from "./router";
// 按需引入 ElementUI 相应组件
import "./plugin/element";
//配置axios
import axios from "axios";
axios.defaults.baseURL = "http://121.40.100.87:4000";
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
// 使用多行模式进行进行引入，让代码阅读体验更加
import {
  Button,
  MessageBox,
  Form,
  FormItem,
  Input,
  Tabs,
  Loading,
  Checkbox,
  Message,
} from "element-ui";
// 插件注册使用 use
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Tabs);
Vue.use(Checkbox);
// js 组件直接注册到原型链上
Vue.prototype.$loading = Loading;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$message = Message;

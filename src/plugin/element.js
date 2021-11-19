import Vue from 'vue'
import { Button,MessageBox,Form, FormItem, Input,Tabs,Loading,Checkbox,Message} from 'element-ui'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Tabs)
Vue.use(Checkbox)
Vue.prototype.$loading=Loading
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$message=Message
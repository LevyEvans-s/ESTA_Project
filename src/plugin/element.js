import Vue from 'vue'
import { Button,MessageBox } from 'element-ui'
import { Form, FormItem, Input,Tabs } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Tabs)

Vue.prototype.$msgbox = MessageBox;
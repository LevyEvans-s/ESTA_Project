//封装axios
import axios from 'axios'

const service = axios.create({
    baseURL: '  http://localhost:4000',
    timeout:3000
})

//配置请求拦截器
service.interceptors.request.use(config => {
    //发起请求前的行为? Element-ui loading
    return config
}, err => {
    //请求错误
    Promise.reject(err)
})

//接口错误拦截
service.interceptors.response.use(response => {
    let res = response.data
    let path=location.hash
    if(res.status==0) return res.data
    else if (res.status == 10) { //status:10  msg:"NEED_LOGIN"
        if (path != '#/index') {
            window.location.href='/#/login'
        }
    }
}, err => {
    //响应失败
    return Promise.resolve(err.response)
})

export default service
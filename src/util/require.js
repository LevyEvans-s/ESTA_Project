//封装axios
import axios from 'axios'

const service = axios.create({
    baseURL: '  https://mock.mengxuegu.com/mock/6191ecedf126df7bfd5b7893/api',
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

//配置响应拦截器
service.interceptors.response.use(res => {
    //请求成功
    return res.data
}, err => {
    //响应失败
    return Promise.resolve(err.response)
})

export default service
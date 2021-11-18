//正式封装API,用于发送请求
import http from '../util/http'

let getUserInfoAPI=function(){
    return http.get('/api1')
}
//全部导出
export {
   getUserInfoAPI
}
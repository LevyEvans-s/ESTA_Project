import http from '../util/http'

//拉取用户信息
let getUserInfo=function(params){
    return http.get('/user',params)
}

//向后端登录接口发送post请求
let postUserLoginInfo = function (data) {
    return http.post('/login',data)
}
//向后端注册接口发送post请求
let postUserRegisterInfo = function (data) {
    return http.post('/register',data)
}

export {
    getUserInfo,
    postUserLoginInfo,
    postUserRegisterInfo
}
//封装http请求

//导入封装好的axios
import { post } from 'jquery'
import require from './require'

const http={
    get(url, params) {
        const config = {
            method: 'get',
            url:url
        }
        if (params) config.params = params
        return require(config)
    },
    post(url, data) {
        const config = {
            method: 'post',
            url: url,
        }
        if (data) config.data = data
        return require(config)
    }
}

export default http
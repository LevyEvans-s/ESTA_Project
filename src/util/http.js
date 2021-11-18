//封装http请求

//导入封装好的axios
import require from './require'

const http={
    get(url, params) {
        const config = {
            method: 'get',
            url:url
        }
        if (params) config.params = params
        console.log(config)
        return require(config)
    }

}

export default http
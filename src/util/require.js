//封装axios
import axios from 'axios'

const service = axios.create({
    baseURL: 'http://121.40.100.87:8083',
    timeout:3000
})

export default service
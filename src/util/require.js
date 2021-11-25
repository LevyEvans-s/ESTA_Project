//封装axios
import axios from 'axios'

const service = axios.create({
    baseURL: 'http://localhost:8083',
    timeout:3000
})

export default service
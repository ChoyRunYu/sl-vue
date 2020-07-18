let axios = require('axios')
import {Message} from 'element-ui'

//设置超时
let service = axios.create({ timeout: 60000 })

service.defaults.headers.post['Content-Type'] = 'application/json'

//请求拦截器
service.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        Message.error('请求超时')
        return Promise.reject(error)
    }
)
//响应拦截器
service.interceptors.response.use((data) => {
    if(data.status && data.status == 200){
        if(data.data.code == 200){
            return data;
        }else{
            Message.error(data.data.msg)
        }
    }else{
        Message.error('服务器出错')
    }
}, (err) => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400: err.message = '请求错误(400)'; break
            case 401: err.message = '未授权，请重新登录(401)'; break
            case 403: err.message = '拒绝访问(403)'; break
            case 404: err.message = '请求出错(404)'; break
            case 408: err.message = '请求超时(408)'; break
            case 500: err.message = '服务器出错(500)'; break
            case 501: err.message = '服务未实现(501)'; break
            case 502: err.message = '网络错误(502)'; break
            case 503: err.message = '服务不可用(503)'; break
            case 504: err.message = '网络超时(504)'; break
            case 505: err.message = 'HTTP版本不受支持(505)'; break
            default: err.message = `连接出错(${err.response.status})!`
        }
    } else {
        err.message = '连接服务器失败！'
    }
    Message.error(err.message)
    return Promise.reject(err)
})

export default {service}
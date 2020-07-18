import axios from './axios'
let instance = axios.service
export default {
    //封装get
    get(url, params) {
        return new Promise((resolve, reject) => {
            instance.get(url, {
                params: params
            }).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
            })
        })
    },
    //封装post
    post(url, params) {
        return new Promise((resolve, reject) => {
            instance.post(url, params)
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err.data)
                })
        })
    },
    //封装put
    put(url, params) {
        return new Promise((resolve, reject) => {
            instance.put(url, params)
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err.data)
                })
        })
    },
    //封装delete
    delete(url, params) {
        return new Promise((resolve, reject) => {
            instance.delete(url, params)
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err.data)
                })
        })
    }
}
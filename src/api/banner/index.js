import api from '../index'
import urls from './urls'

export default {
    //获取首页海报api调用方法
    getBannerIndex(){
        return api.get(urls.getBannerIndexUrl)
    }
}
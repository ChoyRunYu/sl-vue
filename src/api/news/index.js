import api from '../index'
import urls from './urls'

export default {
    //获取首页新闻资讯版块api方法
    getNewsIndex() {
        return api.get(urls.getNewsIndexUrl)
    },
    //获取新闻中心页面数据api方法
    getNewsPage(start) {
        return api.get(urls.getNewsPageUrl + start)
    },
    //获取一条新闻数据api方法
    getOneNew(id) {
        return api.get(urls.getOneNewUrl + id)
    }
}
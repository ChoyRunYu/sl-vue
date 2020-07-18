import api from '../index'
import urls from './urls'

export default {
    //获取footer版块信息api方法
    getFooterInfo() {
        return api.get(urls.getFooterInfoUrl)
    },
    //获取aboutus版块信息api方法
    getAboutusIndex() {
        return api.get(urls.getAboutusIndexUrl)
    },
    //获取魅力社联页面api方法
    getAboutusPage() {
        return api.get(urls.getAboutusPageUrl)
    }
}
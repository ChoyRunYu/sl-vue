import api from '../index'
import urls from './urls'

export default {
    //获取近期活动页面活动列表
    getActivityList(start) {
        return api.get(urls.getActivityListUrl + start)
    }
}
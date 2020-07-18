import api from '../index'
import urls from './urls'

export default {
    //服务中心页面服务列表api方法
    getServiceList() {
        return api.get(urls.getServiceListUrl)
    }
}
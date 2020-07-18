import urls from './urls'
import api from '../index'
export default {
    //获取缤纷社团页面接口
    getAssociationPage() {
        return api.get(urls.getAssociationPageUrl)
    },
    //获取一条社团详情信息方法
    getOneAssociation(id) {
        return api.get(urls.getOneAssociationUrl + id)
    }
}
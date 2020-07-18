import api from '../index'
import urls from './urls'

export default {
    //获取首页微视频版块api方法
    getVideoIndex() {
        return api.get(urls.getVideoIndexUrl)
    },
    //分页获取微视频页面视频列表数据api方法
    getVideoList(start) {
        return api.get(urls.getVideoListUrl + start)
    },
    //获取微视频页面一条视频信息api方法
    getOneVideo(id) {
        return api.get(urls.getOneVideoUrl + id)
    }
}
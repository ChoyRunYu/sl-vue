import Vue from 'vue'
import Router from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import getPageTitle from '@/utils/get-page-title'

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'index',
    component: () => import('@/views/index/index'),
    meta: { title: '首页' }
}, {
    path: '/aboutus',
    name: 'aboutus',
    component: () => import('@/views/aboutus/index'),
    meta: { title: '魅力社联' },
}, {
    path: '/videos',
    name: 'videos',
    component: () => import('@/views/videos/index'),
    meta: { title: '微视频' },
}, {
    path: '/video/:id',
    name: 'video',
    component: () => import('@/views/video/index'),
    meta: { title: '微视频' },
}, {
    path: '/news',
    name: 'news',
    component: () => import('@/views/news/index'),
    meta: { title: '新闻动态' }
}, {
    path: '/new/:id',
    name: 'new',
    component: () => import('@/views/new/index'),
    meta: { title: '新闻动态' }
}, {
    path: '/associations',
    name: 'associations',
    component: () => import('@/views/associations/index'),
    meta: { title: '多彩社团' }
}, {
    path: '/association/:id',
    name: 'association',
    component: () => import('@/views/association/index'),
    meta: { title: '多彩社团' }
}, {
    path: '/activities',
    name: 'activities',
    component: () => import('@/views/activities/index'),
    meta: { title: '近期活动' }
}, {
    path: '/service',
    name: 'service',
    component: () => import('@/views/service/index'),
    meta: { title: '服务中心' }
}, {
    path: '*',
    component: () => import('@/views/notfound/index'),
    meta: { title: '404 - 页面未找到' }
}]

let router = new Router({
    mode: 'history',
    base: '/sl/',
    linkExactActiveClass: 'nav-is-active',
    routes
})


//设置title
router.beforeEach((to, from, next) => {

    nprogress.start()
    document.title = getPageTitle(to.meta.title)
    next()
})
//返回上一页滚动位置
router.afterEach((to, from, next) => {
    nprogress.done()
    window.scrollTo(0, 0);
})


export default router
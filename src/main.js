import Vue from 'vue'
import App from './app.vue'
import router from './routers'
import 'babel-polyfill'
import 'element-ui/lib/theme-chalk/index.css'
import api from './api/install'
import store from './store'


window.Hls = require('hls.js')


import {
    Carousel,
    CarouselItem,
    Message,
    Pagination
} from 'element-ui'

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Pagination)
Vue.use(api)
// Vue.use(VideoPlayer)
// Vue.use(hls)

Vue.prototype.$message = Message;


window.vm = new Vue({
    el: '#app',
    router: router,
    store,
    render: h => h(App),
})



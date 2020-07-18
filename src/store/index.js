import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        footer: {
            name: '',   //网站名称
            address: '',   //社联办公室地址
            link1: '',     //友情链接1
            link1_desc: '', //友情链接1描述
            link2: '',     //友情链接2
            link2_desc: '', //友情链接2描述
            wechat_img: ''  //公众号二维码图片
        }
    },
    mutations: {
        setFooter(state, value) {
            state.footer = value
        },
    },
    getters: {
        footer: state => state.footer
    },
    //vuex持久化
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })]
})
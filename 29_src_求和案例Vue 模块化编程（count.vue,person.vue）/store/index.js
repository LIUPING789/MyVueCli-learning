
//该文件用于创建Vuex中最为核心的store对象，并将其注册到Vue实例中。

//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'

import countOptions from './count'
import personOptions from './person'

//应用Vuex 插件
Vue.use(Vuex)

//创建 并导出 store 对象
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})





//引入路由
import VueRouter from 'vue-router'

// 引入组件
import Home from '../components/Home.vue'
import About from '../components/About.vue'

//创建一个路由实例、前导出
export default new VueRouter({
    routes: [{
        path: '/about',
        component: About
    },
    {
        path: '/home',
        component: Home
    }]
});
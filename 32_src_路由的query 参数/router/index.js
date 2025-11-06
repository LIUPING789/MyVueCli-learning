
//引入路由
import VueRouter from 'vue-router'

// 引入组件
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'
import Message from '@/pages/Message.vue'
import Detail from '@/pages/Detail.vue'

//创建一个路由实例、前导出
//注意：一级路由需要'/'开头， 二级路由不需要'/'开头
export default new VueRouter({
    routes: [
        // 一级路由
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [ //通过children属性配置子路由
                // 二级路由
                {
                    path: 'news',//此处一定不要写 "/"： /news
                    component: News
                },
                {
                    path: 'message',//此处一定不要写 "/"
                    component: Message,
                    // 三级路由
                    children: [
                        {
                            path: 'detail',
                            component: Detail
                        }
                    ]
                }
            ]
        }]
});
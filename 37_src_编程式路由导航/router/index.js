
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
                            name: "detail",//命名路由
                            path: 'detail/:id/:title',//如果使用 params 接收参数，则需要占位符
                            component: Detail,
                            //props的第一种写法，值为对象，该对象中的所有：key-value 对都会作为 props 传入到组件中.
                            // props: {id: 1,title: 'hello'}

                            // 第二种写法，值为 true，会把当前路由的 params参数 作为 props 传入到组件中. 注意：query参数不会作为 props 传入到组件中.
                            //props: true 

                            //第三种写法，值为函数，返回一个对象，该对象中的所有：key-value 对都会作为 props 传入到组件中.
                            props(route) {
                                return { id: route.query.id, title: route.query.title }
                            }
                        }
                    ]
                }
            ]
        }]
});
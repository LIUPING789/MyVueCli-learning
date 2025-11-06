
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
const router = new VueRouter({
    routes: [
        // 一级路由
        {
            name: "about",
            path: '/about',
            component: About,
            meta: {
                title: '关于'
            }
        },
        {
            name: "home",
            path: '/home',
            component: Home,
            meta: {
                title: '主页'
            },
            children: [ //通过children属性配置子路由
                // 二级路由
                {
                    name: "news",
                    path: 'news',//此处一定不要写 "/"： /news
                    component: News,
                    meta: {
                        title: '新闻',
                        isAuth: true //是否需要登录才能访问该页面
                    },
                    beforeEnter(to, from, next) {
                        // 路由独享守卫
                        // 判断是否需要登录才能访问该页面
                        let token = "Kn31231ight"
                        console.log('路由独享守卫')
                        console.log("to", to)
                        console.log("from", from)
                        //判断是否需要拦截
                        if (to.meta.isAuth) {
                            if (token === "Knight") {
                                next()
                            } else {
                                alert("你没有权限访问该页面")
                            }
                        } else {
                            // 直接放行
                            next()
                        }
                    },
                },
                {
                    name: "message",
                    path: 'message',//此处一定不要写 "/"
                    component: Message,
                    meta: {
                        title: '消息',
                        isAuth: true //是否需要登录才能访问该页面
                    },
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


//全局前置守卫   路由跳转前执行
/**
router.beforeEach((to, from, next) => {
    let token = "Kn31231ight"
    console.log('全局----前置守卫')
    console.log("to", to)
    console.log("from", from)
    //判断是否需要拦截
    if (to.meta.isAuth) {
        if (token === "Knight") {
            next()
        } else {
            alert("你没有权限访问该页面")
        }
    } else {
        // 直接放行
        next()
    }
});
*/

//全局后置守卫   路由跳转后执行
/**
router.afterEach((to, from) => {
    console.log('全局----后置守卫')
    console.log("to", to)
    console.log("from", from)
    //设置页面标题
    document.title = to.meta.title || "我的系统"
});
*/

// 
export default router;
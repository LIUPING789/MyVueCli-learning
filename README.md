# vue_test

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Vue 笔记

### ref 属性

    1.被用来给元素或子组件注册引用信息（id的替代者）

    2.应用在html标签上获取的是真实DoM元素，应用在组件标签上是组件实例对象（vc）

    3.使用方式：
        打标识：<h1 ref="xxx">.....</h1>或<School ref="xxx"></School>
        获取：this.$refs.xxx

## 配置项 props

    功能：让组件接收外部传过来的数据
    （1）.传递数据：
            <Demo name="xxx"/>
    （2）.接收数据：
         第一种方式（只接收）：
        props:['name']

    第二种方式（限制类型）：
     props:{
        name:Nuniber
        }

    第三种方式（限制类型、限制必要性、指定默认值）：
        props:{
            name:{
            type:String，//类型
            required:true，//必要性
            default：'老王//默认值
            }
        }
        
    备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，
    若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中
    的数据。



## mixin（混入）
    功能：可以把说个组件共用的配置提取成一个混入对象
    使用方式：
    第一步定义混合，例如：
    data()(....),
    methods:....}


    第二步使用混入，例如：
    （1).全局混入：Vue.mixin（xxx）
    （2）.局部混入：mixins:[xxx']




## 插件
    功能：用于增强Vue
    本质：包含instal1方法的一个对象，instal1的第一个参数是vue，第二个以后的参数是插件使用者传递的数 据。
    定义插件：
    对象.install=function（Vue，options）{
1.添加全局过滤器
    Vue.filter（....)
    //2.添加全局指令
    Vue.directive(....)
    //3.配置全局混入（合）
    Vue.mixin(....)
    /4.添加实例方法
    Vue.prototype.$myMethod=function (){...}
    Vue.prototype.$myProperty=xxxx
    使用插件：Vue.use（）



## scoped样式
    作用：让样式在局部生效，防止冲突。
    写法：<style scoped>


### 总结TodoList案例

1.组件化编码流程：

    （1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。

    （2）.实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一
    些组件在用：

        1）.一个组件在用：放在组件自身即可。
        2).一些组件在用：放在他们共同的父组件上（状态提升）。

（3）.实现交互：从绑定事件开始。

2.props适用于：

    （1).父组件==>子组件通信
    （2）.子组件==>父组件通信（要求父先给子一个函数）

3.使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props
    是不可以修改的！

4.props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推
    荐这样做。1



### webStorage

    1.存储内容大小一般支持5MB左右（不同浏览器可能还不一样）

    2.浏览器端通过Window.sessionStorage和Window.localStorage属性来实现本地存储机制。

    3.相关API:
    1.xxxxxStorage.setItem(*key','value');
    该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。
    2.xxxxxStorage.getItem（'person');
    该方法接受一个键名作为参数，返回键名对应的值。
    3.xxxxStorage.removeItem('key');
    该方法接受一个键名作为参数，并把该键名从存储中删除。

    4.xxxxxStorage.clear()
    该方法会清空存储中的所有数据。
    
    4.备注：
    1.SessionStorage存储的内容会随着浏览器窗口关闭而消失。
    2.LocalStorage存储的内容，需要手动清除才会消失。
    3.xxxxStorage·getItem（xxx）如果xxx对应的value获取不到，那么gettem的返回值是null。
    4.JsoN.parse（null）的结果依然是null。

### 组件的自定义事件

    1.一种组件间通信的方式，适用于 子组件 ==> 父组件通信
    2.使用场景： A是父组件，B是子组件，B想给A传数据，那么要在A中给B绑定自定义事件（事件的回调在A中）

    3.绑定自定义事件
        1.第一种方式，在父组件中：
         <Demo @atguigu="test"/> 或者 <Demo v-on:atguigu="test"/>

     2.第二方式，在父组件中：

    ```
     <Demo ref="demo">
     ....

     mounted(){
        this.$refs.demo.$on('atguigu',this.test)
     }
    ``` 
    3.若想让自定义事件中只能触发一个，可以使用 `once`修饰符： 或 $once() 方法：


    4.触发自定义事件：this.$emit('atguigu',data)

    5.解绑自定义事件：this.$off('atguigu') 或 this.$refs.demo.$off('atguigu')

    6.组件上也可以绑定DOM事件，需要使用native修饰符：@click.native="test"

    7.注意：通过 this.$refs.demo.$on('atguigu',this.test) 绑定自定义事件时，this.test 必须是箭头函数，否则 this 指向会出错。



    ### 消息订阅与发布（pubsub）
    1、一种组件间通信的方式，适用于任意组件间通信。
    
    2、使用步骤：
        1.安装pubsub: npm i pubsub-js
        2.引入 import pubsub from 'pubsub-js'

    3、接收数据： A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身

            ...

            methods(){
                demo(data){.....}
            }
            .....


            mounted(){
                this.pid = pubsub.subscribe('xxx',this.demo) // 订阅消息
            }

    4、提供数据 pubsub.publish('xxx',data)
    
    5、页面消失后：最好在 Vue 生命周期的 'beforeDestroy'钩子中，用pubsub.unsubscribe(pid) 去取消订阅





    ### nextTick
    1.语法：this.$nextTick(callback)
    2.作用：在下一次DOM更新结束后执行其指定的回调。
    3.什么时间用：当改变数据后，要基于更新后的DOM进行操作时，用到nextTick。
    4.注意：nextTick的回调函数中不要包含异步操作，否则会导致下一次DOM更新时，回调函数还未执行。



    ### Vue封装的过度与动画

    1.作用：在插入、更新或移动DOM元素时，在合适的时候给元素添加样式类名。

    2.使用：
        1.过度：v-enter-active、v-enter、v-enter-to、v-leave-active、v-leave、v-leave-to
        2.动画：v-move-transition、v-move-enter、v-move-leave、v-move-enter-active、v-move-leave-active、v-move-enter-to、v-move-leave-to

    3、写法：

  3.写法：
    1.准备好样式：
        ·元素进入的样式：
        1.v-enter:进入的起点
        2.v-enter-active：进入过程中
        3.v-enter-to：进入的终点

        ·元素离开的样式：
        1.v-leave：离开的起点
        2.v-leave-active：离开过程中
        3.v-leave-to：离开的终点

    2.使用<transition>组件包裹需要过度的元素，并给transition组件添加name属性，值为过度的名称。


    ### Vue 脚手架配制代码 

        #### 方式一
             在vue.config.js中配置：
             module.exports = {     
              ...,
              devServer:{
                proxy:"http://localhost:8080"
              }
            }
        说明：
        1.优点：配置简单，请求资源时直接发给前端（8080）即可。
        2.缺点：不能配置多个代理，不能灵活的控制请求是否走代理
        3.工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器（优先匹配前端资源）


    #### 方式二：    


      devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',// 代理地址
        pathRewrite: {},//重写路径，用通配符如：{'^/api': ''}
        ws: true, // 用于支持websocket
        changeOrigin: true,
      },
       '/api2': {
        target: 'http://localhost:5000',// 代理地址
        pathRewrite: {},//重写路径，用通配符如：{'^/api2': ''}
        ws: true, // 用于支持websocket
        changeOrigin: true,
      }
    }
  }

  说明：
    1.优点：可以配置多个代理，且可以灵活的控制请求是否走代理
    2.缺点：配置略微繁琐，请求资源时必须加前缀。




### 插槽
   1.作用：让父组件可以身子组件指定位置插入html结构，也是一种组件间通信的方式。  适用于 父组件 ==> 子组件通信。
   2.分类：默认插槽、具名插槽、作用域插槽。
   3.使用方式：
        1.默认插槽：
            父组件中：
               <Category><div>默认插槽</div></Category>
            子组件中：
               <template>
                  <div>
                     <slot></slot>
                  </div>
               </template>
        2.具名插槽：
            父组件中：
               <Category>
                  <template slot="header">
                     <h1>头部</h1>
                  </template>
                  <template slot="content">
                     <div>内容</div>
                  </template>
               </Category>
            子组件中：
               <template>
                  <div>
                     <slot name="header"></slot>
                     <slot name="content"></slot>
                  </div>
               </template>
        3.作用域插槽：
            父组件中：
               <Category :data="xxx">
                  <template slot-scope="scope">
                     <div>{{scope.data}}</div>
                  </template>
               </Category>
            子组件中：
               <template>
                  <div>
                     <slot :data="data"></slot>
                  </div>
               </template>  


 ### Vuex    

    1.概念

    在Vue中实现集中式状态（数据） 管理一个Vue的插件，对vue应用中多个组的共享状态进行集中式的管理（读、写） 也是一种组件间通信的方式，且适于任意组件间通信。

    2.何时使用？

    多个组件需要共享数据时


    3.搭建Vuex环境

    1.创建文件：src/store/index.js

    ```
        
        //该文件用于创建Vuex中最为核心的store对象，并将其注册到Vue实例中。

        //引入Vue核心库
        import Vue from 'vue'
        //引入Vuex
        import Vuex from 'vuex'

        //应用Vuex 插件
        Vue.use(Vuex)

        //准备 actions、mutations、state 三个对象

        // actions 用于响应组件中的动作：处理异步操作，如网络请求、数据存储等
        const actions = {}

        // 准备mutations  -----用于操作数据
        const mutations = {}

        // 准备state  -----用于存储数据
        const state = {}


        //创建 并导出 store 对象
        export default new Vuex.Store({
            actions,
            mutations,
            state
        })

    ```

   3.组件中读取vuex中的数据：$store.state.xxx
   
   4.组件中修改vuex中的数据：$store.dispatch('actions中的方法名',data) 或 $store.commit('mutations中的方法名',data)



### Vuex 中的getters 使用

    1.概念：Vuex中的getters是对state的计算结果，类似于计算属性。

    2.在 store.js 中追加 getters 配制：

    ```
        // getters 用于获取 state 的计算结果
        const getters = {
            // 计算属性
            reversedMessage: state => state.message.split('').reverse().join('')
        }

        // 创建 并导出 store 对象
        export default new Vuex.Store({
            actions,
            mutations,
            state,
            getters
        })
    ```

    3.在组件中读取 getters 中的数据：this.$store.getters.xxx


    ### Vue 路由

    1.理解：一个路由(route)就是一组映射关系（key-value），多个路由需要于路由器（router）进行管理 

    2.前端路由：key 是路径，value 是组件。


    ### 1、基本使用

     1.安装：npm install vue-router

     2.应用插件：Vue.use(VueRouter)

     3.编写路由配制项：

     ```
        
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

     ```


4.实现切换（active-class 可以实现路由高亮）样式：
    ```
  
     <router-link class="list-group-item" active-class="active" to="/home"
            >Home</router-link

   ```


5.指定展示位置 
```
<router-view></router-view>
```

### 2.几个注意点
    1.路由组件通常存放在pages目录下，一般组件通常放在components目录下。
    
    2.通过切换，“隐藏”了的路由组件，默认是会被销毁的，需要的时候再去挂载。
    
    每个组件都有自己的$route属性，里需存储了自己的路由信息。
    
    4.整个应用只有一个router,可以通过this.$router访问。

  ### 3.多级路由 

  1.配制路由规则，使用children属性

    ```
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

    ```


 ### 4、路由的query参数   

 1.传递query参数：

    ```
  <!-- 跳转路由并携带query参数，to的字符串写法  -->

        <router-link
          :to="`/home/message/detail?id=${item.id}&title=${item.title}`"
          >跳转</router-link>


   
        <!-- 跳转路由并携带query参数，to的对象写法  -->
        <router-link
          :to="{
            path: '/home/message/detail',
            query: { id: item.id, title: item.title },
          }"
          >跳转</router-link>       

    ```
  2.接收query参数

  ```
    // 接收query参数
    $route.query.id // 接收id参数
    $route.query.title // 接收title参数
  ```  
   

   ### 5、命名路由

        1.作用：可以简化路由的书写，提高可读性。

        2.如何使用：

            第一步：在路由配制项中，给路由添加name属性：

            ```
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
                            path: 'detail',
                            component: Detail
                        }
                    ]
                }
            ]
        }
            ```

         第二步：简第跳转

         ```
        <router-link
          :to="{
            name: 'detail',//命名路由
            query: { id: item.id, title: item.title },
          }"
          >{{ item.title }}</router-link>

         ```



#### 6.路由的params参数

        1.配制路由，声明params参数：

        ```

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
                            component: Detail
                        }
                    ]
                }
            ]
        }
        ```

        2.传递params参数：

        ```
        <router-link
          :to="{
            name: 'detail',//命名路由
            params: { id: item.id, title: item.title },
          }"
          >{{ item.title }}</router-link>
        ```

        3.接收params参数：

        ```
        // 接收params参数
        $route.params.id // 接收id参数
        $route.params.title // 接收title参数
        ```
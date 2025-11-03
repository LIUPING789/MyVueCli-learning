// 定义插件
export default {
    install(Vue) {
        console.log('plugins installed')
        // 全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 5)
        })

        //全局指令
        Vue.directive('fbind', {

            bind(element, binding,) {
                console.log(element, binding)
            },
            inserted(element, binding) {
                console.log(element, binding)
            },
            update(element, binding) {
                console.log(element, binding)
            },
            componentUpdated(element, binding) {
                console.log(element, binding)
            },
            unbind(element, binding) {
                console.log(element, binding)
            }
        })
    }
}
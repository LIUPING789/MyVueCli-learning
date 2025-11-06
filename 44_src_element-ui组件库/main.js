//引入Vue
import Vue from 'vue'
//引入App组件
import App from './App.vue'
// //引入ElementUI组件库
// import ElementUI from 'element-ui';
// //引入ElementUI 全部样式
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入ElementUI组件
import { Button, Row, DatePicker } from 'element-ui';

//关闭Vue的生产提示
Vue.config.productionTip = false

//应用ElementUI
// Vue.use(ElementUI);

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

//创建Vue实例并渲染App组件
new Vue({
    el: '#app',
    render: h => h(App),
})
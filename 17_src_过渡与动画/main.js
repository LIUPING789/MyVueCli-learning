
//引入Vue
import Vue from "vue";

//引入组件
import App from "./App.vue";


//关闭生产模式下给出的提示
Vue.config.productionTip = false;

//创建Vue实例
new Vue({
  el: "#app",
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;   // 注册全局事件总线
  }
})
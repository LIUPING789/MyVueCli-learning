
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
    //安装全局事件总线
    Vue.prototype.$bus = this;
  },
})
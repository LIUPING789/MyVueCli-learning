
//引入Vue
import Vue from "vue";

//引入store
import store from "./store";

//引入组件
import App from "./App.vue";
//引入插件 
import vueResource from "vue-resource";

//关闭生产模式下给出的提示
Vue.config.productionTip = false;

//应用插件
Vue.use(vueResource);

//创建Vue实例
new Vue({
  el: "#app",
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;   // 注册全局事件总线
  }
})
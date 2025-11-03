
//引入Vue
import Vue from "vue";

//引入组件
import App from "./App.vue";

//引入插件
import plugins from "./plugins";

//关闭生产模式下给出的提示
Vue.config.productionTip = false;

//应用插件
Vue.use(plugins);
//创建Vue实例
new Vue({
  el: "#app",
  render: h => h(App)
})
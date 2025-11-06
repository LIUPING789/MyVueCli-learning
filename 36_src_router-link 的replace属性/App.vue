<template>
  <div>
    <div class="row">
      <Banner></Banner>
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html 中我们使用a 标签实现页面跳转 -->
          <!--            
          <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> 
          -->

          <!-- Vue Router 中使用router-link 实现页面跳转   -->
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/about"
            >About</router-link
          >
          <router-link
            replace 
            class="list-group-item"
            active-class="active"
            to="/home"
            >Home</router-link
          >
        </div>
      </div>

      <div class="col-xs-6">
        <div class="panel">
          <!-- 指定路由组件，渲染对应路由页面 -->
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  components: {
    Banner,
  },
};
</script>

<style>
</style>
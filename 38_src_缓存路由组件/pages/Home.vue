<template>
  <div>
    <h2>Home组件中的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <!--  keep-alive 组件可以缓存组件，当切换路由时，不会重新渲染组件，提高性能  News:组件名-->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeDestroy() {
    console.log("Home页面销毁前执行");
  },
  mounted() {
    console.log("Home页面挂载完成了");
  },
};
</script>

<style>
</style>
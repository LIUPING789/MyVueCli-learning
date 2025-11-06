<template>
  <h2>我是About页面</h2>
</template>

<script>
export default {
  name: "About",
  beforeDestroy() {
    console.log("About页面销毁前执行");
  },
  mounted() {
    console.log("About页面挂载完成了");
  },

  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("About页面-beforeRouteEnter");

    let token = "Kn31231ight";
    console.log("路由独享守卫");
    console.log("to", to);
    console.log("from", from);
    //判断是否需要拦截
    if (to.meta.isAuth) {
      if (token === "Knight") {
        next();
      } else {
        alert("你没有权限访问该页面");
      }
    } else {
      // 直接放行
      next();
    }
  },

  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log("About页面-beforeRouteLeave");
    next();
  },
};
</script>

<style>
</style>
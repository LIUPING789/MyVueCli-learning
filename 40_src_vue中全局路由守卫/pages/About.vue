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
};
</script>

<style>
</style>
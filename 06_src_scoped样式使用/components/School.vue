<template>
  <div class="demo">
    <h2>学生的姓名：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>
<!-- 组件交互逻辑 -->
<script>
//引入一个mixin.js,(混入),这里的mixin.js是上面定义的混入对象
export default {
  name: "School",
  data() {
    return {
      name: "湖南大学",
      address: "湖南长沙",
    };
  },
};
</script>

<style lang="less">
.demo {
  background-color: red;
}
</style>
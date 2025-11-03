<template>
  <div>
    <h2 @click="showName">学生的姓名：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>
<!-- 组件交互逻辑 -->
<script>
//引入一个mixin.js,(混入),这里的mixin.js是上面定义的混入对象
import { mixin } from "../mixin.js";
export default {
  name: "School",
  data() {
    return {
      name: "湖南大学",
      address: "湖南长沙",
    };
  },
  //混入一个mixin.js
  mixins: [mixin],
};
</script>

<style>
</style>
<template>
  <div>
    <h1 v-text="msg"></h1>
    <h2 @click="showName">学生的姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>
<!-- 组件交互逻辑 -->
<script>
import { mixin } from "../mixin.js";

export default {
  name: "Student",
  data() {
    return {
      msg: "我是一个Vue学生",
      name: "张三",
      sex: "男",
    };
  },
  mixins: [mixin],
};
</script>

<style>
</style>
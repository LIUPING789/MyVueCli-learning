<template>
  <div class="demo">
    <!-- 组件的结构 -->
    <h2>学生姓名：{{ schoolName }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
// 组件交互相关的代码
export default {
  name: "Student",
  data() {
    return {
      studentName: "Knight",
      age: 18,
    };
  },
};
</script>

<style>
/* 组件的样式 */

.demo {
  background-color: red;
}
</style>
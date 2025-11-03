<template>
  <!-- 这里必须有一个根元素 -->
  <div class="app">
    <h1>{{ msg }}</h1>
    <School></School>
    <hr />
    <Student></Student>
  </div>
</template>

<script>
//引用组件
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "学习Vue！",
    };
  },

  //注册组件
  components: {
    Student,
    School,
  },
};
</script>

<style>
.app {
  background-color: blue;
}
</style>
<template>
  <!-- 这里必须有一个根元素 -->
  <div>
    <Student />
    <hr />
    <School />
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
</style>
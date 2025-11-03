<template>
  <!-- 这里必须有一个根元素 -->
  <div>
    <Student ref="sch" name="李四" sex="男" :age="18" />
    <hr />
    <Student ref="sch" name="王五" sex="女" age="28" />
    <hr />
    <Student ref="sch" name="赵六" sex="男" age="24" />
  </div>
</template>

<script>
//引用组件
import Student from "./components/Student.vue";
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
  },
};
</script>

<style>
</style>
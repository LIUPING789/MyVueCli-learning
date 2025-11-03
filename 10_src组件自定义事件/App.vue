<template>
  <!-- 这里必须有一个根元素 -->
  <div class="app">
    <h1>{{ msg }}</h1>
    <!-- 通过父组件给子组件会传递类型的props实现： 子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <hr />
    <!-- 通过子组件绑定一个自定义事件实现： 父给子传递数据 （第一种写法：使用 @或v-on + 事件名）-->
    <!-- <Student v-on:atguigu="getStudentName" /> -->

    <!-- 通过子组件绑定一个自定义事件实现： 父给子传递数据 （第一种写法：ref）-->
    <Student ref="student" />
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
  methods: {
    getSchoolName(value) {
      console.log("学校名称", value);
    },
    getStudentName(value) {
      console.log("学生名称", value);
    },
  },
  // 挂载完成后执行
  mounted() {
    this.$refs.student.$on("atguigu", this.getStudentName); // 绑定自定义事件
    this.$refs.student.$once("atguigu", this.getStudentName); // 绑定自定义事件,只执行一次
  },
};
</script>

<style>
.app {
  background-color: blue;
}
</style>
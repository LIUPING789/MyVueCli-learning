<template>
  <!-- 这里必须有一个根元素 -->
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showElement" ref="btn">点我输出上方的DOM元素</button>
    <School ref="sch" />
  </div>
</template>

<script>
//引用组件
import School from "./components/School.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "学习Vue！",
    };
  },

  methods: {
    showElement() {
      console.log(this.$refs.title); //真实DOM元素
      console.log(this.$refs.btn); //真实DOM元素
      console.log(this.$refs.sch); //School组件的实例对象 (VC)
    },
  },
  //注册组件
  components: {
    School,
  },
};
</script>

<style>
</style>
<template>
  <div class="student">
    <h1 v-text="msg"></h1>
    <h2>学生的姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">给父组件传值</button>

    <button @click="unbind">解绑事件</button>
  </div>
</template>
<!-- 组件交互逻辑 -->
<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是一个Vue学生",
      name: "张三",
      sex: "男",
    };
  },
  methods: {
    sendStudentName() {
      // 触发父组件的事件，并传值
      this.$emit("atguigu", this.name);
    },

    unbind() {
      // 解绑父组件的事件监听
      this.$off("atguigu"); //解绑一个事件
      // this.$off(); //解绑所有事件
    },
  },
};
</script>

<style scope>
.student {
  background-color: aquamarine;
  padding: 5px;
  margin-top: 10px;
}
</style>
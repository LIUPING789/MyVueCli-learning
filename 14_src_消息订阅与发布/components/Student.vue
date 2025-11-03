<template>
  <div class="student">
    <h1 v-text="msg"></h1>
    <h2>学生的姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名字给School</button>

    <button @click="unbind">解绑事件</button>
  </div>
</template>
<!-- 组件交互逻辑 -->
<script>
//引入消息订阅库
import pubsub from "pubsub-js";

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
      console.log("sendStudentName---点击事件触发");
      // this.$bus.$emit("atguigu", this.name);
      //发布消息
      pubsub.publish("hello", this.name); //使用pubsub-js库
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
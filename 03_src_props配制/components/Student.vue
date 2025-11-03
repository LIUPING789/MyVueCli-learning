<template>
  <div>
    <h1 v-text="msg"></h1>
    <h2>学生的姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age + 1 }}</h2>
  </div>
</template>
<!-- 组件交互逻辑 -->
<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是一个Vue学生",
    };
  },
  // 第一种方式：通过props:接收父组件传递的属性
  //props: ["name", "sex", "age"], //简单声明接收

  //第二种方式：接收的同时对数据进行类型限制

  /**
  props: {
    name: String,
    sex: String,
  },
  */

  //第三种方式：接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String, //数据类型
      required: true, //必填项
      default: "未知", //默认值
    },
    age: {
      type: Number, //数据类型
      required: true, //必填项
      default: 0, //默认值
    },
    sex: {
      //性别
      type: String, //数据类型
      required: true, //必填项
      default: "未知", //默认值
    },
  },
};
</script>

<style>
</style>
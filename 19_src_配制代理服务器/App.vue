<template>
  <!-- 这里必须有一个根元素 -->
  <div>
    <button @click="getStudentInfo">获取学生信息</button>
  </div>
</template>

<script>
import axios from "axios";

//引入事件总线
export default {
  name: "App",
  methods: {
    getStudentInfo() {
      // 发送请求
      axios.get("http://localhost:8080/test.txt").then(
        (response) => {
          console.log("请求成功", response.data);
        },
        (error) => {
          console.log("请求失败", error);
        }
      );
    },
  },
};
</script>

<style>
</style>
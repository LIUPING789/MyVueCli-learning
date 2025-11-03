<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition 
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__swing"
    leave-active-class="animate__fadeOut">
      <h1 v-show="isShow" appear>你好啊！</h1>
    </transition>
  </div>
</template>

<script>
//引入样式
import "animate.css";
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: green;
}
</style>
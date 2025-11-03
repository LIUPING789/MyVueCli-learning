<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello">
      <h1 v-show="isShow" appear>你好啊！</h1>
    </transition>
  </div>
</template>

<script>
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
  background-color: red;
  transform: 0.5s linear;
}
/*  */
.hello-enter-active {
  animation: atguitu 0.5s linear;
}

.hello-leave-active {
  animation: aiguitu 0.5s linear reverse;
}

/* 自定义动画 */
@keyframes aiguitu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
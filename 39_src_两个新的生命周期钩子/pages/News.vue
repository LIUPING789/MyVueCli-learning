<template>
  <div>
    <ul>
      <li :style="{ opacity }">欢迎学习Vue</li>
      <li>news001 <input type="text" /></li>
      <li>news002 <input type="text" /></li>
      <li>news003 <input type="text" /></li>
      <li>news004 <input type="text" /></li>
      <li>news005 <input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",

  data() {
    return {
      opacity: 1,
    };
  },

  // beforeDestroy() {
  //   clearInterval();
  // },
  // mounted() {
  //   this.timer = setInterval(() => {
  //     this.opacity -= 0.1;
  //     if (this.opacity <= 0) this.opacity = 1;
  //   }, 16);
  // },
  activated() {
    //激活时执行

    this.timer = setInterval(() => {
      this.opacity -= 0.1;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    //销毁时执行
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>
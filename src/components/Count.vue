<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <!-- x-model绑定当前的和，v-model绑定用户选择的数值 -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="butPlus">+</button>
    <button @click="butReduce">-</button>
    <button @click="butOddPlus">当前求和为奇数再加</button>
    <button @click="butWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",

  data() {
    return {
      n: 1, //用户选择的数值
      sum: 0, //当前的和
    };
  },
  methods: {
    butPlus() {
      console.log("----------plus----------");
      this.sum += this.n;
    },
    butReduce() {
      console.log("----------reduce----------");
      this.sum -= this.n;
    },
    butOddPlus() {
      console.log("----------oddPlus----------");
      if (this.sum % 2 === 1) {
        this.sum += this.n;
      }
    },
    butWait() {
      console.log("----------wait----------");
      setTimeout(() => {
        this.sum += this.n;
      }, 1000);
    },
  },
};
</script>

<style>
button {
  margin: 10px;
}
</style>
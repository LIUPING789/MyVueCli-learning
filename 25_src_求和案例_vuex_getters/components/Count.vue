<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    <!-- 使用getters获取当前的和，并放大10倍 -->
    <h3>当前求和放大10倍为：{{ $store.getters.bigSum }}</h3>
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
    };
  },
  methods: {
    butPlus() {
      console.log("----------plus----------");
      this.$store.dispatch("plus", this.n);
      //如果没有业务逻辑， 可以直接使用this.$store.commit("plus", this.n);
      //注意：使用commit提交mutation时，需要在mutation中定义参数，否则会报错
    },
    butReduce() {
      console.log("----------reduce----------");
      this.$store.dispatch("reduce", this.n);
      //如果没有业务逻辑， 可以直接使用this.$store.commit("plus", this.n);
      //注意：使用commit提交mutation时，需要在mutation中定义参数，否则会报错
    },
    butOddPlus() {
      console.log("----------oddPlus----------");
      //这里业务有逻辑，所以使用dispatch
      this.$store.dispatch("oddPlus", this.n);
    },
    butWait() {
      console.log("----------wait----------");
      //这里业务有逻辑，所以使用dispatch
      setTimeout(() => {
        this.$store.dispatch("wait", this.n);
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
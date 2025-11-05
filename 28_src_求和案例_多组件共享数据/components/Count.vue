<template>
  <div>
    <!-- 可以直接用简写模板 -->
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }},学习:{{ subject }}</h3>

    <h3 style="color: red">Person组件总人数是：{{ personList.length }}</h3>
    <!-- x-model绑定当前的和，v-model绑定用户选择的数值 -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="butPlus(n)">+</button>
    <button @click="butReduce(n)">-</button>
    <button @click="butOddPlus">当前求和为奇数再加</button>
    <button @click="butWait">等一等再加</button>
  </div>
</template>

<script>
//导入vuex中的mapState、mapGetters方法
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import Person from "./Person.vue";

export default {
  name: "Count",

  data() {
    return {
      n: 1, //用户选择的数值
    };
  },

  //使用计算属性，vuex 中 store中的数据
  computed: {
    //借助mapState生成计算属性，从state中获取数据 （数组写法）
    ...mapState(["sum", "school", "subject", "personList"]),
    //借助mapGetters生成计算属性，从getters中获取数据 （数组写法）
    ...mapGetters(["bigSum"]),
  },

  methods: {
    //程序员自己写的方法
    //借助mapMutations生成方法，从mutations中获取方法 （对象写法）
    ...mapMutations({
      butPlus: "PLUS",
      butReduce: "REDUCE",
    }),

    //使用mapActions生成方法，方法中会调用dispatch去联系，actions中获取方法

    //借助mapActions生成方法，从actions中获取方法 （对象写法）
    ...mapActions({
      butOddPlus: "oddPlus",
      butWait: "wait",
    }),
  },
};
</script>

<style>
button {
  margin: 10px;
}
</style>
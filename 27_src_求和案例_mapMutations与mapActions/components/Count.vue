<template>
  <div>
    <!-- 可以直接用简写模板 -->
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }},学习:{{ subject }}</h3>
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

export default {
  name: "Count",

  data() {
    return {
      n: 1, //用户选择的数值
    };
  },

  //使用计算属性，vuex 中 store中的数据
  computed: {
    //靠程序员自己亲自去写的计算属性

    //借助mapState生成计算属性，从state中获取数据 （对象写法）
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),

    //借助mapState生成计算属性，从state中获取数据 （数组写法）
    ...mapState(["sum", "school", "subject"]),

    //计算属性，依赖于state中的sum

    //借助mapGetters生成计算属性，从getters中获取数据 （对象写法）
    // ...mapGetters({ bigSum: "bigSum" }),

    //借助mapGetters生成计算属性，从getters中获取数据 （数组写法）
    ...mapGetters(["bigSum"]),
  },

  methods: {
    //程序员自己写的方法
    // butPlus() {
    //   console.log("----------plus----------");
    //   // this.$store.dispatch("plus", this.n);
    //   //如果没有业务逻辑， 可以直接使用this.$store.commit("plus", this.n);
    //   this.$store.commit("PLUS", this.n);
    //   //如果没有业务逻辑， 可以直接使用this.$store.commit("PLUS", this.n);
    //   //注意：使用commit提交mutation时，需要在mutation中定义参数，否则会报错
    // },
    // butReduce() {
    //   console.log("----------reduce----------");
    //   // this.$store.dispatch("reduce", this.n);

    //   //如果没有业务逻辑， 可以直接使用this.$store.commit("reduce", this.n);
    //   this.$store.commit("REDUCE", this.n);

    //   //如果没有业务逻辑， 可以直接使用this.$store.commit("plus", this.n);
    //   //注意：使用commit提交mutation时，需要在mutation中定义参数，否则会报错
    // },
    //使用mapMutations生成方法，方法中会调用commit去联系，mutations中获取方法

    //借助mapMutations生成方法，从mutations中获取方法 （对象写法）
    ...mapMutations({
      butPlus: "PLUS",
      butReduce: "REDUCE",
    }),

    //借助mapMutations生成方法，从mutations中获取方法 （数组写法）
    // ...mapMutations(["butPlus", "butReduce"]),

    // butOddPlus() {
    //   console.log("----------oddPlus----------");
    //   //这里业务有逻辑，所以使用dispatch
    //   this.$store.dispatch("oddPlus", this.n);
    // },

    // butWait() {
    //   console.log("----------wait----------");
    //   //这里业务有逻辑，所以使用dispatch
    //   setTimeout(() => {
    //     this.$store.dispatch("wait", this.n);
    //   }, 1000);
    // },

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
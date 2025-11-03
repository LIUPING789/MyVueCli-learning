<template>
  <!-- 这里必须有一个根元素 -->
  <div>
    <Test />
    <Test2 />
    <Test3 />
  </div>
</template>

<script>
//引用组件
import Test from "./components/Test.vue";
import Test2 from "./components/Test2.vue";
import Test3 from "./components/Test3.vue";

export default {
  name: "App",

  //注册组件
  components: {
    Test,
    Test2,
    Test3,
  },
};
</script>

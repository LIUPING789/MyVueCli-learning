<template>
  <!-- 这里必须有一个根元素 -->
  <div>
    <Count></Count>
  </div>
</template>

<script>
import Count from "@/components/Count";

//引入事件总线
export default {
  name: "App",
  components: {
    Count,
  },
};
</script>


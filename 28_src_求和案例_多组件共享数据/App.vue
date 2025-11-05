<template>
  <!-- 这里必须有一个根元素 -->
  <div>
    <Count></Count>
    <hr />
    <Person></Person>
  </div>
</template>

<script>
import Count from "@/components/Count";
import Person from "@/components/Person";

//引入事件总线
export default {
  name: "App",
  components: {
    Count,
    Person,
  },
};
</script>


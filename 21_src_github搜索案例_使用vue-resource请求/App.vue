<template>
  <!-- 这里必须有一个根元素 -->
  <div class="container">
    <Search />
    <List />
  </div>
</template>

<script>
import Search from "@/components/Search";
import List from "@/components/List";

//引入事件总线
export default {
  name: "App",
  components: {
    Search,
    List,
  },
};
</script>

<style>
</style>
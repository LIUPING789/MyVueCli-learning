<template>
  <div>
    <!-- 这里是使用query参数接收方式 -->
    <!-- <h2>消息的编号:{{ this.$route.query.id }}</h2>
    <h2>消息的标题:{{ this.$route.query.title }}</h2> -->

    <!-- 这里是使用params参数接收方式 -->`
    <h2>消息的编号:{{ this.$route.params.id }}</h2>
    <h2>消息的标题:{{ this.$route.params.title }}</h2>
  </div>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log("mounted", this);
  },
};
</script>

<style>
</style>
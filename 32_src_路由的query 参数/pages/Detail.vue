<template>
  <div>
    <h2>消息的编号:{{ this.$route.query.id }}</h2>
    <h2>消息的标题:{{ this.$route.query.title }}</h2>
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
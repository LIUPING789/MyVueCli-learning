<template>
  <div>
    <h1>学校名称：{{ schoolName }}</h1>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      schoolName: "北京大学",
      address: "北京市海淀区西二旗",
    };
  },
};
</script>

<style>
</style>
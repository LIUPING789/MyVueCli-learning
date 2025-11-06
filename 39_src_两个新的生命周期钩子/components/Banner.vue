<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back() {
      console.log("back", this.$router);
      this.$router.back();
    },
    forward() {
      console.log("forward");
      this.$router.forward();
    },
  },
};
</script>

<style>
</style>
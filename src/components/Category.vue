<template>
  <div class="category">
    <h3>{{ title }} 分类</h3>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],

  // 定义数据
  data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
};
</script>

<style>
.category {
  background-color: aqua;
  width: 200px;
  height: 300px;
}
</style>
<template>
  <div class="category">
    <h3>{{ title }} 分类</h3>
    <!-- <ul>
      <li v-for="item in listData" :key="item.id">{{ item }}</li>
    </ul> -->
    <!--  定义一个插槽 （挖个坑，等组件的命名用者进行填充）lot  -->
    <slot name="center">插槽1</slot>
    <slot name="footer">插槽2</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
};
</script>

<style>
.category {
  background-color: aqua;
  width: 200px;
  height: 300px;
}
</style>
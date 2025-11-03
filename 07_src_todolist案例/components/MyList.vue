
<!-- List.vue 组件 -->
<template>
  <ul class="todo-main">
    <MyItem
      v-for="todoObj in todos"
      :key="todoObj.id"
      :todo="todoObj"
      :toggleTodo="toggleTodo"
      :deleteTodo="deleteTodo"
    />
  </ul>
</template>

<script>
// 导入 MyItem 组件
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  //接收父组件传递的 todos 数组
  props: ["todos", "toggleTodo", "deleteTodo"],
  components: {
    MyItem,
  },
};
</script>
<style scoped  >
/*List.vue 组件样式*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
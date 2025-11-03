
<!-- Header.vue 组件 -->
<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      @keyup.enter="addTodoObj"
      v-model="title"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  //接收父组件传过来的数据
  props: ["addTodo"],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTodoObj() {
      console.log("11111111111111111111");
      if (!this.title.trim()) return alert("请输入任务名称");
      //将用户输入的类型包装成对象
      const value = this.title.trim();
      const todoObj = {
        id: nanoid(),
        title: value,
        done: false,
      };
      //调用父组件的方法，将对象传过去
      this.addTodo(todoObj);
      this.title = "";
    },
  },
};
</script>

<style scoped>
/* Header.vue 组件的样式 */
.todo-header input {
  width: 100%;
  height: 36px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  box-sizing: border-box; /* 新增这一行 */
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0), 0 0 8px rgba(8, 168, 236, 0.8);
}
</style>
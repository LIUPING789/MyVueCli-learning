
<!-- Item.vue 组件 -->
<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!-- 如下代码也能实现 但是vue官方推荐使用 v-model 指令  它是直接改了 props的数扬-->
      <!-- <input type="checkbox" v-model="todo.done" /> -->
      <span v-show="!todo.isEdit" style="margin-left: 10px">{{
        todo.title
      }}</span>
      <input
        v-show="todo.isEdit"
        type="text"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="btnDelete(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="btnEdit(todo)">
      编辑
    </button>
  </li>
</template>

<script>
// 导入 pubsub-js 模块
import pubsub from "pubsub-js";

export default {
  name: "MyItem",
  // 接收父组件传递的 todoObj 对象
  props: ["todo"],

  mounted() {
    // 监听父组件传递的 todoObj 对象，当其中的 isDone 属性发生变化时，执行 toggleDone 方法
    this.$watch("todoObj.isDone", this.toggleDone);
  },

  methods: {
    //勾选或取消勾选 todo
    handleCheck(id) {
      // 调用父组件的 toggleDone 方法，将当前 todoObj 的 isDone 属性设置为与当前 checkbox 状态相反的值
      // this.toggleTodo(id);
      // 发射 toggleTodo 事件，通知父组件
      this.$bus.$emit("toggleTodo", id);
    },
    // 删除 todo
    btnDelete(id) {
      // 调用父组件的 deleteTodo 方法，删除当前 todoObj
      if (confirm("确认删除该条记录吗？")) {
        //通知
        console.log("deleteTodo", id);
        // this.deleteTodo(id);
        // 发射 deleteTodo 事件，通知父组件
        // this.$bus.$emit("deleteTodo", id);
        // 或者使用 pubsub 模块，发布 deleteTodo 事件
        pubsub.publish("deleteTodo", id);
      }
    },
    // 编辑 todo
    btnEdit(todo) {
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      console.log("editTodo", todo);
      //获取input元素，获取焦点
      this.$nextTick(() => {
        this.$refs.inputTitle.focus();
      });
    },
    // 失去焦点时保存 todo 标题
    handleBlur(todo, event) {
      todo.isEdit = false;
      if (!event.target.value.trim()) return alert("标题不能为空");
      this.$bus.$emit("updateTodo", todo.id, event.target.value.trim());
    },
  },
};
</script>
<style>
/* Item.vue 组件的样式 */
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #dddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
/* li组件鼠标悬停样式 */
li:hover {
  background-color: #ddd;
}
/* li组件鼠标悬停删除按钮样式 */
li:hover button {
  display: block;
}
</style>
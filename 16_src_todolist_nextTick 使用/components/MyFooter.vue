
<!-- Footer.vue 组件 -->
<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="getSelectAll" />
    </label>
    <span>
      <span>已完成{{ getCompletedTodoCount }}</span
      >/全部{{ total }}
    </span>
    <button
      class="btn btn-danger"
      style="display: block"
      @click="btnDeleteCompleted"
    >
      删除已完成任务
    </button>
  </div>
</template> 

<script>
export default {
  name: "MyFooter",
  //接收到父组件传递的 todos 数组
  props: ["todos"],
  methods: {
    btnDeleteCompleted() {
      //调用父组件传递的 deleteCompleted 方法，删除已完成的任务
      // const completedTodos = getCompletedTodoCount();

      const completedTodos = this.todos.filter((todo) => todo.done).length;

      if (completedTodos == 0) return alert("没有已完成的任务");
      console.log("删除已完成任务", completedTodos);
      // this.deleteCompleted();
      this.$emit("deleteCompleted");
    },
  },
  //使用计算属性，计算已完成的任务数量
  computed: {
    //数据总数
    total() {
      return this.todos.length;
    },
    //数据已完成的数量
    getCompletedTodoCount() {
      // reduce 方法计算已完成的任务数量
      return this.todos.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
      // filter 方法过滤出已完成的任务
      // return this.todos.filter((todo) => todo.done).length;
    },
    //全选数据
    getSelectAll: {
      get() {
        // 已完成的任务数量等于数据总数，且数据总数大于0，则全选框被选中
        return this.getCompletedTodoCount === this.total && this.total > 0;
      },
      set(value) {
        // 当复选框被点击时，setter会被调用，value是复选框的新状态（true或false）
        this.todos.forEach((todo) => {
          todo.done = value;
        });
      },
    },
  },
};
</script>

<style scoped>
/* Footer.vue 组件样式 */
todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative, top：1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
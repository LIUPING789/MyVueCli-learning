<template>
  <!-- 这里必须有一个根元素 -->
  <div>
    <!-- 将方法传给组件  通过事件组件间通信 -->
    <MyHeader @addTodo="addTodo" />
    <!-- 将数据传给组件 -->
    <MyList :todos="todos" />
    <!-- 将方法传给组件 -->
    <MyFooter :todos="todos" @deleteCompleted="deleteCompleted" />
  </div>
</template>

<script>
//引入事件总线
import pubsub from "pubsub-js";

//引用组件
import MyHeader from "./components/MyHeader.vue";

import MyList from "./components/MyList.vue";

import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  data() {
    return {
      //由于todos是Header组件和Footer组件的共用数据，所以放在App组件中(状态提升)
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 新增todo
    addTodo(todo) {
      console.log("添加todo", todo);
      this.todos.unshift(todo);
    },
    //勾选或取消勾选todo
    toggleTodo(id) {
      console.log("允许勾选或取消勾选todo", id);
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    //删除todo
    deleteTodo(_, id) {
      console.log("删除todo", id);
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    //删除已完成的todo
    deleteCompleted() {
      console.log("删除已完成的todo");
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  //监听todos变化,同步到localStorage,items变化时触发
  //deep:true 监听对象内部变化
  watch: {
    todos: {
      deep: true,
      handler(newVal, oldVal) {
        console.log("监听todos变化", newVal, oldVal);
        localStorage.setItem("todos", JSON.stringify(newVal));
      },
    },
  },
  mounted() {
    //接收事件总线
    this.$bus.$on("toggleTodo", this.toggleTodo);
    //使用pubsub-js
    this.pubId = pubsub.subscribe("deleteTodo", this.deleteTodo);
  },

  beforeDestroy() {
    //解绑事件总线监听
    this.$bus.$off("toggleTodo");
    pubsub.unsubscribe(this.pubId);
  },
  //注册组件
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
};
</script>

<style>
/* base style */
body {
  background-color: white;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: white;
  background-color: #da4f49;
  display: none;
  border: 1px solid #bd362f;
}
/*鼠标放上去的样式 */
.btn-danger:hover {
  color: white;
  background-color: #bd362f;
}
/*  */
.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
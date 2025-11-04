<template>
  <!-- 这里必须有一个根元素 -->
  <div class="container">
    <Category title="游戏">
      <template scope="atguigu">
        <ul>
          <li v-for="item in atguigu.games" :key="item.id">{{ item }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏1">
      <template scope="atguigu">
        <ol>
          <li style="color: red" v-for="item in atguigu.games" :key="item.id">
            {{ item }}
          </li>
        </ol>
      </template>
    </Category>
    <Category title="游戏2">
      <template scope="atguigu">
        <h4 v-for="item in atguigu.games" :key="item.id">{{ item }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "@/components/Category";

//引入事件总线
export default {
  name: "App",
  components: {
    Category,
  },
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h3 {
  text-align: center;
  background-color: orange;
}

h4 {
  text-align: center;
}
</style>
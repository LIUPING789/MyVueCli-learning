<template>
  <div>
    <ul>
      <li v-for="item in messages" :key="item.id">
        <!-- 跳转路由并携带query参数，to的字符串写法  -->
        <!-- <router-link
          :to="`/home/message/detail?id=${item.id}&title=${item.title}`"
          >{{ item.title }}</router-link
        >&nbsp; -->

        <!-- 跳转路由并携带params参数，to的数组写法  -->
        <!-- <router-link :to="`/home/message/detail/${item.id}/${item.title}`">{{
          item.title
        }}</router-link> -->

        <!-- 跳转路由并携带query参数，to的对象写法  -->
        <!-- <router-link
          :to="{
            name: 'detail',
            query: { id: item.id, title: item.title },
          }"
          >{{ item.title }}</router-link> -->

        <router-link
          :to="{
            name: 'detail',//这里不能写 全路径，必须使用：命名
            params: { id: item.id, title: item.title },
          }"
          >{{ item.title }}</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messages: [
        {
          id: "001",
          title: "消息001",
        },
        {
          id: "002",
          title: "消息002",
        },
        {
          id: "003",
          title: "消息003",
        },
      ],
    };
  },
};
</script>

<style>
</style>
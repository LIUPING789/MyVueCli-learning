<template>
  <div>
    <h1>人员列表</h1>

    <h3 style="color: red">Count组件的总数是：{{ sum }}</h3>

    <h3 style="color: red">第一个人名字是：{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入一个名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加一个王姓的人</button>

    <button @click="addServer">请求服务器添加</button>
    <ul>
      <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList;
    },
    sum() {
      return this.$store.state.countAbout.sum;
    },

    firstPersonName() {
      return this.$store.getters["personAbout/firstPersonName"];
    },
  },
  methods: {
    add() {
      const personObj = {
        id: nanoid(),
        name: this.name,
      };
      if (this.name === "") return alert("请输入名字");
      this.$store.commit("personAbout/ADD_PERSON", personObj);
      this.name = "";
    },
    addWang() {
      const personObj = {
        id: nanoid(),
        name: this.name,
      };
      this.$store.dispatch("personAbout/addPersonWang", personObj);
      this.name = "";
    },

    addServer() {
      this.$store.dispatch("personAbout/addPersonServer", this.name);
    },
  },
};
</script>

<style>
</style>
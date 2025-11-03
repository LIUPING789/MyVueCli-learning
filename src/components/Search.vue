<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        vm-model="keyWord"
      />&nbsp;
      <button @click="searchUser">Search</button>
    </div>
  </section>
</template>

<script>
//https://api.github.com/search/users?q=xxxy

// import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },

  methods: {
    searchUser() {
      //   let url = "https://api.github.com/search/users?q=" + this.keyWord;
      //请求前更新List 数据
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoadings: true,
        errMsg: "",
        users: [],
      });
        this.$http.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
          (response) => {
            console.log("请求成功：", response.data.items);
            this.$bus.$emit("updateListData", {
              isLoadings: false,
              errMsg: "",
              users: response.data.items,
            });
          },
          (error) => {
            console.log("请求失败：", error);
            this.$bus.$emit("updateListData", {
              isLoadings: false,
              errMsg: error.message,
              users: [],
            });
          }
        );
      console.log(this);
    },
  },
};
</script>

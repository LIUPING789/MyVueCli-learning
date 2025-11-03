<template>
  <div class="school">
    <h2>学生的姓名：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>

    <button @click="sendSchoolName">给父组件传值</button>
  </div>
</template>
<!-- 组件交互逻辑 -->
<script>
//引入一个mixin.js,(混入),这里的mixin.js是上面定义的混入对象
export default {
  name: "School",
  data() {
    return {
      name: "湖南大学",
      address: "湖南长沙",
    };
  },
  props: ["getSchoolName"],

  methods: {
    sendSchoolName() {
      // this.getSchoolName(this.name);
    },
  },
  mounted() {
    this.$bus.$on("atguigu", (name) => {
      console.log("我是学校收到学生名称：" + name);
    });
  },
};
</script>

<style lang="less">
.school {
  background-color: red;
  padding: 5px;
  margin-top: 10px;
}
</style>
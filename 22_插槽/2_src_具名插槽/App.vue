<template>
  <!-- 这里必须有一个根元素 -->
  <div class="container">
    <Category title="美食" :listData="foods">
      <img
        slot="center"
        src="http://gips3.baidu.com/it/u=1022347589,1106887837&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280"
        style="width: 100%; height: 50%"
        alt="美食"
      />
      <a slot="footer" href="https://www.baidu.com/s?wd=美食&pn=0">更多美食</a>
    </Category>
    <Category title="游戏" :listData="games">
      <ul slot="center">
        <li v-for="item in games" :key="item.id">{{ item }}</li>
      </ul>

      <div class="foot" slot="footer">
        <a href="https://www.baidu.com/s?wd=美食&pn=0">单机游戏</a>
        <a href="https://www.baidu.com/s?wd=美食&pn=0">网络游戏</a>
      </div>
    </Category>
    <Category title="电影" :listData="films">
      <video
        slot="center"
        src="https://rod.oss.chinnshi.com/userUpload/225971311539650560/trend/1731939045532.mp4"
        controls="controls"
        width="100%"
        height="50%"
      ></video>

      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.baidu.com/s?wd=美食&pn=0">经典</a>
          <a href="https://www.baidu.com/s?wd=美食&pn=0">热门</a>
          <a href="https://www.baidu.com/s?wd=美食&pn=0">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
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
  // 定义数据
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["复仇者联盟", "蜘蛛侠", "战狼2", "速度与激情8"],
    };
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
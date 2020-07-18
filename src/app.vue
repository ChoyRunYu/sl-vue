<template>
  <div id="app">
    <v-head></v-head>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHead from "@/components/head";
import vFooter from "@/components/footer";
export default {
  components: {
    vHead,
    vFooter
  },
  mounted() {
    //获取footer版块数据
    this.$api.aboutus.getFooterInfo().then(res => {
      this.$store.commit("setFooter", res.data);
    });
  }
};
</script>
<style lang="css">
* {
  margin: 0;
  padding: 0;
  font-family: Microsoft Yahei;
}

body {
  min-width: 1200px;
  width: 100%;
}

img {
  border: none;
}

a {
  text-decoration: none;
  color: black;
}
@font-face {
  font-family: "iconfont";
  src: url("./assets/font/iconfont.eot");
  src: url("./assets/font/iconfont.eot?#iefix") format("embedded-opentype"),
    url("./assets/font/iconfont.woff2") format("woff2"),
    url("./assets/font/iconfont.woff") format("woff"),
    url("./assets/font/iconfont.ttf") format("truetype"),
    url("./assets/font/iconfont.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #aaa;
}
</style>



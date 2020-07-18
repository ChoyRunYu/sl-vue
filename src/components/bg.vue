<template>
  <div>
    <div class="top-bg">
      <div class="bg-title">{{bgTitle}}</div>
      <div class="img"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["bgTitle"]
};
</script>
<style>
.top-bg {
  width: 100%;
  height: 663px;
  position: relative;
}

.top-bg .bg-title {
  position: absolute;
  width: 100%;
  height: 663px;
  line-height: 663px;
  text-align: center;
  color: white;
  font-size: 100px;
  z-index: 2;
}

.top-bg .img {
  width: 100%;
  height: 663px;
  overflow: hidden;
  position: relative;
}

.top-bg .img::before {
  content: "";
  background: url("../assets/img/associations-bg.png");
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  filter: blur(10px);
  margin: -12px;
}
</style>
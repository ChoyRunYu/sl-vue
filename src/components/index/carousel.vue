<template>
  <div class="carousel">
    <el-carousel :interval="5000" @change="changeBanner" :height="imgH+'px'">
      <el-carousel-item v-for="(item,index) in banner" :key="index">
        <div>
          <router-link tag="a" :to="item.link == '#'?`/new/${item.link}`:'#'" :target="item.link == '#'?'_blank':''">
            <div class="title-containter">
              <div class="title-block">
                <div ref="title" class="title-div">{{item.title}}</div>
              </div>
            </div>
            <img :height="imgH" :src="item.img" :alt="item.title">
          </router-link>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      imgH: 0,
      banner: []
    };
  },
  methods: {
    changeBanner: function(key1, key2) {
      this.$refs["title"][key2].classList.remove("title-animation");
      this.$refs["title"][key1].classList.add("title-animation");
    }
  },
  mounted() {
    let that = this;
    this.imgH = document.body.clientWidth / 2.78;
    window.onresize = function windowResize() {
      var cw = document.body.clientWidth;
      if (cw <= 1200) {
        that.imgH = 431.25;
      } else {
        that.imgH = cw / 2.78;
      }
    };
    this.$api.banner.getBannerIndex().then(res => {
      this.banner = res.data;
    });
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
/**
    banner部分的标题块
*/
.title-containter {
  position: absolute;
  bottom: 70px;
  z-index: 12000;
  width: 100%;
  height: 60px;
}

.title-containter .title-block {
  width: 1200px;
  height: 60px;
  margin: 0 auto;
  color: #e4e4e4;
}

.title-containter .title-block .title-div {
  margin-left: 40px;
  height: 60px;
  line-height: 60px;
  font-size: 28px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  display: inline-block;
}

/**
  标题部分过渡动画
*/
@-webkit-keyframes bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-500px, 0, 0);
    transform: translate3d(-500px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-500px, 0, 0);
    transform: translate3d(-500px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
  animation-duration: 1s;
}

/**
*    从左往右淡出过渡动画,用于关于我们版块
*/
@-webkit-keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-200px, 0, 0);
    transform: translate3d(-200px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-200px, 0, 0);
    transform: translate3d(-200px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
  animation-duration: 1s;
}

/*
 * banner标题的出现动画  
*/
.title-animation {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
  animation-duration: 1.5s;
}

/**
*   从右往左淡出过渡动画，用于关于我们版块
*/

@-webkit-keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(200px, 0, 0);
    transform: translate3d(200px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(200px, 0, 0);
    transform: translate3d(200px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
  animation-duration: 1s;
}
</style>

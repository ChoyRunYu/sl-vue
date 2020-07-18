<template>
  <div ref="header" class="header">
    <div class="header-div">
      <div class="header-content">
        <div class="header-logo">
          <router-link to="/">
            <img src="../assets/img/nav-logo.png" alt="logo">
          </router-link>
        </div>
        <div class="header-nav">
          <ul class="nav">
            <li>
              <router-link data-isnav="" to="/">首页</router-link>
            </li>
            <li>
              <router-link data-isnav="" to="/videos">微视频</router-link>
            </li>
            <li>
              <router-link data-isnav="" to="/aboutus">魅力社联</router-link>
            </li>
            <li>
              <router-link data-isnav="" to="/associations">多彩社团</router-link>
            </li>
            <li>
              <router-link data-isnav="" to="/news">新闻动态</router-link>
            </li>
            <li>
              <router-link data-isnav="" to="/activities">近期活动</router-link>
            </li>
            <li>
              <router-link data-isnav="" to="/service">服务中心</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    document.addEventListener("scroll", () => {
      var scrollDistance =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollDistance >= 200) {
        // 触发的位置
        //document.getElementsByClassName('header-div')[0].style.cssText = 'position:fixed;z-index:999;top:0;';
        this.$refs.header.classList.add("header-fixed");
        this.$refs.header.classList.add("fadeInDown");
      } else {
        this.$refs.header.classList.remove("header-fixed");
        this.$refs.header.classList.remove("fadeInDown");
      }
    });
  }
};
</script>

<style>
.nav-is-active[data-isnav] {
  color: #11a5eb;
}

.header {
  width: 100%;
  height: 80px;
  background-color: white;
  box-shadow: 0px 1px 10px #888;
}

.header-content {
  width: 1200px;
  height: 80px;
  margin: 0 auto;
  line-height: 80px;
}

.header-content .header-logo {
  width: 182px;
  height: 80px;
  line-height: 80px;
  margin-left: 18px;
  display: inline-block;
}

.header-content .header-logo img {
  width: 182px;
  height: 50px;
  vertical-align: middle;
}

.header-content .header-nav {
  width: 1000px;
  height: 80px;
  float: right;
}

.header-content .header-nav .nav {
  height: 80px;
  float: right;
}

.header-content .header-nav .nav li {
  height: 80px;
  list-style: none;
  float: left;
  margin-right: 40px;
}

.header-content .header-nav .nav li a {
  text-decoration: none;
  display: block;
  font-size: 16px;
  line-height: 80px;
}

.header-content .header-nav .nav li a:hover {
  transition: 0.2s;
  color: #11a5eb;
}
.nav-select {
  color: #11a5eb;
}
/**
 *  导航栏动画
*/
.header-fixed{
    position: fixed;
    top: 0;
    z-index: 9999;
}
@-webkit-keyframes fadeInDown {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  .fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
    animation-duration: 0.6s;
  }
</style>
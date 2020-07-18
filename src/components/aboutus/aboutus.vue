<template>
  <div class="main-aboutus">
    <div class="aboutus-containter">
      <div class="aboutus-nav">
        <ul id="aboutus-nav" ref="aboutusNav">
          <li
            v-for="(item,index) in nav"
            :key="index"
            class="nav-item"
            :class="{'scroll-active': active===(item.id-1)}"
            @click="scrollTo(item.id-1)"
          >{{item.nav_name}}</li>
        </ul>
      </div>
      <div class="aboutus-content">
        <div class="content-block" v-for="(item,index) in content" :key="index">
          <div class="content-title">
            <h3 v-html="item.title"></h3>
          </div>
          <div class="content-article" v-html="item.article"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let aboutusNavToWindowHeight = 0;
let aboutusNavOffsetTop = 0;
export default {
  data() {
    return {
      active: -1,
      nav: [],
      content: []
    };
  },
  mounted() {
    this.$api.aboutus.getAboutusPage().then(res => {
      this.nav = res.data.nav;
      this.content = res.data.content;
    });
    aboutusNavOffsetTop = this.$refs.aboutusNav.offsetTop;
    window.addEventListener("scroll", this.fixedNav);
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.fixedNav);
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const navContents = document.querySelectorAll(
        ".aboutus-content .content-block"
      );
      const offsetTopArr = [];
      navContents.forEach(item => {
        offsetTopArr.push(item.offsetTop);
      });
      const scrollTop = this.getScrollTop();
      let navIndex = 0;
      for (let n = 0; n < offsetTopArr.length; n++) {
        if (scrollTop >= offsetTopArr[n] - 80) {
          navIndex = n;
        }
      }
      this.active = scrollTop < offsetTopArr[0] - 80 ? -1 : navIndex;
    },
    scrollTo(index) {
      const targetOffsetTop =
        document.querySelector(
          `.aboutus-content .content-block:nth-child(${index + 1})`
        ).offsetTop - 80;
      let scrollTop = this.getScrollTop();
      const STEP = 10;
      if (scrollTop > targetOffsetTop) {
        smoothUp();
      } else {
        smoothDown();
      }
      function smoothDown() {
        if (scrollTop < targetOffsetTop) {
          // 如果和目标相差距离大于等于 STEP 就跳 STEP
          // 否则直接跳到目标点，目标是为了防止跳过了。
          if (targetOffsetTop - scrollTop >= STEP) {
            scrollTop += STEP;
          } else {
            scrollTop = targetOffsetTop;
          }
          document.body.scrollTop = scrollTop;
          document.documentElement.scrollTop = scrollTop;
          // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
          requestAnimationFrame(smoothDown);
        }
      }
      function smoothUp() {
        if (scrollTop > targetOffsetTop) {
          if (scrollTop - targetOffsetTop >= STEP) {
            scrollTop -= STEP;
          } else {
            scrollTop = targetOffsetTop;
          }
          document.body.scrollTop = scrollTop;
          document.documentElement.scrollTop = scrollTop;
          requestAnimationFrame(smoothUp);
        }
      }
    },
    getScrollTop() {
      let scroll_top = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        //判断是否支持document.documentElement方式获取
        scroll_top = document.documentElement.scrollTop;
      } else if (document.body) {
        //判断能够通过document.body获取
        scroll_top = document.body.scrollTop;
      }
      return scroll_top;
    },
    fixedNav() {
      aboutusNavToWindowHeight = aboutusNavOffsetTop - this.getScrollTop();
      if (
        aboutusNavToWindowHeight <= 150 &&
        !this.$refs.aboutusNav.classList.contains("nav-fixed")
      ) {
        this.$refs.aboutusNav.classList.add("nav-fixed");
      } else if (
        aboutusNavToWindowHeight > 150 &&
        this.$refs.aboutusNav.classList.contains("nav-fixed")
      ) {
        this.$refs.aboutusNav.classList.remove("nav-fixed");
      }
    }
  }
};
</script>
<style scoped>
.main-about {
  width: 100%;
  height: 100%;
}

.aboutus-containter {
  width: 1200px;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
}

.aboutus-nav {
  float: left;
}

.aboutus-nav ul {
  width: 150px;
  border-radius: 4px;
  border: #ddd 1px solid;
  box-shadow: 0px 0px 20px #ddd;
  margin-left: 50px;
  margin-top: 50px;
  background-color: white;
}

.aboutus-nav ul > li {
  height: 50px;
  line-height: 50px;
  text-align: center;
  list-style: none;
  border-top: #ddd 1px solid;
}

.aboutus-nav ul > li {
  width: 150px;
  height: 50px;
  display: block;
  font-weight: 600;
  border-radius: 4px;
}

.aboutus-nav ul > li:hover {
  color: white;
  background-color: #11a5eb;
  cursor: pointer;
}

.nav-fixed {
  position: fixed;
  top: 90px;
}

.aboutus-content {
  float: right;
  width: 919px;
  margin: 60px 15px 50px 50px;
  box-sizing: border-box;
}

.aboutus-content h3 {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
  margin-top: 30px;
}

.aboutus-content p {
  text-indent: 2em;
}

.aboutus-content h4 {
  margin-top: 20px;
  margin-bottom: 20px;
}

.scroll-active {
  color: white;
  background-color: #11a5eb;
}
</style>

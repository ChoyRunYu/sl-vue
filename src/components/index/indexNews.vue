<template>
  <div class="main-news">
    <div class="main-news-containter">
      <div class="news-title bounceInLeft">
        <div>新闻资讯</div>
        <span>/NEWS</span>
        <p>关于我们的活动动态</p>
      </div>
      <hr class="lineInLeft" style="visibility: visible;">
      <div class="news-items">
        <div class="news-item" v-for="(item,index) in news" :key="index">
          <router-link  tag="a" target="_blank" :to="`/new/${item.id}`">
            <div class="img-scale">
              <img :src="item.img" :alt="item.title">
            </div>
            <p :title="item.title" class="news-item-title">{{item.title}}</p>
            <div class="item-dateblock">
              <span class="item-date isnews">
                <i class="iconfont">&#xe790;</i>
                {{item.create_time.trim().split(' ')[0]}}
              </span>
            </div>
          </router-link>
        </div>
      </div>
      <div class="btn-block">
        <router-link class="more-btn" to="/news">查看更多</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      news: []
    };
  },
  mounted() {
    this.$api.news.getNewsIndex().then(res => {
      this.news = res.data;
    });
  },
};
</script>
<style lang="css" scoped>
.gotoLink {
  cursor: pointer;
}
/**
* 新闻版块
*/

.main-news {
  width: 100%;
  height: 1030px;
  background-color: #f4f4f4;
}

.main-news-containter {
  height: 1030px;
  width: 1200px;
  margin: 0 auto;
}

.main-news-containter hr {
  margin: 0;
  background-color: #eee;
}

.main-news-containter .news-title {
  width: 1200px;
  height: 136px;
  box-sizing: border-box;
  text-align: center;
  padding-top: 30px;
}

.main-news-containter .news-title div {
  font-size: 40px;
  display: inline-block;
  color: #11a5eb;
}

.main-news-containter .news-title span {
  display: inline-block;
  font-size: 26px;
  color: #a9a9a9;
}

.main-news-containter .news-title p {
  color: #a9a9a9;
}

.main-news-containter .news-items {
  width: 1200px;
  height: 750px;
}

.news-items .news-item {
  /* visibility: hidden; */
  width: 384px;
  height: 290px;
  background-color: white;
  float: left;
  margin: 68px 24px 0px 0;
}

.news-item:nth-of-type(3),
.news-item:nth-of-type(6) {
  margin-right: 0;
}

.news-items .news-item a {
  transition: 0.3s;
  display: inline-block;
  width: 384px;
  height: 290px;
  text-decoration: none;
  color: black;
  font-size: 18px;
  overflow: hidden;
}

.news-items .news-item:nth-of-type(1),
.news-items .news-item:nth-of-type(2),
.news-items .news-item:nth-of-type(3) {
  margin-top: 50px;
}

/**
*   处理鼠标移入item时的图片放大特效
*/
.news-items .news-item .img-scale {
  overflow: hidden;
  width: 384px;
  height: 216px;
}

.news-items .news-item a:hover {
  /* transition: .5s;*/
  box-shadow: 0px 4px 30px #aaa;
}

.news-items .news-item a:hover img {
  transform: scale(1.2);
  transition: all 0.8s;
}

.news-items .news-item img {
  transition: all 0.8s;
}

/* 到此结束 */

.news-items .news-item a:hover .news-item-title {
  color: #11a5eb;
}

.news-items .news-item p {
  overflow: hidden;
  text-overflow: ellipsis;
  /*文本溢出显示省略号*/
  white-space: nowrap;
  /*文本不会换行（单行文本溢出）*/
  padding: 0;
  margin: 0;
  height: 18px;
  line-height: 18px;
  margin: 10px 0 10px 15px;
}
</style>
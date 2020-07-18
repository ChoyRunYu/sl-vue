<template>
  <div class="main-videos">
    <div class="main-videos-containter">
      <div class="video-title">
        <div>微视频</div>
        <span>/VIDEOS</span>
        <p>关于我们的活动宣传视频</p>
      </div>
      <hr>
      <div class="video-items">
        <div class="video-item" v-for="(item,index) in videos" :key="index">
          <router-link target="_blank" :to="`video/${item.id}`">
            <div class="video-cover">
              <span></span>
            </div>
            <img :src="item.poster" :alt="item.title">
          </router-link>
          <div class="video-item-title">
            <div class="video-desc">{{item.title}}</div>
            <div class="item-dateblock">
              <span class="item-date">
                <i class="iconfont">&#xe790;</i>
                {{item.create_time.trim().split(' ')[0]}}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-block">
        <router-link class="more-btn" to="/videos">查看更多</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videos: []
    };
  },
  mounted() {
    this.$api.video.getVideoIndex().then(res => {
      this.videos = res.data;
    });
  }
};
</script>
<style lang="css" scoped>
/**
* 微视频版块
*/
.main-videos {
  height: 520px;
}

.main-videos .main-videos-containter {
  width: 1200px;
  margin: 0 auto;
  height: 520px;
}

.main-videos-containter .video-title {
  width: 1200px;
  height: 136px;
  text-align: center;
  padding-top: 30px;
  box-sizing: border-box;
  /* visibility: hidden; */
}

.main-videos-containter hr {
  margin: 0;
}

.video-title div {
  color: #11a5eb;
  display: inline-block;
  font-size: 40px;
}

.video-title span {
  font-size: 26px;
  color: #a9a9a9;
}

.video-title p {
  color: #a9a9a9;
}

.video-items {
  width: 1200px;
  height: 270px;
}

.video-items .video-item {
  /* visibility: hidden; */
  width: 274px;
  height: 200px;
  float: left;
  margin: 40px 34px 0 0;
}

.video-items .video-item:nth-of-type(4) {
  margin-right: 0px;
}

/**
*  视频版块鼠标悬停特效
*/
.video-items .video-item .video-cover {
  width: 274px;
  height: 154px;
  position: absolute;
  z-index: 22;
}

.video-items .video-item .video-cover span {
  display: block;
  position: absolute;
  z-index: 22;
  width: 274px;
  height: 154px;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
}

.video-items .video-item a:hover .video-cover span {
  background: rgba(50, 50, 50, 0.6) url("../../assets/img/play.png");
}

/* 到此结束 */

.video-items .video-item a {
  width: 274px;
  height: 154px;
  display: block;
  font-size: 16px;
  text-decoration: none;
  overflow: hidden;
  border-radius: 4px;
}

.video-items .video-item .video-item-title {
  width: 274px;
  height: 46px;
  padding-left: 3px;
  box-sizing: border-box;
}

.video-items .video-item .video-desc {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 0;
}

.video-items .video-item:hover div {
  color: #11a5eb;
}

.video-item-title .item-dateblock .item-dateIcon {
  margin-left: 0px;
}
</style>
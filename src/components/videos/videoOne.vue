<template>
  <div class="main">
    <div class="video-containter">
      <div class="video">
        <p class="video-desc">{{title}}</p>
        <div class="video-mess">
          <span class="video-date">
            <i class="date-icon iconfont">&#xe790;</i>
            上传于 {{create_time}}
          </span>
        </div>
        <div>
          <d-player ref="player" :video="video" :contextmenu="contextmenu"></d-player>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueDPlayer from "../VueDPlayerHls";
export default {
  data() {
    return {
      title: "",
      create_time: "",
      video: {
        url: "",
        type: "hls"
      },
      autoplay: false,
      player: null,
      contextmenu: [
        {
          text: "GitHub",
          link: "https://github.com/ChoyRunyu"
        }
      ]
    };
  },
  components: {
    "d-player": VueDPlayer
  },
  mounted() {},
  activated() {
    this.$api.video.getOneVideo(this.$route.params.id).then(res => {
      this.title = res.data[0].title;
      this.create_time = res.data[0].create_time;
      this.$nextTick(function() {
        this.$refs.player.dp.switchVideo({ url: res.data[0].src });
      });
    });
  }
};
</script>
<style>
.dplayer-video-wrap .dplayer-video-current {
  min-height: 540px;
}
</style>

<style scoped>
.main {
  width: 100%;
  height: 100%;
}

.video-containter {
  width: 1200px;
  min-height: 700px;
  margin: 0 auto;
  padding-top: 40px;
}

.video-containter .video {
  width: 960px;
  height: 540px;
  margin: 0 auto;
  /* margin: 40px auto;
    margin-bottom: 80px;*/
}
.video-containter .video video {
  width: 100%;
  height: 100%;
}

.video-containter .video .video-desc {
  font-size: 28px;
  font-weight: 550px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e4e4e4;
}

.video-mess span {
  display: inline-block;
  color: #999;
  margin: 10px 15px 18px 10px;
}

.video-mess span > i {
  width: 16px;
  height: 16px;
  display: inline-block;
  margin-right: 8px;
}
</style>

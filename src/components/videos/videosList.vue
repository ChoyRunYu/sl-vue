<template>
    <div class="main-videos">
        <div class="video-containter">
            <div class="video-items">
                <div class="video-item" v-for="(item,index) in videoList" :key="index">
                    <router-link :to="`video/${item.id}`">
                        <div class="video-cover">
                            <span></span>
                        </div>
                        <img :src="item.poster">
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
            <div class="video-page">
                <el-pagination
                    layout="slot, prev, pager, next,jumper"
                    :total="videoTotal"
                    background=""
                    @current-change="handleCurrentChange"
                    :page-size="12"
                >
                    <span class="video-page-total">共 {{videoTotal}} 个视频</span>
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      videoList: [],
      videoTotal: 0
    };
  },
  mounted() {
    this.$api.video.getVideoList(0).then(res => {
      this.videoTotal = res.data.total;
      this.videoList = res.data.videoList;
    });
  },
  methods: {
    //分页加载
    handleCurrentChange(index) {
      this.$api.video.getVideoList((index - 1) * 12).then(res => {
        this.videoTotal = res.data.total;
        this.videoList = res.data.videoList;
      });
    }
  }
};
</script>
<style scoped>
.video-page {
  margin: 0 auto;
  text-align: center;
  height: 136px;
  padding-top: 50px;
  box-sizing: border-box;
}
.video-page-total {
  font-weight: 500;
  margin-right: 20px;
}
/**
*   日期样式
*/

.item-dateblock {
  height: 25px;
  line-height: 25px;
}

.item-dateblock .item-date {
  font-size: 16px;
  color: #bfbfbf;
}

.item-dateblock .item-date i {
  margin-right: 5px;
}

.main-videos {
  width: 100%;
  height: 850px;
  background-color: white;
}

.main-videos .video-containter {
  width: 1200px;
  height: 850px;
  margin: 0 auto;
  overflow: hidden;
}

.main-videos .video-containter .video-items {
  width: 1240px;
  height: 714px;
}

.main-videos .video-containter .video-item {
  width: 274px;
  height: 198px;
  float: left;
  margin: 40px 34px 0 0;
}

.main-videos .video-containter .video-item a {
  width: 274px;
  height: 154px;
  display: block;
  text-decoration: none;
  overflow: hidden;
  font-size: 16px;
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
}

.video-item-title .item-dateblock .item-dateIcon {
  margin-left: 0px;
}

.video-items .video-item:hover div {
  color: #11a5eb;
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
</style>



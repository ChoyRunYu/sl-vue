<template>
  <div class="main-news">
    <div class="news-containter">
      <div class="news-items">
        <div class="news-item" v-for="(item,index) in newsList" :key="index">
          <div class="news-item-date">
            <router-link tag="a" :to="`/new/${item.id}`">
              <div
                class="date-monthDate"
              >{{item.create_time.trim().split(' ')[0].split('-')[2]}}/{{item.create_time.trim().split('-')[1]}}</div>
              <div class="date-year">{{item.create_time.trim().split('-')[0]}}</div>
            </router-link>
          </div>
          <div class="news-item-containter">
            <router-link tag="a" :to="`/new/${item.id}`" class="news-item-title">{{item.title}}</router-link >
            <p class="news-item-article">{{item.article}}</p>
          </div>
          <div class="news-item-image">
            <router-link tag="a" :to="`/new/${item.id}`">
              <img :src="item.img">
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="news-page">
      <el-pagination
        layout="slot, prev, pager, next,jumper"
        :total="newsTotal"
        background=""
        @current-change="handleCurrentChange"
        :page-size="4"
      >
        <span class="news-page-total">共 {{newsTotal}} 个视频</span>
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsTotal: 0,
      newsList: []
    };
  },
  mounted() {
    this.$api.news.getNewsPage(0).then(res => {
      this.newsTotal = res.data.total;
      this.newsList = res.data.newsList;
    });
  },
  methods: {
    //分页加载
    handleCurrentChange(index) {
      this.$api.news.getNewsPage((index - 1) * 4).then(res => {
        this.newsTotal = res.data.total;
        this.newsList = res.data.newsList;
      });
    },
  }
};
</script>
<style scoped>
.news-page {
  margin: 0 auto;
  text-align: center;
  height: 136px;
  padding-top: 50px;
  box-sizing: border-box;
}
.news-page-total {
  font-weight: 500;
  margin-right: 20px;
}
.main-news {
  width: 100%;
}

.main-news .news-containter {
  width: 1200px;
  margin: 0 auto;
}

.news-items {
  margin-top: 50px;
}

.news-items a{
  cursor: pointer;
}

.news-items .news-item:last-child {
  border-bottom: none;
}

.news-item {
  overflow: hidden;
  width: 1200px;
  height: 150px;
  border-bottom: 1px #aaa dashed;
  list-style: none;
}

.news-item .news-item-date {
  float: left;
  margin-left: 40px;
  margin-top: 40px;
  width: 100px;
  height: 60px;
}

.news-item-date .date-monthDate {
  color: black;
  font-size: 24px;
}

.news-item-date .date-year {
  font-size: 18px;
  color: #666;
}

.news-item-date a {
  display: block;
  width: 100px;
  height: 60px;
}

.news-item .news-item-containter {
  width: 800px;
  height: 140px;
  float: left;
  margin-top: 24px;
  margin-left: 20px;
}

.news-item .news-item-containter .news-item-title {
  display: block;
  color: black;
  font-size: 18px;
  margin-bottom: 10px;
  transition: 0.2s;
}

.news-item .news-item-containter .news-item-title:hover {
  color: #11a5eb;
}

.news-item .news-item-containter p {
  font-size: 14px;
  color: #999;
}

.news-item .news-item-image {
  margin-top: 24px;
  margin-left: 20px;
  float: left;
}

.news-item .news-item-image img {
  width: 192px;
  height: 108px;
  float: left;
}

/*分页样式*/
.news-page {
  margin: 0 auto;
  text-align: center;
  height: 136px;
  padding-top: 50px;
  box-sizing: border-box;
}

.news-page-item {
  width: 30px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  border: 1px #ddd solid;
  border-radius: 5px;
  text-align: center;
  color: #222;
  transition: 0.2s;
  margin-right: 8px;
  font-size: 13px;
}

.active {
  color: white;
  background-color: #11a5eb;
  border: 1px #11a5eb solid;
}

.news-page-item:hover {
  color: white;
  background-color: #11a5eb;
  border: 1px #11a5eb solid;
}
</style>


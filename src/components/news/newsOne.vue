<template>
    <div class="main-intro">
        <div class="intro-containter">
            <div class="intro-title">{{newsMess.title}}</div>
            <div class="intro-meta">
                <span class="intro-meta-class">
                    <i class="intro-meta-class-icon iconfont">&#xe617;</i>社团联合会
                </span>
                <span class="intro-meta-time">
                    <i class="intro-meta-time-icon iconfont">&#xe790;</i>
                    发表于 {{(newsMess.create_time || "").split(' ')[0]}}
                </span>
                <span class="intro-meta-time">
                    <i class="intro-meta-time-icon iconfont">&#xe630;</i>
                    {{newsMess.editor}} 编辑
                </span>
            </div>
            <div class="intro" v-html="newsMess.article"></div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      newsMess: []
    };
  },
  activated() {
    this.$api.news.getOneNew(this.$route.params.id).then(res => {
      this.newsMess = res.data[0];
    });
  }
};
</script>
<style scoped>
.main-intro {
  width: 100%;
  height: auto;
}

.main-intro .intro-containter {
  width: 1200px;
  min-height: 500px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 60px;
  padding: 40px 15px 60px 15px;
  box-sizing: border-box;
}

.main-intro .intro-containter .intro-title {
  font-size: 24px;
  font-weight: 600;
}

.intro-meta {
  margin: 12px 0 20px 15px;
}

.intro-meta span {
  color: #999;
  margin-right: 18px;
  display: inline-block;
}

.intro-meta span > i {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  color: #11a5eb;
}
</style>

<template>
  <div class="main-intro">
    <div class="intro-containter">
      <div class="intro-title">{{associationMess.name}}</div>
      <div class="intro-meta">
        <span class="intro-meta-class">
          <i class="intro-meta-class-icon iconfont">&#xe617;</i>
          {{associationMess.catagory}}
        </span>
        <span class="intro-meta-time">
          <i class="intro-meta-time-icon iconfont">&#xe790;</i>
          最后更新于 {{associationMess.update_time}}
        </span>
      </div>
      <div class="intro" v-html="associationMess.desc"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      associationMess: []
    };
  },
  methods: {
    getOneAssociationData() {
      this.$api.association
        .getOneAssociation(this.$route.params.id)
        .then(res => {
          this.associationMess = res.data[0];
        });
    }
  },
  activated(){
    this.getOneAssociationData()
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

.intro-meta span > i {
  color: #11a5eb;
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
}
</style>


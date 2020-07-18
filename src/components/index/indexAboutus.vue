<template lang="html">
        <div class="main-aboutus">
            <div class="main-aboutus-title">
                <div>关于我们</div>
                <span>/ABOUTUS</span>
            </div>
            <hr>
            <div class="aboutus-block">
                <div class="aboutus-left">
                    <div class="aboutus-img-scale">
                        <img :src="src" alt="关于我们">
                    </div>
                </div>
                <div class="aboutus-right">
                    <div class="aboutus-right-text">
                        <h5>{{name}}</h5>
                        <p>{{desc}}</p>
                    </div>
                    <div class="btn-block">
                        <router-link to="/aboutus" class="more-btn">查看更多</router-link>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      src: "",
      desc: ""
    };
  },
  mounted() {
    this.$api.aboutus.getAboutusIndex().then(res => {
      this.name = res.data.name;
      this.src = res.data.src;
      this.desc = res.data.desc;
    });
  }
};
</script>
<style lang="css" scoped>
/**
*   关于我们版块
*/
.main-aboutus {
  width: 1200px;
  height: 560px;
  margin: 0 auto;
}

.main-aboutus-title {
  width: 1200px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  /* visibility: hidden; */
}

.main-aboutus-title div {
  font-size: 40px;
  color: #11a5eb;
  display: inline-block;
}

.main-aboutus-title span {
  font-size: 26px;
  color: #a9a9a9;
}

.main-aboutus-title p {
  color: #a9a9a9;
}

.main-aboutus hr {
  margin: 0 0 40px 0;
}

.aboutus-block {
  width: 1200px;
  height: 338px;
  margin: 0 auto;
}

.aboutus-block .aboutus-left,
.aboutus-block .aboutus-right,
.aboutus-left .aboutus-img-scale {
  width: 600px;
  height: 338px;
  float: left;
  border: none;
  padding: 0;
  margin: 0;
}

/* .aboutus-left {
  visibility: hidden;
} */

.aboutus-left .aboutus-img-scale {
  overflow: hidden;
}

.aboutus-left img {
  width: 600px;
  height: 338px;
  transition: all 0.8s;
  border: none;
}

.aboutus-left:hover img {
  transform: scale(1.2);
  transition: all 0.8s;
}

.aboutus-right-text {
  /* visibility: hidden; */
  padding: 30px 20px 0 30px;
}

.aboutus-right-text h5 {
  margin: 0;
  padding: 0;
  display: block;
  font-size: 24px;
  margin-bottom: 40px;
}

.aboutus-right-text p {
  padding: 0;
  margin: 0;
  width: 550px;
  line-height: 24px;
  font-size: 16px;
  height: 96px;
  text-indent: 2em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  text-overflow: ellipsis;
}

.aboutus-right .btn-block {
  margin-top: 30px;
}
</style>
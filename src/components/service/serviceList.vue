<template>
    <div class="main-service">
        <div class="service-containter">
            <div class="service-items">
                <a class="service-item" :href="item.link" v-for="(item,index) in serviceList" :key="index">
                    <img :src="item.img">
                    <p class="service-title">{{item.title}}</p>
                    <p class="service-desc">{{item.desc}}</p>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      serviceList: []
    };
  },
  mounted() {
    this.$api.service.getServiceList().then(res => {
      this.serviceList = res.data;
    });
  }
};
</script>
<style scoped>
.main-service {
  width: 100%;
  height: 100%;
}

.main-service .service-containter {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 20px;
}

.service-items {
  width: 1210px;
  height: 100%;
  overflow: hidden;
}

.service-item {
  height: 200px;
  width: 274px;
  float: left;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  text-align: center;
  margin-right: 26px;
  margin-bottom: 26px;
}

.service-item img {
  margin-top: 40px;
}

.service-item .service-title {
  margin-top: 15px;
  font-size: 20px;
  color: black;
  font-weight: 550;
}

.service-item .service-desc {
  margin-top: 5px;
  color: #aaa;
  font-size: 14px;
}
</style>

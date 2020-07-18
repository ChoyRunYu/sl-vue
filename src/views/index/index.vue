<template>
    <div id="index">
        <v-carousel></v-carousel>
        <v-index-news></v-index-news>
        <v-index-videos></v-index-videos>
        <v-index-aboutus></v-index-aboutus>
    </div>
</template>

<script>
import vCarousel from '@/components/index/carousel'
import vIndexNews from '@/components/index/indexNews'
import vIndexVideos from '@/components/index/indexVideos'
import vIndexAboutus from '@/components/index/indexAboutus'
export default {
    name:'Index',
    components:{
        vCarousel,
        vIndexNews,
        vIndexVideos,
        vIndexAboutus
    }
}
</script>
<style>
hr {
  /* visibility: hidden; */
  background-color: #eee;
  border: none;
  margin: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
/**
*   按钮样式 
*   class: btn-block more-btn
*/
.btn-block {
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  /* visibility: hidden; */
}

.btn-block .more-btn:hover {
  background-color: #11a5eb;
  transition: all 0.8s;
  color: white;
}

.btn-block .more-btn {
  box-sizing: border-box;
  transition: all 0.8s;
  color: #11a5eb;
  width: 180px;
  height: 60px;
  border: #11a5eb 1.5px solid;
  padding: 12px 42px;
  font-size: 20px;
  border-radius: 6px;
  text-decoration: none;
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

.item-dateblock .isnews {
  margin-left: 15px;
}

.item-dateblock .item-date i {
  margin-right: 5px;
}
</style>

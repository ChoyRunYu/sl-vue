<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-info">
        <div class="footer-info-mess">
          <p class="name">{{footer.name}}</p>
          <p class="address">地址：{{footer.address}}</p>
          <p class="frilink">友情链接：</p>
          <a target="_blank" :href="footer.link1">{{footer.link1_desc}}</a>
          <span>/</span>
          <a target="_blank" :href="footer.link2">{{footer.link2_desc}}</a>
        </div>
        <div class="footer-info-code">
          <img :src="footer.wechat_img" alt="微信公众号二维码">
          <div class="wechat">
            <span class="wechat-icon"></span>
            <p>扫码关注公众号</p>
          </div>
        </div>
      </div>
      <hr style="visibility: visible;">
      <div class="footer-copyright">
        <div class="quicklink">
          <router-link to="/videos">微视频</router-link>|
          <router-link to="/aboutus">魅力社联</router-link>|
          <router-link to="/associations">多彩社团</router-link>|
          <router-link to="/news">新闻动态</router-link>|
          <router-link to="/activities">近期活动</router-link>|
          <router-link to="/service">服务中心</router-link>
        </div>
        <div class="copyright">
          Copyright ©
          <span class="copyright-time">2019-{{currYear}}</span>
          <span class="copyright-name">{{footer.name}}</span>All rights reserved.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer: {},
      currYear: new Date().getFullYear()
    };
  },
  mounted() {
    if (this.$store.getters.footer.name) {
      this.footer = this.$store.getters.footer;
    } else {
      this.$api.aboutus.getFooterInfo().then(res => {
        this.footer = res.data;
        this.$store.commit("setFooter", res.data);
      });
    }
  }
};
</script>

<style>
.footer {
  height: 286px;
  width: 100%;
  background-color: #333;
}

.footer .footer-content {
  width: 1200px;
  height: 286px;
  margin: 0 auto;
}

.footer .footer-content .footer-info {
  height: 200px;
  position: relative;
}

.footer-info .footer-info-mess {
  height: 200px;
  width: 600px;
  padding-top: 40px;
  padding-left: 50px;
  box-sizing: border-box;
  display: inline-block;
}

.footer-info .footer-info-mess p {
  color: #ddd;
  font-size: 17px;
  margin-bottom: 20px;
}

.footer-info .footer-info-mess .name {
  font-size: 26px;
}

.footer-info .footer-info-mess p:nth-child(3) {
  display: inline;
}

.footer-info .footer-info-mess a {
  font-size: 17px;
  color: #ddd;
  text-decoration: none;
}

.footer-info .footer-info-mess a:hover {
  color: #11a5eb;
}

.footer-info .footer-info-mess span {
  color: #ddd;
}

.footer-info .footer-info-code {
  /*height: 200px;*/
  position: absolute;
  top: 20px;
  right: 50px;
}

.footer-info .footer-info-code img {
  display: block;
  width: 130px;
  height: 130px;
  margin-bottom: 8px;
}

.footer-info .footer-info-code .wechat {
  width: 130px;
  height: 19px;
  margin: 0 auto;
  line-height: 19px;
}

.footer-info .footer-info-code .wechat-icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-size: 18px 18px;
  vertical-align: middle;
  background-image: url(../assets/img/wechat.png);
}

.footer-info .footer-info-code:hover .wechat .wechat-icon {
  background-image: url(../assets/img/wechatHover.png);
}

.footer-info .footer-info-code .wechat p {
  font-size: 15px;
  color: #ddd;
  display: inline-block;
}

.footer hr {
  height: 1px;
  background-color: #ddd;
  border: none;
  margin: 0;
}

.footer-copyright {
  padding-top: 15px;
  font-size: 14px;
  color: #ddd;
  height: 70px;
  text-align: center;
}

.footer-copyright a {
  color: #ddd;
  margin: 0 15px 5px 10px;
  text-decoration: none;
}

.footer-copyright a:hover {
  color: #11a5eb;
  text-decoration: none;
}

.footer-copyright .copyright {
  color: #ddd;
  margin-top: 10px;
}
</style>

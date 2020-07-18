<template>
  <div>
    <v-bg bg-title="新闻动态"></v-bg>
    <v-news-one></v-news-one>
  </div>
</template>
<script>
import vBg from "@/components/bg";
import vNewsOne from "@/components/news/newsOne";
export default {
  components: {
    vBg,
    vNewsOne
  }
};
</script>
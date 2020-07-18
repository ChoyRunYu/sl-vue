<template>
  <div>
    <v-bg bg-title="新闻动态"></v-bg>
    <v-news-list></v-news-list>
  </div>
</template>
<script>
import vBg from "@/components/bg";
import vNewsList from "@/components/news/newsList";
export default {
  components: {
    vBg,
    vNewsList
  }
};
</script>
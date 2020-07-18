<template>
    <div>
        <v-bg bgTitle="微视频"></v-bg>
        <videos-list></videos-list>
    </div>
</template>
<script>
import vBg from "@/components/bg"
import videosList from '@/components/videos/videosList'
export default {
    components:{
        vBg,
        videosList
    }
}
</script>
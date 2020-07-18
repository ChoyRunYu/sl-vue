<template>
    <div>
        <v-bg bgTitle="近期活动"></v-bg>
        <activities-list></activities-list>
    </div>
</template>
<script>
import vBg from "@/components/bg"
import activitiesList from "@/components/activities/activitiesList"
export default {
    components:{
        vBg,
        activitiesList
    }
}
</script>
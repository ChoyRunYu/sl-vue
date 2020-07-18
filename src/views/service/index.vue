<template>
    <div>
        <v-bg bgTitle="服务中心"></v-bg>
        <service-list></service-list>
    </div>
</template>
<script>
import vBg from "@/components/bg"
import serviceList from '@/components/service/serviceList'
export default {
    components:{
        vBg,
        serviceList
    }
}
</script>
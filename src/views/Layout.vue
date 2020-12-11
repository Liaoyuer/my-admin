<template>
    <div class="flex justify-between">
        <sidebar/>
        <div class="flex-sub right">
            <app-header/>
            <!-- <tags/> -->
            <div class="content">
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
import AppHeader from '../components/layout/Header'
import sidebar from '../components/layout/Sidebar'
// import tags from '../components/layout/Tags'
export default {
    components: {
        AppHeader,
        sidebar,
        // tags
    }
}
</script>
<style lang="less">
    .right{
        background: #f0f0f0;
    }
</style>
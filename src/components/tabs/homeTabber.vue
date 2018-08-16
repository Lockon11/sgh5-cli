<template>
    <div class="homeTabber">
        <router-view></router-view>
        <my-tabbar></my-tabbar>
    </div>
</template>

<script>
import myTabbar from './tabbar.vue'
    export default {
        components:{
            myTabbar
        }
    }
</script>

<style scoped>
.homeTabber{
    height: 100%;
}
</style>
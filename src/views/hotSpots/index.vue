<template>
    <!-- 我的 -->
    <div>
        <!-- 上部检索区 -->
        <search-layout />
        <!-- 下部内容列表区 -->
        <my-content />
    </div>
</template>

<script>
import searchLayout from '@/components/searchLayout' // 上部检索区
import MyContent from '@/components/MyContent' // 下部内容列表区
export default {
    components:{
        searchLayout,
        MyContent
    },
    data () {
        return {
            
        }
    }
}
</script>

<style>

</style>
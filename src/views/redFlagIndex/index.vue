<template>
    <!-- 发布库 -->
    <div>
        <!-- 上部检索区 -->
        <search-layout />
        <!-- 下部内容列表区 -->
        <my-content />
    </div>
</template>

<script>
import searchLayout from '@/components/searchLayout' // 上部检索区
import MyContent from './publish' // 下部内容列表区
export default {
    components:{
        searchLayout,
        MyContent
    },
    name: 'redFlagIndex',
    data () {
        return {
            
        }
    }
}
</script>

<style>

</style>
<template>
    <!-- 素材库 -->
    <div>
        <!-- 上部检索区 -->
        <search-layout :test.sync="test"/>
        <!-- 下部内容列表区 -->
        <my-content :searchValue.sync="test" />
    </div>
</template>

<script>
import searchLayout from './searchLayout' // 上部检索区
import MyContent from './materiaDepot' // 下部内容列表区
import { constants } from 'os';
export default {
    components:{
        searchLayout,
        MyContent
    },
    data () {
        return {
          test: '3days',
        }
    },
}
</script>

<style>

</style>
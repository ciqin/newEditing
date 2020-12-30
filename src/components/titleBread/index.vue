<template>
  <div class="title_bread">
        <p class="title">
            <span></span>
            <el-tooltip class="item" effect="dark" :content="title" placement="top-start">
                <span>{{ title }}</span>
            </el-tooltip>
            <!-- 横线 -->
            <span></span>
        </p>
  </div>
</template>

<script>
export default {
    props: [ 'title' ]
}
</script>

<style lang='scss' scoped>
.title_bread {
    .title {
        font-size: $font16px;
        display: flex;
        align-items: center;
        margin-top: 0;
        @include color("title-color");
        span:nth-child(1) {
            display: inline-block;
            width: 3px;
            height: 16px;
            @include background_color("title-bg");
            margin-right: 10px;
        }
        span:nth-child(2) {
            overflow:hidden;  //超出部分隐藏
            text-overflow:ellipsis;  //超出部分显示...
            white-space:nowrap;  //文本强制一行显示    
        }
    }
}
</style>
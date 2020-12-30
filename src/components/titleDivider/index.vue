<template>
    <div class="title_divider">
        <label :style="{width: width +'px'}">{{title}}</label>
        <span></span>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '热门素材'
        },
        width: {
            type: Number,
            default: 80
        }
    }
}
</script>

<style lang='scss' scoped>
.title_divider {
    width: 100%;
    display: flex;
    align-items: center;
    label {
        display: block;
        font-weight: 400;
        width: 80px;
        font-size: $font16px;
        @include color('title-divider-color')
    }
    span:nth-child(2) {
        display: inline-block;
        width: 100%;
        height: 1px;
        @include background-color('title-divider-bg')
    }
}
</style>
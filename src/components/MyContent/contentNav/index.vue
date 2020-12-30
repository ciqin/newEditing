<template>
  <div>
    <!-- 内容列表上部导航条 -->
    <ul class="nav-top">
      <div class="content-top-nav">
        <li class="liMenu" v-for="(item,dex) in contentNav" :key="dex" @click="TypeConversion(item,dex)" :class="dex==index?'hover':''">
          {{item.label}}
        </li>
      </div>
      <div class="list-switchover">
        <span class="el-icon-menu"></span>
        <span class="el-icon-s-grid"></span>
        <li>{{$t('m.multimedia')}}</li>
        <li>{{$t('m.video')}}</li>
        <li>{{$t('m.audio')}}</li>
      </div>
    </ul>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentNav:[{
        value: 'TOTAL',
        label: '全部'
      },
      {
        value: 'COMPO',
        label: '多媒体稿'
      },
      {
        value: 'TEXT',
        label: '文字稿'
      },
      {
        value: 'PHOTO',
        label: '图片稿'
      },
      {
        value: 'GRAPH',
        label: '图表稿'
      },
      {
        value: 'GALLERY',
        label: '图集稿'
      },
      {
        value: 'VIDEO',
        label: '视频稿'
      },
      {
        value: 'LIVE',
        label: '直播稿'
      },
      {
        value: 'AUDIO',
        label: '音频稿'
      },
      {
        value: 'HREF',
        label: '链接稿'
      },
      {
        value: 'WECHAT',
        label: '微信稿'
      }],
      index: 0
    }
  },
  methods: {
    TypeConversion (item,dex) {
      console.log(item)
      this.index = dex;
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-top{
  display: flex;
  height: 45px;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  .content-top-nav {
    font-size: 16px;
    display: flex;
    .liMenu {
      line-height: 45px;
      margin: 0 15px;
      cursor: pointer;
    }
    .liMenu.hover{
      color: var(--navBarColor);
      border-bottom: 1px solid var(--navBarColor);
    }
  }
  .list-switchover{
    line-height: 45px;
    font-size: 16px;
    cursor: pointer;
    span {
      margin: 0 10px;
    }
  }
}
  
  
</style>

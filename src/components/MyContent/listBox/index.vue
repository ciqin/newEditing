<template>
  <div class="list">
    <!-- 列表样式1 -->
    <div class="noData" v-if="false">
      暂无数据
    </div>
    <div id="search-result-list" v-else>
      <div class="content_style" v-for="(item,index) in list" :key="index">
        <div class="coverAndTitle">
          <div class="CoverPlan">
            <img :src="item.url" alt="#" />
          </div>
          <div class="title_abstract">
            <div class="text_title"  @click="manuscriptDetails(item)">
              <span>{{item.title}}</span>
            </div>
            <div>
              <span class="el-icon-time"></span>
              <span class="distance">{{item.time}}</span>
              <span v-if="item.type == 'COMPO'" class="type_style">多媒体稿</span>
              <span v-if="item.type == 'TEXT'" class="type_style">文字稿</span>
              <span v-if="item.type == 'PHOTO'" class="type_style">图片稿</span>
              <span v-if="item.type == 'GRAPH'" class="type_style">图表稿</span>
              <span v-if="item.type == 'GALLERY'" class="type_style">图集稿</span>
              <span v-if="item.type == 'VIDEO'" class="type_style">视频稿</span>
              <span v-if="item.type == 'LIVE'" class="type_style">直播稿</span>
              <span v-if="item.type == 'AUDIO'" class="type_style">音频稿</span>
              <span v-if="item.type == 'HREF'" class="type_style">链接稿</span>
              <span v-if="item.type == 'WECHAT'" class="type_style">微信稿</span>
            </div>
            <div>
              <span class="el-icon-connection"></span>
              <span class="distance">{{item.handler}}</span>
            </div>
          </div>
        </div>
        <div class="enshrineAndBtn">
          <div class="enshrine">
            <i class="el-icon-unlock"></i>
            <i class="el-icon-star-off"></i>
          </div>
          <div>
            <el-button size="small">默认按钮</el-button>
            <el-button size="small">默认按钮</el-button>
            <el-button size="small">默认按钮</el-button>
            <el-dropdown>
              <el-button size="small">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>双皮奶</el-dropdown-item>
                <el-dropdown-item>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
    <div>
      <manuscript-info ref="manuscriptInfo"></manuscript-info>
    </div>
  </div>
</template>

<script>
import manuscriptInfo from '@/views/Dialog/manuscriptInfo'
export default {
  name: 'listBox',
  components:{
    manuscriptInfo
  },
  data () {
    return {
      list: [{
        title: '这是标题...',
        url: 'http://www.baidu.com',
        time: '2020-11-24 10:05:20',
        handler: '诺克萨斯处理中',
        type: 'TEXT'
      },
      {
        title: '这是标题...',
        url: 'http://www.baidu.com',
        time: '2020-11-24 10:05:20',
        handler: '诺克萨斯处理中',
        type: 'WECHAT'
      },
      {
        title: '这是标题...',
        url: 'https://pic4.zhimg.com/80/v2-ca6bffb26f22513ded142dff81ea309b_720w.jpg',
        time: '2020-11-24 10:05:20',
        handler: '诺克萨斯处理中',
        type: 'COMPO'
      },
      {
        title: '这是标题...',
        url: 'http://www.baidu.com',
        time: '2020-11-24 10:05:20',
        handler: '诺克萨斯处理中',
        type: 'PHOTO'
      },
      {
        title: '这是标题...',
        url: 'http://hongqi.wengegroup.com:9080/sprint/stream/stories/workspace/CO5dc3c407e4b014d112ff01ce?attachmentName=thumbnail_1573111093370.jpeg',
        time: '2020-11-24 10:05:20',
        handler: '诺克萨斯处理中',
        type: 'HREF'
      },
      {
        title: '这是标题...',
        url: 'http://source.wengegroup.com:8080/media_system/5c7e3ddc0cf2b3ebdde3e5ef/5c8b12000cf2bb487fd87411/1/20200910/53501259537c8f9928cca567ec35dd46.jpg',
        time: '2020-11-24 10:05:20',
        handler: '诺克萨斯处理中',
        type: 'VIDEO'
      }]
    }
  },
  methods: {
    manuscriptDetails(item){
      this.$refs.manuscriptInfo.dialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .list{
    .noData{
      width: 100%;
      margin: 10px 0;
      text-align: center;
    }
    .content_style {
      cursor: pointer;
      height: 104px;
      display: flex;
      // background: #ccc;
      border-bottom: 1px solid #ccc;
      justify-content: space-between;
      align-items: center;
      .coverAndTitle{
        display: flex;
        .CoverPlan {
          width: 116px;
          height: 87px;
          background: #ccc;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .title_abstract {
          margin-left: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .text_title {
            font-size: 18px;
            font-weight: 700;
          }
          .type_style {
            display: inline-block;
            padding: 3px;
            margin-left: 8px;
            border: 1px solid #ccc;
            border-radius: 3px;
          }
          .distance {
            margin-left: 5px;
          }
        }
      }
      .enshrineAndBtn {
        .enshrine {
          display: flex;
          justify-content: flex-end;
          i {
            cursor: pointer;
            margin: 6px;
          }
        }
      }
    }
    .content_style:hover {
      
    }
  }
  
</style>

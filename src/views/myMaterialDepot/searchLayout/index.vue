<template>
  <div class="content-top">
    <ol>
      <li class="content-top-title">
        <span>{{myTitle}}</span> / <span style="margin: 0px 10px">{{myNav}}</span> <span style="cursor: pointer;"><i class="el-icon-refresh"></i></span>
      </li>
      <li class="content-top-search">
            <div class="search_time">
              <el-date-picker v-model="value1" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" size="small"></el-date-picker>
            </div>
            <div class="search_btn">
              <ul class="recentSearch">
                <li v-for="(item,dex) in recent" :key="dex" @click="recentBtn(item,dex)" class="recentTime" :class="dex==index?'hover':''">{{item.label}}</li>
              </ul>
              <div>
                <el-button size="small" class="" @click="search_btn">检索</el-button>
                <el-button size="small" class="">重置</el-button>
              </div>
              <!-- <div class="expertSearch" @click="advancedSearch">
                <a>高级检索 &gt;&gt;&gt;</a>
              </div> -->
            </div>
            <div>
              <el-button size="small" class="">上传素材</el-button>
              <el-button size="small" class="">上传目录</el-button>
            </div>
      </li>
    </ol>
    <div>
      <search-dialog ref="searchDialog"></search-dialog>
    </div>
  </div>
</template>

<script>
import searchDialog from '@/views/Dialog/searchDialog'
export default {
  name: 'ViewsSearchLayout',
  components:{
    searchDialog
  },
  props: {
    test: {
      type: String,
      default: '3days',
    }
  },
  data() {
    return {
      myTitle: '素材库',
      myNav: '图片',
      input3: '',
      select: '',
      value1: '',
      index: 0,
      recent:[{
        value: '3days',
        label: '近三天'
      },{
        value: 'week',
        label: '近一周'
      },{
        value: 'month',
        label: '近一月'
      }]
    }
  },
  methods:{
    recentBtn (item,dex) { // 近三天、近一周、近一月检索
      this.index = dex;
      this.$emit('update:test',item.value)
    },
    search_btn() { // 检索按钮
      
    },
    advancedSearch () { // 高级检索
      this.$refs.searchDialog.dialogFormVisible = true
    }
  }
}
</script>
<style>
  .el-select .el-input {
    width: 100px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .el-date-range-picker__time-header {
    display: none;
  }
  .el-range-editor--small.el-input__inner {
    width: 240px;
  }
  .el-range-editor--small.el-input__inner span{
    margin-right: 10px;
  }
</style>


<style lang="scss" scoped>
  .content-top {
    min-height: 124px;
    background: #ffffff;
    padding: 10px;
    font-size: 16px;
    .content-top-title{
      display: flex;
      align-items: center;
        line-height: 32px;
      height: 50px;
      border-bottom: 1px solid #ccc;
    }
  }
  .content-top-search {
    margin: 20px 0px;
    display: flex;
    .search_time {
      margin-left: 10px;
    }
    .search_btn {
      display: flex;
      .recentSearch{
        // margin-top: 8px;
        display: flex;
        .recentTime {
          font-size: 16px;
          line-height: 32px;
          margin: 0 10px;
          cursor: pointer;
        }
        .recentTime.hover{
          color: var(--navBarColor)
        }
      }
      .expertSearch {
        margin-left: 10px;
        line-height: 32px;
      }
    }
  }
</style>

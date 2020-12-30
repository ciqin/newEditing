<template>
  <div class="content-list">
    <el-container>
      <el-container>
        <el-aside width="200px">
          <!-- 内容左侧树 -->
          <content-sidebar />
        </el-aside>
        <el-container>
          <el-main>
            <div>
              <!-- 内容列表上部导航条 -->
              <!-- <content-nav /> -->
            </div>
            <div class="list-content">
              <!-- 内容列表1 -->
              <layout-list :listValue="listValue"/>
              <!-- 内容列表2 -->
              <!-- <layout-list-box v-else /> -->
            </div>
            <div class="pageList">
              <el-pagination background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-size="100"
                layout="prev, pager, next, total, jumper" 
                :total="1000">
              </el-pagination>
            </div>
          </el-main>
          <!-- <el-footer>
            
          </el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import contentSidebar from './sidebar/index' // 内容左侧树
import layoutList from './content/index' // 内容列表1
// import { watch } from 'fs';
// import contentNav from '@/components/MyContent/contentNav/index' // 内容列表上部导航条
// import layoutList from '@/components/MyContent/list/index' // 内容列表1
// import layoutListBox from '@/components/MyContent/listBox/index' // 内容列表2

export default {
  name: 'materiaDepot',
  components:{
    contentSidebar,
    // contentNav,
    layoutList,
    // layoutListBox
  },
  props: {
    searchValue: {
      type: String,
      default: '3days'
    }
  },
  data() {
    return {
      currentPage4: 4,
      listValue: []
    }
  },
  watch:{
    searchValue(val){
      if(val == 'week'){
        this.listValue = [{
          one: 'week1',
          imgUrl: ''
        },{
          one: 'week2',
          imgUrl: ''
        }]
      }else if(val == 'month'){
        this.listValue = [{
          one: 'month1',
          imgUrl: ''
        },{
          one: 'month2',
          imgUrl: ''
        },{
          one: 'month3',
          imgUrl: ''
        }]
      }else {
        this.listValue = [{
          one: '3days1',
          imgUrl: ''
        },{
          one: '3days2',
          imgUrl: ''
        },{
          one: '3days3',
          imgUrl: ''
        },{
          one: '3days4',
          imgUrl: ''
        },{
          one: '3days5',
          imgUrl: ''
        },{
          one: '3days6',
          imgUrl: ''
        },{
          one: '3days7',
          imgUrl: ''
        }]
      }
    }
  },
  created(){
    if(this.searchValue == 'week'){
        this.listValue = [{
          one: 'week1',
          imgUrl: ''
        },{
          one: 'week2',
          imgUrl: ''
        }]
      }else if(this.searchValue == 'month'){
        this.listValue = [{
          one: 'month1',
          imgUrl: ''
        },{
          one: 'month2',
          imgUrl: ''
        },{
          one: 'month3',
          imgUrl: ''
        }]
      }else {
        this.listValue = [{
          one: '3days1',
          imgUrl: ''
        },{
          one: '3days2',
          imgUrl: ''
        },{
          one: '3days3',
          imgUrl: ''
        },{
          one: '3days4',
          imgUrl: ''
        },{
          one: '3days5',
          imgUrl: ''
        },{
          one: '3days6',
          imgUrl: ''
        },{
          one: '3days7',
          imgUrl: ''
        }]
      }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
}
</script>

<style lang="scss" scoped>
  .content-list {
    margin-top: 20px;
    background: #FFFFFF;
    display: flex;
    .el-header, .el-footer {
      background-color: #B3C0D1;
      color: #333;
    }
    
    .el-aside {
      background-color: #D3DCE6;
      color: #333;
    }
    
    .el-main {
      // padding: 0px 20px 20px 20px;
      padding: 0px 20px;
      color: #333;
    }
    .pageList {
      margin: 15px;
      display: flex;
      justify-content: flex-end;
    }
  }
  
</style>



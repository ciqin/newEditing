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
              <content-nav />
            </div>
            <div class="list-content">
              <!-- 内容列表1 -->
              <layout-list v-if="false"/>
              <!-- 内容列表2 -->
              <layout-list-box v-else />
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
import contentNav from './contentNav/index' // 内容列表上部导航条
import layoutList from './list/index' // 内容列表1
import layoutListBox from './listBox/index' // 内容列表2

export default {
  components:{
    contentSidebar,
    contentNav,
    layoutList,
    layoutListBox
  },
  data() {
    return {
      currentPage4: 4
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


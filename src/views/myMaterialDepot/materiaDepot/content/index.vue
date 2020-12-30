<template>
  <div>
    <el-row>
      <el-col :span="4" v-for="(item,index) in listValue" :key="index">
        <li class="imgsing">
          <input type="checkbox" class="picoptions">
          <div class="picListshow">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="imgName">
            <span>{{item.one}}</span>
            <span class="modification"><i class="el-icon-edit"></i></span>
          </div>
        </li>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'materialDepotContent',
  props: {
    listValue: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss" scoped>
  .imgsing {
    width: 240px;
    margin: 8px;
    margin-bottom: 16px;
    float: left;
    list-style: none;
    position: relative;
    .picoptions {
      position: absolute;
      top: 3px;
      width: 14px;
      height: 14px;
      left: 12px;
    }
    .picListshow {
      overflow: hidden;
      border-radius: 5px;
      width: 228px;
      height: 155px;
      display: inline-block;
      background: #ccc;
      text-align: center;
    }
    .imgName {
      height: 27px;
      padding-left: 10px;
      padding-right: 22px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .modification {
        cursor: pointer;
      }
    }
  }
</style>

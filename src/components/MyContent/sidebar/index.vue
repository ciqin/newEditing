<template>
  <div class="content-sidebar">
    <div class="handle" v-for="(item,dex) in sidebarList" :key="dex" :class="dex==index?'active':''" @click="myWarehouse(item,dex)">
      <span>{{item.lable}}</span>
      <span>({{item.value}})</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['navBarColor']),
  },
  data() {
    return {
      index: 0,
      sidebarList: [{
        lable: '我的草稿',
        value: '123'
      },{
        lable: '待处理',
        value: '46'
      },{
        lable: '已处理',
        value: '789'
      },{
        lable: '我的收藏',
        value: '23'
      },{
        lable: '废稿箱',
        value: '123'
      }]
    }
  },
  methods:{
    myWarehouse(item,dex) {
      this.index = dex;
    }
  }
}
</script>

<style lang="scss" scoped>
  .content-sidebar {
    padding: 10px;
    height: 100%;
    background-color: #fff;
    margin-right: 2px;
    .handle {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      border-radius: 4px;
      padding: 10px;
      margin: 10px 0;
    }
    .handle:hover{
      background-color: #e8ecf0;
      color: var(--navBarColor);
    }
    .active{
      background-color: #e8ecf0;
      color: var(--navBarColor);
    }
  }
</style>

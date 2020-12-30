<template>
  <div class="content-sidebar">
    <el-tree 
      :data="data"
      node-key="id"
      default-expand-all
      :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button type="text" size="mini" @click="() => append(data)" v-if="data.authorityAdd">
            <i class="el-icon-plus"></i>
          </el-button>
          <el-button type="text" size="mini" @click="() => remove(node, data)" v-if="data.authorityDel">
            <i class="el-icon-delete"></i>
          </el-button>
        </span>
      </span>
    </el-tree>
  </div>
</template>

<script>
let id = 1000;
export default {
  data() {
    const data = [{
      id: 1,
      label: '图片',
      authorityAdd: true,
      authorityDel: false,
      children: [{
        id: 4,
        label: '二级 1-1',
        authorityAdd: true,
        authorityDel: true,
        children: [{
          id: 9,
          label: '三级 1-1-1',
          authorityAdd: false,
          authorityDel: true,
        }, {
          id: 10,
          label: '三级 1-1-2',
          authorityAdd: false,
          authorityDel: true,
        }]
      }]
    }, {
      id: 2,
      label: '视频',
      authorityAdd: true,
      authorityDel: false,
      children: [{
        id: 5,
        label: '二级 2-1',
        authorityAdd: true,
        authorityDel: true,
      }, {
        id: 6,
        label: '二级 2-2',
        authorityAdd: true,
        authorityDel: true,
      }]
    }, {
      id: 3,
      label: '音频',
      authorityAdd: true,
      authorityDel: false,
      children: [{
        id: 7,
        label: '二级 3-1',
        authorityAdd: true,
        authorityDel: true,
      }, {
        id: 8,
        label: '二级 3-2',
        authorityAdd: true,
        authorityDel: true,
      }]
    }];
    return {
      data: JSON.parse(JSON.stringify(data)),
    }
  },
  methods: {
    append(data) {
      const newChild = { id: id++, label: 'testtest', children: [] };
      if (!data.children) {
        this.$set(data, 'children', []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },

    handleNodeClick(data) {
      console.log(data);
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
    .custom-tree-node {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      padding-right: 8px;
    }
  }
</style>

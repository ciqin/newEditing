<template>
  <div>
    <el-drawer
      title="我是标题"
      :modal="false"
      :show-close="false"
      :visible.sync="dialog"
      :direction="direction">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      direction: 'rtl',
    }
  },
  methods: {
    // handleClose () {

    // }
  }
}
</script>

<style>

</style>

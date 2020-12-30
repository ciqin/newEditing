<template>
  <div>
    <el-dialog title="高级搜索" :visible.sync="dialogFormVisible" width="600px" :close-on-click-modal="false">
      <el-form :model="form">
        <el-form-item label="稿件ID" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" size="small"></el-input>
        </el-form-item>
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" size="small"></el-input>
        </el-form-item>
        <el-form-item label="内容" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" size="small"></el-input>
        </el-form-item>
        <el-form-item label="发布URL" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" size="small"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false" size="small">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
}
</script>

<style>

</style>
